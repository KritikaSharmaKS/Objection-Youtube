const Customer = require('./models/customer');
const Order = require('./models/order');
const knex = require('./util/database');

async function main() {
    // Delete all persons from the db.
    await Customer.query().delete();
    await Order.query().delete();
  
    // Insert one row to the database.
    const customer = await Customer.query().insert({
      name: 'Rachel Green',
      email: 'rg@gmail.com',
    });
  
    // Read all rows from the db.
    const customerRead = await Customer.query();
    console.log(customerRead);

    const order = await Customer.relatedQuery('order')
                        .for(customer.id)
                        .insert({ total: 55 });
    console.log(order);

    const orderTotal = await Order.query()
                                .select('total')
                                .where('customer_id', '=', customer.id)
                                .orderBy('total');
    
    console.log(orderTotal);
  }
  
  main()
    .then(() => knex.destroy())
    .catch((err) => {
      console.error(err);
      return knex.destroy();
    });