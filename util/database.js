const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    user: "root", // replace with your mysql username
    password: "9871709924", // replace with your mysql password
    database: "ks-store" // replace with your db name
  },
});

// Give the Knex instance to Objection.
Model.knex(knex);

module.exports = knex;