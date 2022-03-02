const mongoose = require("mongoose");
//PARA SUBIR A HEROKU HAY QUE AGREGAR LAS ENV EN EL REMOTO
const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ce12s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const dbConnect = () => {
    const optionsConnection = {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }
    mongoose.connect(URI, optionsConnection, (err, res) => {
        if (!err) {
            console.log("*****CONNECTION DONE!*****\n");
        }else{
            console.log("*****CONNECTION FAIL!*****\n" + err);
        }
    });
}
//probando
module.exports = { dbConnect }