const mobilemodel = require('../Models/mobileModel')
const router = require('express').Router();
router.get('/get/' , async (req,res)=>{
    let mobile = await mobilemodel.find({})
    res.send(mobile)
})
router.delete('/delete/:id' , async (req,res)=>{
    let { id } = req.params
    let deletemobile = await mobilemodel.findByIdAndDelete(id)
    res.send(deletemobile)
    })
router.get("/get/:id", async (req, res) => {
    let { id } = req.params;
    let mobilee = await mobilemodel.findById(id);
    res.send(mobilee);
  });
router.post('/post' , async (req,res)=>{
let newmobile = mobilemodel({...req.body})
await newmobile.save()
res.status(200).send({message:"added successfully" , mobiles:newmobile})

})
module.exports = router;
