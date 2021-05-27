const Customer = require('./models/customer');
const knex = require('./util/database');

async function main() {
    // Delete all persons from the db.
    await Customer.query().delete();
  
    // Insert one row to the database.
    await Customer.query().insert({
      name: 'Jennifer Aniston',
      email: 'ja@gmail.com',
    });
  
    // Read all rows from the db.
    const customer = await Customer.query();
  
    console.log(customer);
  }
  
  main()
    .then(() => knex.destroy())
    .catch((err) => {
      console.error(err);
      return knex.destroy();
    });