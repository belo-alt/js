const mongoose = require('mongoose');

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopoLogy", true);

mongoose.connect('mongodb://localhost:27017/C:\Users\samsung-nc\Desktop\cursojs\src')
.then(() => {
console.log("MongoDB online.");
}).catch(erro => {
    console.log(erro);
});

db = mongoose.connection;

module.exports = db;