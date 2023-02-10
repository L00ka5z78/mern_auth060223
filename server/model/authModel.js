const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
});

/* 1. before saving user to db we encrypt the password. take userSchema with PRE function. call next if not it will be stucked here 
2. password  == bcrypt hashes password with generated salt 
3. we have access to THIS. because we use common function instead arrow function
*/
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (email, password) {   //check / get user from db by email
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password); //compare hashed password equals user password
        if (auth) {
            return user;
        }
        throw Error("Incorrect password");
    }
    throw Error("Incorrect email");
};

module.exports = mongoose.model("Users", userSchema);