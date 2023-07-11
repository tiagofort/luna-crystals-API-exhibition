const slideModel = require('./../models/Slide');

module.exports = {

    addSlide: async (req, res) => {
        var data = new Object();
        var max_id = await slideModel.find({}, {posicao: 1, _id: 0}).sort({posicao: -1}).limit(1);
        data = req.body;
            if(max_id.length > 0){
                data.posicao = max_id[0].posicao + 1;
            }else{
                data.posicao = 1;
            }
        
        try{
            await slideModel.create(data);
            res.send(data);
        }catch (err) {
            res.status(400).send(err);
        }
    },

    organizarSlide: async (req, res) => {
        var pos = req.body.pos;
        let slides = new Object();
        slides = await slideModel.find({ativo: true}).sort({posicao: 1});

        Object.keys(slides).forEach((item) => {
           if(slides[item].posicao > pos){
            slides[item].posicao = pos;
            pos = pos + 1;
           }  
        });
        try {
            for(let i = 0; i < slides.length; i++){
                await slideModel.findByIdAndUpdate(slides[i]._id, { posicao: slides[i].posicao});
            }
            res.send("Alterado com sucesso.");
        } catch (error) {
            console.dir(error);
            res.status(500).send(error);
        }   
    },

    buscarSlides: async (req, res) => {
       try{ 
            const slides = await slideModel.find({ativo: true}).sort({posicao: 1});
            res.json(slides)
       } catch (err) {
            res.status(400).send(err);
       } 
    },

    editarPosicao: async (req, res) => {
        const pos = req.params.posicoes.split('-');
        const id_origem = await slideModel.findOne({ posicao: pos[0] }, {_id: 1}).exec();
        const id_destino = await slideModel.findOne({ posicao: pos[1] }, {_id: 1}).exec();
        try {
            await slideModel.findByIdAndUpdate(id_origem, { posicao: pos[1]});
            await slideModel.findByIdAndUpdate(id_destino, { posicao: pos[0]});
            res.send("Alterado com sucesso.");
        } catch (error) {
            console.dir(error);
            res.status(500).send(error);
        } 
    },

    deleteSlide: async (req, res) => {
        await slideModel.findByIdAndRemove(req.params.id).catch((error)=>{
            res.send("Não foi possível remover!");
        });
            res.send("Excluído");
    },

}