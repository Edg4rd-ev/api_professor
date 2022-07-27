const cors = require('cors');
const express = require('express');
const app = express();
const Teacher = require('./models/Teacher')

app.use(cors());
app.use(express.json());

//create users route
app.post('/create_teacher', async (req, res) => {
  try {
    const {id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone} = req.body;
    const teacher = await Teacher.create({id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone});
    res.send(teacher);
  } catch (err) {
    res.status(400).send(err);
  }
});

//list users route
app.get('/list_teacher', async (req, res) => {
  try {
    const teacher = await Teacher.findAll();
    res.send({ teacher });
  } catch (err) {
    res.status(400).send(err);
  }
});

//list one user route
app.get('/list_by_id/:id_professor', async (req, res) => {
  try {
    const teacherId = req.params.id_professor;
    const teacher = await Teacher.findByPk(teacherId);
    res.send(teacher);
  } catch (err) {
    res.status(400).send(err);
  }
});

//update user route
app.patch('/update_teacher/:id_professor', async (req, res) => {
  try {
    const teacherId = req.params.id_professor;
    const {id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone} = req.body;
    const teacher = await Teacher.update( {id_titulo:id_titulo, tx_nome:tx_nome, tx_sexo:tx_sexo, tx_estado_civil:tx_estado_civil, dt_nascimento:dt_nascimento, tx_telefone:tx_telefone }, {
      where:{
        id_professor:teacherId
      }
    });
    res.send(teacher);
    const teacherN = await Teacher.findByPk(teacherId);
    res.send(teacherN);
  } catch (err) {
    res.status(400).send(err);
  }
});

//delete user route
app.delete('/delete_teacher/:id_professor', async (req, res) => {
  try {    
    const teacherId = req.params.id_professor;
    const teacher = await Teacher.destroy({
      where: {
        id_professor:teacherId
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