var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var usersRouter = require("./users");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/users/", usersRouter);

module.exports = app;
