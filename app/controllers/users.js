const { httpError } = require('../helpers/handleError')
const userModel = require('../models/user')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find();
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        let id = req.params.id;
        const item = await userModel.findById(id).exec();
        res.send({ data: item });
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try {
        const { name, lastName, age, email, password, role } = req.body
        const resDetail = await userModel.create({
            name, lastName, age, email, password, role
        })
        res.send({ mesage: "Item created", info: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = async (req, res) => {
    try {
        let id = req.params.id;
        const { email, password } = req.body
        const resDetail = await userModel.updateOne(
            { _id: id },
            { password: password }
        );
        res.send({ mesage: "Item updated", info: resDetail });
    } catch (e) {
        httpError(res, e)
    }
}

const deleteItem = async (req, res) => {
    try {
        let id = req.params.id;
        await userModel.findByIdAndDelete(id);
        res.send({ mesage: "Item deleted" });
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }