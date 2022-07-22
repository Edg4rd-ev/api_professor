const Sequelize = require('sequelize');
const sequelize = new Sequelize("crud", "root", "", {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log('Connected!');
}).catch((err) => {
  console.log(`Nor connected. Error: ${err}`);
});

module.exports = sequelize;