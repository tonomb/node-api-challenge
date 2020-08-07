
const express = require('express');

const router = express.Router()

//======= /projects ========

router.get('/', (req, res)=>{
  res.status(200).json({message: ' project routes'})
})

module.exports = router