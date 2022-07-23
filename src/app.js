const cors = require('cors');
const express = require('express');
const app = express();
const User = require('./models/User')

app.use(cors());
app.use(express.json());

//create users route
app.post('/create_user', async (req, res) => {
  try {
    const {name, email} = req.body;
    const user = await User.create({name, email});
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//list users route
app.get('/list_user', async (req, res) => {
  try {
    const user = await User.findAll();
    res.send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
});

//list one user route
app.get('/list_by_id/:user_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const user = await User.findByPk(userId);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//update user route
app.patch('/update_user/:user_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const {name, email} = req.body;
    const user = await User.update( { name:name, email:email }, {
      where:{
        id:userId
      }
    });
    res.send(user);
    const userN = await User.findByPk(userId);
    res.send(userN);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete user route
app.delete('/delete_user/:user_id', async (req, res) => {
  try {    
    const userId = req.params.user_id;
    const user = await User.destroy({
      where: {
        id:userId
      }
    });
    res.send({msg:'foi de beise'});
  } catch (err) {
    res.status(400).send(err);
  }
});

//server port
app.listen(5000, () => {
  console.log('online e metendo na porta '+ 5000);
});