const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/persona";
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(URI)
    .then(db => console.log("DB conectada"))
    .catch(err => console.error(err));
module.exports = mongoose;