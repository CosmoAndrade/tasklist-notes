const Tasklist = require('../models/TasklistData');


module.exports =  {

  async  read(req,res){

        const prioridade = req.query;

        const prioridadeNotas =  await Tasklist.find(prioridade);

        return res.json(prioridadeNotas);
    },


    async update(req,res){
        const id = req.params.id;

        const tasklist = await Tasklist.findOne({ _id : id});


        if (tasklist.prioridade){
            tasklist.prioridade = false;
        } else{
            tasklist.prioridade = true;
        }

        await tasklist.save();

        return res.json(tasklist);
       
    }


}
