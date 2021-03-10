const User = require('../models/User')
const sendEmail = require('../utis/sendEmail')
const crypto = require('crypto')

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({
            username, email, password
        })
        sendToken(user, 201, res)


    } catch (error) {
        //TODO next(error)
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                error: "This email address is already registered."
            })
        }
        res.status(500).json({
            success: false,
            error: error.message,
        })

    }
}
exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).select('+password')

        if (!user) {
            res.status(401).json({
                success: false,
                error: "Username or Password is incorrect"
            })
        }
        const isMatch = await user.matchPasswords(password)
        if (!isMatch) {
            res.status(401).json({
                success: false,
                error: "Username or Password is incorrect"
            })
        }
        sendToken(user, 201, res)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })

    }
    //TODO errorResponse
}
exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Email could not be send user"
            })
        }
        const resetToken = user.getResetPasswordToken()
        await user.save()
        const resetUrl = `http://localhost:3001/resetpassword/${resetToken}`;
        const message =
            `<h1>You have requested a new password reset </h1>
        <p>Please go to link for reset yout password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a> 
        `
        try {
            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message
            })
            res.status(200).json({
                success: true,
                data: `Email send to ${user.email}`
            })

        } catch (error) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined
            await user.save()
            res.status(500).json({
                success: false,
                error: `Email could not be sent ${error}`
            })
        }

    } catch (error) {
        // res.status(500).json({
        //     success: false,
        //     error: error
        // })
        next(error)
    }
}
exports.resetpassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex")
    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })
        if (!user) {
            res.status(400).json({
                success: false,
                error: "Invalid Reset Token"
            })
        }
        user.password = req.body.password
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined
        await user.save()
        res.status(201).json({
            success: true,
            data: "Password Reset Success"
        })
    } catch (error) {
        next(error)
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({
        success: true,
        token
    })
}