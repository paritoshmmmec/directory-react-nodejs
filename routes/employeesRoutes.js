var express= require('express')
var employeeRouter= express.Router();
var employees = require('../data/employee');


var findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(employees.filter(function(employee) {
            return (employee.firstName + ' ' + employee.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } else {
        res.send(employees);
    }
};

var findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};

employeeRouter.get('/', findAll);
employeeRouter.get('/:id', findById);

module.exports= employeeRouter;