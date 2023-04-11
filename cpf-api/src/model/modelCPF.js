const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,        
    },
    completed:{
        type:Boolean,
        defaulse:false
    },
    cpf:{
        type:Number,
        required: true
    },
})

module.exports = mongoose.model("Cadastro", modelSchema);
