const {Webuser} = require('../models/Webuser')

const webUserController = ({
    getAll:(req,res)=>{
        we.find()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    getById:(req,res)=>{
        let id = req.params.id
        Webuser.findById(id)
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    add:(req,res)=>{
        var webuser = new Webuser({
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            password:req.body.password
        })
        webuser.save()
        res.json(webuser)
    },
    signin:(req,res)=>{
        const signIn = Webuser.find({
            email:req.body.email,
            password:req.body.password
        });
      
        if (signIn) {
          return res.status(400).json({ error: 'Password or Email is already taken. Please choose a different one.' });
        }
        res.json(signIn)
    },
    delete:(req,res)=>{
        let id = req.params.id
        Webuser.findByIdAndDelete(id)
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
        },
    update:(req,res)=>{
        let id = req.params.id
        Webuser.findByIdAndUpdate(id,req.body,{new :true}
        ).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
})
module.exports = {
    webUserController
}