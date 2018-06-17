var mongojs = require('mongojs');

var databaseUrl = 'Planx';
var collections = ['projectid', 'employee',];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};

/*
var mongojs = require('mongojs');

var databaseUrl = 'Planx';
var empcollections = ['projectid', 'employeeData',];
var procollections = ['projectid', 'projectData',];

var employeDB = mongojs(databaseUrl, empcollections);
var projectDB = mongojs(databaseUrl, procollections);

module.exports = {
    employeDB: employeDB,
    projectDB: projectDB
};

*/
