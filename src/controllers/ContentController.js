const Tasklist = require('../models/TasklistData');


module.exports =  {

        async update(req,res){
            const {id} = req.params;
            const {notas} = req.body;

            const tasklist = await Tasklist.findOne({ _id : id });

            if(notas){
                tasklist.notas  = notas;

                await tasklist.save();
            }

            return res.json(tasklist)

        }

}