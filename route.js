const express = require('express');
const router = express.Router();

router.get('/new',(req,res)=>{
    const firstName="Suman";
    const lastName="Roy";
    res.status(200).json({message:"New name created",result:{firstName,lastName}});
});

module.exports = router;