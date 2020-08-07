const express = require('express');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const server = express()

server.use(express.json());


server.get('/', (req, res) =>{
  res.status(200).json({message: 'Sprint challenge Running'})
})

server.use('/project', projectRoutes);

server.use('/actions', actionRoutes);




module.exports = server