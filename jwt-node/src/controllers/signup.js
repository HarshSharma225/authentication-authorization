const userServices = require('../Services/signup');

async function createUser(req,res){
    try{
        const userdata = req.body;
        const user = await userServices.createUser(userdata);
        res.status(201).json({user: user,message: "User created successfully"})    
    }catch(err){
        console.log(err);
        res.status(400).json({message: `Error: ${err}`})
    }

}

module.exports = {createUser};