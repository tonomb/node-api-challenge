
const express = require('express');
const router = express.Router()

const actionsDb = require('../data/helpers/actionModel')

//======= /actions ========



//Read
router.get('/', (req, res)=>{
  actionsDb.get()
    .then( actions =>{
      res.status(200).json(actions)
    })
  
})

//Create
router.post('/', (req, res) => {
  if(!req.body.project_id || !req.body.description ){ //completed defaults to false
    res.status(400).json({error: "please include a project id and a description"})
  } else{
    actionsDb.insert(req.body)
      .then( newAction =>{
        res.status(201).json(newAction)
      })
  }
})

//Read by Id
router.get('/:id', validateId, (req, res) => {
  actionsDb.get(req.params.id)
    .then( action =>{
      res.status(200).json(action)
    })
})

//Update by id
router.put('/:id', validateId, (req, res) => {
  if(!req.body.description){
    res.status(400).json({error: "Please include a description"})
  } else{
    actionsDb.update(req.params.id, req.body)
      .then(updatedAction =>{
        res.status(200).json(updatedAction)
      })
  }
})


//Delete by id
router.delete('/:id', validateId, (req, res) => {
  actionsDb.remove(req.params.id)
    .then(count =>{
      res.status(200).json({message: `successfully deleted ${count} record`})
    })
})

function validateId(req, res, next){
  actionsDb.get(req.params.id)
    .then( action => {
      if(action){
        next()
      } else {
        res.status(404).json({error: `a actions with id: ${req.params.id} was not found`})
      }
    })
}




module.exports = router