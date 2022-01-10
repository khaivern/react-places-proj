import { useState } from 'react';
import useFormHook, { initialInputStructure } from '../../hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { useAppDispatch } from '../../store';
import { authActions } from '../../store/auth';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../util/validators';
import './Auth.css';

const Auth: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const dispatch = useAppDispatch();
  const {
    formState: { inputs, overallIsValid },
    inputHandler,
    setFormData,
  } = useFormHook(
    {
      email: initialInputStructure,
      password: initialInputStructure,
    },
    false
  );

  const authFormHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let url: string;
    if (isLoginMode) {
      url = 'http://localhost:8000/auth/login';
    } else {
      url = 'http://localhost:8000/auth/signup';
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputs.email!.val,
        password: inputs.password!.val,
        name: inputs.name?.val,
        image: inputs.image?.val,
      }),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error('Signing Up failed : ' + data.message);
      }
      console.log(data);

      if (data.token && data.userId) {
        dispatch(authActions.login({ token: data.token, userId: data.userId }));
      } else {
        // send sign up notification
        setIsLoginMode(true);
      }
    });
  };

  const switchModeHandler = () => {
    if (isLoginMode) {
      // login -> signup
      setFormData({
        inputs: {
          ...inputs,
          name: {
            val: '',
            isValid: false,
          },
          image: {
            val: null,
            isValid: false,
          },
        },
        overallIsValid: false,
      });
    } else {
      // signup -> login
      setFormData({
        inputs: {
          ...inputs,
          name: null,
          image: null,
        },
        overallIsValid: inputs.email!.isValid && inputs.password!.isValid,
      });
    }

    setIsLoginMode((prevState) => !prevState);
  };

  return (
    <Card className='authentication'>
      <header className='authentication__header'>
        <h1>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</h1>
      </header>
      <hr />
      <form onSubmit={authFormHandler}>
        {!isLoginMode && (
          <Input
            element='input'
            type='text'
            id='name'
            label='Name'
            onInput={inputHandler}
            errorText='Please enter a valid name'
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        {!isLoginMode && (
          <ImageUpload id='image' center onInput={inputHandler} />
        )}
        <Input
          element='input'
          type='email'
          id='email'
          label='E-mail'
          onInput={inputHandler}
          errorText='Please enter a valid email'
          validators={[VALIDATOR_EMAIL()]}
        />
        <Input
          element='input'
          type='password'
          id='password'
          label='Password'
          onInput={inputHandler}
          errorText='Please enter a valid password of at least 4 characters'
          validators={[VALIDATOR_MINLENGTH(4)]}
        />
        <Button disabled={!overallIsValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>

      <pre>{JSON.stringify(inputs, null, 2)}</pre>
    </Card>
  );
};

export default Auth;
