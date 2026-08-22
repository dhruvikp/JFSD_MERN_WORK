
exports.showLogin = (req, res) => {
    res.render('login')
}

exports.login = (req, res) => {
    const { username, password } = req.body;

    if(username === 'admin' && password === "123") {
        res.cookie("user", username)
        return res.redirect('/expenses');
    }

    res.status(401).send('Invalid credentials');
}

