const express = require('express')
const router = express.Router()
const User = require('../models/newUser')
const bcrypt = require('bcryptjs')

router.post('/login', async (req, res) => {

    //check if user exists
    try {
        const foundUser = await User.findOne({ username: req.body.username })
        console.log(foundUser, ' foundUser')

        //if user exists use bcrypt to check password valid
        if (foundUser) {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.userId = foundUser._id
                req.session.username = foundUser.username
                req.session.logged = true
            } else {
                req.session.message = 'Username or password is incorrect'
                res.redirect('/')
            }
        } else {
            req.session.message = 'Username or password is incorrect'
            res.redirect('/')
        }
    } catch (e) {
        res.send(e)
    }
})

router.post('/register', async (req, res) => {

    try {
        const createdUser = await User.create(req.body)
        console.log(createdUser, ' Created User')

        res.send()
    } catch (e) {
        res.send(e)
    }
})

module.exports = router