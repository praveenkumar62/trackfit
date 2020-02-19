const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error is '+err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error is'+err));
});

router.route('/:id').get((req, res) => {
    const id = req.params.id;

    Exercise.findById(id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error is '+err))
});

router.route('/:id').delete((req, res) => {
    const id=req.params.id;

    Exercise.findByIdAndDelete(id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error is '+err))
});

router.route('/update/:id').post((req, res) => {

    const id = req.params.id;
    Exercise.findById(id)
    .then( exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('exercise updated'))
        .catch(err => res.status(400).json('Error is '+err))
    })
    .catch(err => res.status(400).json('Error is '+err))
});

module.exports = router