const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.protect = async (req, res, next) => {
    let token
    if (req.headers.autorization) {
        token = req.headers.autorization
    }
    if (!token) {
        res.status(401).json({
            success: false,
            error: 'Not authorizated to access this route'
        })
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)

        if (!user) {
            res.status(404).json({
                success: false,
                error: "No user found"
            })
        }
        req.user = user
        next()

    } catch (error) {
        res.status(401).json({
            success: false,
            error: "Not authorizated to accessthis route"
        })
    }
}