"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config2 = exports.config = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.config = config;
var config2 = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_ORDENES
};
exports.config2 = config2;