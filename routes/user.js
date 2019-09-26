const express = require('express');
const router = express.Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views/index')
const { Page, User } = require("../models");

router.get('/', async (req, res, next)=>{
    try{
    const listOfUsers = await User.findAll();
    res.send(userList(listOfUsers));
    }
    catch(error){next(error)}

})

router.get('/:id', async (req,res, next)=>{
    try{
        const author = await User.findOne({ where : { id: req.params.id }})
        const result = await Page.findAll({ where : { authorId:req.params.id }});
        res.send(userPages(author,result));
    }
    catch(error){next(error)}
    
})



module.exports = router;