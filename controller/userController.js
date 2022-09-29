const getUser = (req,res) => {
            res.json({
                statusCode: 400,
                 message: "success", 
                 data: {name: "Adrian"}
                });
}

module.exports = {getUser}