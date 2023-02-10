const User = require("../model/authModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;                                                       //get token from req.cookies.jwt from FE
    if (token) {
        jwt.verify(                                                                      //verifies token, secret key with decoded token
            token,
            "super secret key actually whatever i want to write here",     // set key in other file as a variable
            async (err, decodedToken) => {
                if (err) {
                    res.json({ status: false });
                    next();
                } else {
                    const user = await User.findById(decodedToken.id);                  //find user by id decoded token.id
                    if (user) res.json({ status: true, user: user.email });             //get user by email
                    else res.json({ status: false });                                   //if user is deleted set status false
                    next();
                }
            }
        );
    } else {
        res.json({ status: false });
        next();
    }
};