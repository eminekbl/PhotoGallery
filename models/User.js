const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: [6, 'Password must have min 6 characters'],
        maxlength: [16, 'Password must have max 16 characters'],
        // match: [
        //     /^(?=.*\d)$/,
        //     // "Password must be 6-16 characters including at least one letter, one number and one special character",
        // ], 
        select: false, //.select(+password) demeden gelmiyor sanirim bu sorguyu her yaptigimizda sifreyi geri gondermemek icin false yaptik
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
};
UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
}
UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)
    return resetToken
}
const User = mongoose.model("User", UserSchema)
module.exports = User