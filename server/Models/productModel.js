const mongoose = require("mongoose");
const laptopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price:{
        type: String,
      required: true,
    },
    image:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    releasedate:{
        type: String,
        required: true,
    },
    cpu:{
        type: String,
        required: true,
    },
    gpu:{
        type: String,
        required: true,
    }
    ,
    Ram:{
        type: String,
        required: true,
    }
    ,
    Windows:{
        type: String,
        required: true,
    }
    ,
    guarantee:{
        type: String,
        required: true,
    }
  },
  
);

// const laptopModel = mongoose.model("laptops",laptopSchema);
const laptopModel = mongoose.model('laptops',laptopSchema)

module.exports = laptopModel;