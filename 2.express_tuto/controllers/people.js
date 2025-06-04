let {people} = require('../data.js');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
};

const getPerson = (req, res) => {
    const {id} = req.params;
    const person = people.find((people) => people.id === Number(id));
    if(person){
        res.status(200).json({success: true, data: person});
    }
};

const createPerson = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: 'PLEASE PROVIDE NAME VALUE'});
    }
    res.status(201).send({success: true, person: name});
};

const postman = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(401).send("PLEASE PROVIDE A NAME");
    }
    res.status(200).send({success: true, data: [...people, name]});
};

const updatePerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name);

    const person = people.find((people) => people.id === Number(id));
    if(!name){
        return res.status(404).json({success: false, msg: "PLEASE PROVIDE A NAME FOR INPUT"});
    }
    const newPeople = people.map((person, index) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success: true, people: newPeople});
};

const deletePerson = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success: false, msg: "THERE IS NO PERSON WITH SUCH ID"});
    }
    if(!id){
        return res.status(404).json({success: false, msg: "PLEASE PROVIDE THE PARAMETER FOR URL"});
    }
    const update = people.filter((person) => person.id !== Number(id));
    res.status(200).json({success: true, data: update, status: "good"});
};

module.exports = {
    getPeople,
    getPerson,
    createPerson,
    postman,
    updatePerson,
    deletePerson
}