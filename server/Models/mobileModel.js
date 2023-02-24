const mongoose = require("mongoose");
const mobileSchema = new mongoose.Schema(
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
    battery:{
        type: String,
        required: true,
    },
    camera:{
        type:String,
        require:true,
    },
    display:{
        type: String,
        required: true,
    },
    cpu:{
        type: String,
        required: true,
    }
  },
  
);

// const laptopModel = mongoose.model("laptops",laptopSchema);
const mobileModel = mongoose.model('mobiles',mobileSchema)

module.exports = mobileModel;