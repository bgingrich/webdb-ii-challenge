const db = require('../data/db-config.js');

function getCars(){
    return db('cars')
}

function getCarById(id){
    return db('cars').where({id}).first();
}
function addNewCar({VIN, make, model, mileage, transmission, status}){
    return db('cars').insert({ VIN, make, model, mileage, transmission, status
    })
}
module.exports={
    getCars,
    getCarById,
    addNewCar
} 