const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteTodo
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res) {
    res.render('skills/focus', {
        skill: req.params.id,
        title: 'Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function create(req, res) {
    console.log(req.body)
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id)
    res.redirect('/skills')
}