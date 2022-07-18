const mongoose = require('mongoose');


const TasklistDataSchema = new mongoose.Schema({
    titulo: String,
    notas: String,
    prioridade:Boolean,


});

module.exports = mongoose.model('Tasklist', TasklistDataSchema);