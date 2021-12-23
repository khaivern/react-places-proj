const express = require('express');
const { body } = require('express-validator');

const placesController = require('../controllers/places-controller.js');

const router = express.Router();

router.get('/:pid', placesController.getPlaceById);

router.get('/user/:uid', placesController.getPlacesByUserId);

router.post(
  '/',
  [
    body('title').not().isEmpty(),
    body('description').isLength({ min: 5 }),
    body('address').not().isEmpty(),
  ],
  placesController.createPlace
);

router.patch(
  '/:pid',
  [body('title').not().isEmpty(), body('description').isLength({ min: 5 })],
  placesController.updatePlace
);

router.delete('/:pid', placesController.deletePlace);

module.exports = router;