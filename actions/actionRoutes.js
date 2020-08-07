
const express = require('express');

const router = express.Router()

//======= /actions ========

router.get('/', (req, res)=>{
  res.status(200).json({message: ' actions routes'})
})


module.exports = router