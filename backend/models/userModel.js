const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.statics.signup = async function (email, password , username) {

    // Validation
    if (!email || !password || !username) {
        throw Error("All Fields must be filled.")
    }

    if (!validator.isEmail(email)) {
        throw Error("Use a valid email.")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a Strong Password")
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error("Email already in use.")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash ,username});
    console.log(user);
    return user;

}

userSchema.statics.login = async function (email,password){
    if(!email || !password)
        throw Error("All fields must be filled.")

        const account = await this.findOne({email});
        if(!account){
            throw Error("Account does not exsist.")
        }
        const compare = await bcrypt.compare(password,account.password)

        if(!compare){
            throw Error("Incorrect Password")
        }

        return account;

}

module.exports = mongoose.model('User', userSchema)
