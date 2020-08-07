
const express = require('express');
const router = express.Router()

const projectDb  = require('../data/helpers/projectModel')

//======= /projects ========

//Read
router.get('/', (req, res)=>{
  projectDb.get()
    .then( projects =>{
      res.status(200).json(projects)
    })
  
})

//Create
router.post('/', (req, res) => {
  if(!req.body.name || !req.body.description){ //completed defaults to false
    res.status(400).json({error: "please include a name and description"})
  } else{
    projectDb.insert(req.body)
      .then( newProject =>{
        res.status(201).json(newProject)
      })
  }
})

//Read by Id
router.get('/:id', validateId, (req, res) => {
  projectDb.get(req.params.id)
    .then( project =>{
      res.status(200).json(project)
    })
})

//Update by id
router.put('/:id', validateId, (req, res) => {
  if(!req.body.name || !req.body.description || !req.body.completed){
    res.status(400).json({error: "Please include a name, description and completed. Completed must be a number (1 = true or 2 = false) or a string"})
  } else{
    projectDb.update(req.params.id, req.body)
      .then(updatedProject =>{
        res.status(200).json(updatedProject)
      })
  }
})


//Delete by id
router.delete('/:id', validateId, (req, res) => {
  projectDb.remove(req.params.id)
    .then(count =>{
      res.status(200).json({message: `successfully deleted ${count} record`})
    })
})





function validateId(req, res, next){
  projectDb.get(req.params.id)
    .then( project => {
      if(project){
        next()
      } else {
        res.status(404).json({error: `a project with id: ${req.params.id} was not found`})
      }
    })
}


module.exports = router