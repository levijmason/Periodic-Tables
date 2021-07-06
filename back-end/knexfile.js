/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL= 'postgres://jucgvjlo:cxPQfQ4tzMYMPom3BdeqBBLv8JrGl8kz@batyr.db.elephantsql.com/jucgvjlo',
  DATABASE_URL_DEVELOPMENT = 'postgres://yzdiyuwb:22Ujw2kYCfLb2HImCR1W0w0aEn-nv3_L@batyr.db.elephantsql.com/yzdiyuwb',
  DATABASE_URL_TEST = 'postgres://dswbvpgc:mAj8dRUkVA7t7BsIWHU7KG5sn8LzWlHZ@batyr.db.elephantsql.com/dswbvpgc',
  DATABASE_URL_PREVIEW = 'postgres://szvtaezz:SOduVw9DXbtYNnnwP8uk3bNKG59D-4_h@batyr.db.elephantsql.com/szvtaezz',
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
