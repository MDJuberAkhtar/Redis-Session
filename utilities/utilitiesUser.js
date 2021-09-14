
exports.getAllUser = (req, res) => {
    const sess = req.session;
    console.log('this is all', sess);
    if (sess.username && sess.password) {
        if (sess.username) {
            res.json({message:"hi there"})
        }
    }
    else {
        res.json({message:"Sorry!  Please login"})
    }
}

exports.logUser = (req, res) => {
    const sess = req.session;
    console.log('this is sess', sess)
    const { username, password } = req.body
    sess.username = username
    sess.password = password
    console.log('final ses:', sess)
    // add username and password validation logic here if you want.If user is authenticated send the response as success
    res.end("success")
}

exports.logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.json({message:"You have logged out"})
    });
}