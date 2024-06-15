// const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    console.log(req.body.username)
    console.log(req.body.password)
    res.status(200).json({ success: 'true' })
  } catch (err) {
    console.error('Error in task update:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
module.exports = router
