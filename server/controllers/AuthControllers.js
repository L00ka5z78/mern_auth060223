const User = require("../model/authModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

/* create token assigned to id, pass the secret key and expiring time*/
const createToken = (id) => {
    return jwt.sign({ id }, "super secret key actually whatever i want to write here", {
        expiresIn: maxAge,
    });
};

// error handling
const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    console.log(err);
    if (err.message === "Incorrect email") {
        errors.email = "That email is not registered";
    }

    if (err.message === "Incorrect password") {
        errors.password = "That password is incorrect";
    }

    //mongo error server E11000 is for duplicated ekey in collection 
    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }
    //if wrong email is passed throw "Users validation failed" 
    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

module.exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;                           //get data from req.body
        const user = await User.create({ email, password });            // create user
        const token = createToken(user._id);                            //create token for user in db 

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
        });

        res.status(201).json({ user: user._id, created: true });     //set status on succces and create user
    } catch (err) {                                                  //errorhandling with object errors defined above
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });   //if error dont create user
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password); //login user AS A SINGLE VALUES not object like with register
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id, status: true });
    } catch (err) {                              //errorhandling with object errors defined above
        const errors = handleErrors(err);
        res.json({ errors, status: false });    //if error dont login user
    }
};
