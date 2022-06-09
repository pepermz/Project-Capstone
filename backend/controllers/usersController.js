const User = require("../model/userModel")
const bcrypt = require("bcrypt")

module.exports.register = async (req,res,next) => {
    try {
        const { username, email, password } = req.body;
        //Check if username is already in use
        const usernameCheck = await User.findOne({ username })
        if(usernameCheck)
            return res.json({msg: "Username already in use", status: false})
        //Check if email is already in use
        const emailCheck = await User.findOne({ email })
        if(emailCheck)
            return res.json({msg: "Email already in use", status: false})
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,username,password: hashedPassword,
        })

        delete user.password;
        return res.json({status: true, user})

    } catch(err) {
        next(err)
    }
}