const express = require('express')
const app = express()

const userModel = require('./usermodel'); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/create', async (req, res) => {
  let createduser =await userModel.create(
    {name: "Usama",
     email:"aasmausama@gmail.com",
     username:"Usama123"   
    } )

    res.send(createduser);
})

app.get('/update', async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate({username:"aasma123"},{name: "maryam"}, {new: true} )

    res.send(updateduser);
})

app.get('/read' , async (req, res) => {
    let users = await userModel.find({username: "Usama123"});
    res.send(users);
})

app.get('/delete', async (req, res) => {
  let user = await userModel.findOneAndDelete({username:"aasma123"});

    res.send(user);
})



app.listen(3000);