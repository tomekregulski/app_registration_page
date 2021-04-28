const sequelize = require("../config/connection");
const Demo = require("../models/Demo");
const demoData = require("./demo-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Demo.bulkCreate(demoData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
