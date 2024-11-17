import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    })

// Hash the password before saving it to the database
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();  // if the passowrd is not modified then we don't need to hash
    // this.password = await bcrypt.hash(this.password, 10)
    // next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt) //hash the password
        next(); //process with the saving the middleware
    } catch (error) {
        next(error)
    }
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await matchPassword(enteredPassword,this.password); //return true if passowd is correct 
}

//create the use model 
const User = mongoose.model("User",userSchema);

export default User;