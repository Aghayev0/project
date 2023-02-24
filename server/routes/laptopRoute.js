const laptopModel = require('../Models/productModel');
const router = require('express').Router();
router.get('/get' , async (req,res)=>{
    let laptop = await laptopModel.find({})
    res.send(laptop)
})
router.get('/get/pro' , async (req,res)=>{
    let laptop = await laptopModel.find({})
    res.send(laptop)
})
router.get("/get/:id", async (req, res) => {
    let { id } = req.params;
    let laptopp = await laptopModel.findById(id);
    res.send(laptopp);
  });
router.post('/post' , async (req,res)=>{
let newLaptop = laptopModel({...req.body})
await newLaptop.save()
res.status(200).send({message:"added successfully" , laptops:newLaptop})

})
module.exports = router;
