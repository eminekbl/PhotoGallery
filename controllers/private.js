exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "you got access to private data"
    })
}