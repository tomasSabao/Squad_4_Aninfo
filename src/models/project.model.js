const mongoose = require("mongoose");
const validator = require("validator");

const state= [
    "No iniciado",
    "Iniciado",
    "En progreso",
    "Cancelado",
    "En producción",
    "Terminado",
]

const projectSchema = mongoose.Schema({
    id:{
        type: String,
        required: [true, 'ProjectID is a required field'],
        validate(value) {
            if (!validator.isLength(value, { min: 4, max: 10 })) {
                throw Error("Length of the projectID should be between 4-10");
            }
        }
    },
    name: {
        type: String,
        required: [true, 'Name is a required field'],
        validate(value) {
          if (!validator.isLength(value, { min: 3, max: 20 })) {
            throw Error("Length of the name should be between 3-20");
          }
        }
    },
    description: {
        type: String,
        required: [true, 'Descriptions is a required field'],
        validate(value) {
          if (!validator.isLength(value, {min: 1, max: 1000})) {
            throw Error("The description cannot be empty, the maximum number of characters is 1000");
          }
        }
      },
    ProjectLeader: {
        type: String,
        required: [true, 'Project leader is a required field'],
        validate(value) {
          if (!validator.isLength(value, {min: 1, max: 20})) {
            throw Error("Length of the project leader should be between 3-20");
          }
        }
    },    
    status: {
        type: String,
        required: false,
        default: "No Iniciado",
        validate(value) {
          if (!states.includes(value)) {
            throw Error("Status error");
          }
        }
    },
    initDate: {
        type: Date,
        required: false, 
        default: Date.now,
        validate(value) {
          if (!validator.isDate(value)) {
            throw Error("Format date error");
          }
        }
    },
    estimatedEndDate: {
        type: Date,
        required: false, 
        default: Date.now,
        validate(value) {
          if (!validator.isDate(value)) {
            throw Error("Format date error");
          }
        }
    },






















});
module.exports = mongoose.model('Project', projectSchema);