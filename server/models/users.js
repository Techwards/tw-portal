import mongoose from 'mongoose'

const { Schema } = mongoose

export const userModel = () => {
    
    const userSchema = new Schema({
        auth0Id: String,
        firstName: String,
        lastName: String,
        fullName: String,
        picture: String,
        email: String
    })
    mongoose.model('users', userSchema)
}