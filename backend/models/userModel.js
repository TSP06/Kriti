const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    hostel: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(hostel,username, password) {

    // validator
    if(!hostel || !username || !password){
        throw Error('All fields must be filled')
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ username })

    if(exists){
        throw Error('Username already in use')
    }

    const salt = await bcrypt.genSalt(10) // hashing passwords
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ hostel, username, password: hash})

    return user
}

userSchema.statics.login = async function(hostel, username, password){
    if(!hostel || !username || !password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({username})

    if(!user){
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}
module.exports = mongoose.model('User',userSchema)