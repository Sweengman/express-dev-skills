const skills = [
    'organization',
    'accuracy',
    'eye for asthetics'
]

module.exports = {
    create,
    getOne,
    getAll,
    deleteOne
}

function create(skill) {
    skills.push(skill.skill)
    console.log(skills)
}

function getOne(id) {
    return skills[id]
}

function getAll() {
    return skills
}

function deleteOne(id) {
    killNum = skills.findIndex(skill => skill === id)
    skills.splice(killNum, 1)
}