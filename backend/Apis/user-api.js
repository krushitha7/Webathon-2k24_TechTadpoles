const exp = require('express')
const userApp = exp.Router();
const bcryptjs = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler') //to handle the async errors
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifyToken=require('../Middleware/verifyToken')

let usercollection
let chatcollection

userApp.use((req, res, next) => {
    usercollection = req.app.get('userscollection')
    chatcollection=req.app.get('chatcollection')
    next()
})


userApp.post('/user', expressAsyncHandler(async (req, res) => {
    //get user resource from client
    const newUser = req.body
    //check for duplicete user based on username
    const dbuser = await usercollection.findOne({ username: newUser.username })
    //if user found
    if (dbuser != null) {
        res.send({ message: 'User existed' })
    } else {
        //hash the password
        const hashedPassword = await bcryptjs.hash(newUser.password, 6)
        //replace the password with hashed one
        newUser.password = hashedPassword
        //create user
        await usercollection.insertOne(newUser)
        //send response
        res.send({ message: "User created" })
    }
}))


userApp.post('/login', expressAsyncHandler(async (req, res) => {
    //get cred obj from client
    const userCred = req.body
    //check for username
    const dbuser = await usercollection.findOne({ username: userCred.username })
    if (dbuser === null) {
        res.send({ message: "invalid username" })
    } else {
        //check for password
        const status = await bcryptjs.compare(userCred.password, dbuser.password)
        if (status === false) {
            res.send({ message: "Invalid password" })
        } else {
            //check for jwt token
            const signedToken = jwt.sign(
                { username: dbuser.username },
                process.env.SECRET_KEY,
                { expiresIn: '1w' })
            //send response
            res.send({
                message: 'login success',
                token: signedToken,
                user: dbuser
            })
        }
    }
}))


userApp.post('/chat',verifyToken,expressAsyncHandler(async(req,res)=>{

    const userChat= req.body;
    console.log(userChat)
    let result=await chatcollection.updateOne({id:14052004},{$addToSet:{chat:userChat}})
    console.log(result)
    res.send({message:"chat posted"})
}))


module.exports = userApp