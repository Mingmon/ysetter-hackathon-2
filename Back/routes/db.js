var mongojs = require('mongojs');

var databaseUrl = 'Planx';
var collections = ['projectid', 'employee',];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};
