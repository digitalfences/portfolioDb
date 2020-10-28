const mongoose = require('./db/connection');
const Schema = mongoose.Schema;

const workSchema = new Schema({
    id: Number,
    repoName: String,
    link: String,
    contributors: [String],
    builtWith: [String],
    installation: String,
    usage: String,
    acknowledgements: [String]
});

module.exports = mongoose.model("work", workSchema);