const Model = require('../models/likes.model')


const create = (req,res) => {
    console.log('likes.create', req.body)
    Model.create(req.body)
        .then( e => {console.log('created like'); res.json(e)} )
        .catch( e => {console.log('not created like'); res.json(e)} )
}
const find = (req, res) => {
    Model.find()
        .then( e => res.json( e ) )
        .catch( e => res.json( e ) )
}

const userLikes = (req, res) => {
    Model.find( {users: req.params.id} )
        .then( e => res.json(e) )
        .catch( e => res.status(400).json({ errors: 'oops something when wrong in find' })  )
}

const findOne = (req, res) => {
    // or change to body
    Model.findOne( {_id: req.params.id} )
        .then( e => res.json(e) )
        .catch( e => res.status(400).json({ errors: 'oops something when wrong in findone' })  )
}

const update = (req, res) => {
    Model.findOneAndUpdate( {_id: req.body._id}, req.body, { new: true } )
        .then( e => {res.json(e)} )
        .catch( e => res.json(e) )
}

const deleteOne = (req, res) => {
    Model.deleteOne({_id: req.params.id})
        .then( e => res.json(e) )
        .catch( e => res.json(e) )
}

module.exports = {create, find, findOne, update, deleteOne, userLikes};