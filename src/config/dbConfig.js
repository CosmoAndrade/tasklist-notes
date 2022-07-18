

const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://cosmoandrade:2384@cluster0.cmts0zh.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true

});


module.exports = connection;