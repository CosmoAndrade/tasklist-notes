const Tasklist = require('../models/TasklistData');


module.exports =  {


   async read(req,res){

        const tasklists = await Tasklist.find();

        return res.json(tasklists);

    },

    async create (req,res) {
        const {titulo, notas, prioridade} = req.body;

        if(!notas || !titulo) {
            res.status(400).json({error : "Necessário um título e uma anotação"});
        }
       
        
        const tasklistCreated = await Tasklist.create({
            titulo,
            notas,
            prioridade
        })

        return res.json(tasklistCreated);
        
        
        },

       async  delete (req,res) {

            const id = req.params.id;

            const tasklistDeleted = await Tasklist.findOneAndDelete({ _id: id });

            if(tasklistDeleted){
                return res.json(tasklistDeleted);
            }

            return res.status(401).json({erro: "Registro não encontrado!"})

        }
        
        
}



   
   

