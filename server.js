const express = require('express');
const cors = require('cors')

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const server = express()

server.use(express.json());
server.use(cors());


server.get('/', (req, res) =>{
  res.status(200).json({message: 'Sprint challenge Running'})
})

server.use('/projects', projectRoutes);

server.use('/actions', actionRoutes);




module.exports = server