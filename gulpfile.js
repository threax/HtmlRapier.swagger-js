"use strict";

var gulp = require("gulp");
var build = require('./build');

gulp.task("default", function () {
    return build(__dirname + '/node_modules/swagger-client/', __dirname + "/dist");
});