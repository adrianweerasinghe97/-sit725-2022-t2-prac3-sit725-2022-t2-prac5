const getUser = (req,res) => {
            res.json({statusCode: 400, message: "success", data: {'Name': 'Adrian'}})
}

module.exports = {getUser}