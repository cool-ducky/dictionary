const express = require('express')
const { verifyKeyMiddleware } = require('discord-interactions') // Used to verify connection to discord
const app = express() // Creating a server to recieve and respond to requests
app.post('/interactions', verifyKeyMiddleware(process.env.public_key), (req, res) => {
  const interaction = req.body;
  if(interaction.type == 2) { // send definition
  const send = require('./send') // get send function
  send(interaction, res)
  }
  if(interaction.type == 4) { // send similar search results
  const search = require('./search') // get search function
  search(interaction, res)
  }
})
app.listen()