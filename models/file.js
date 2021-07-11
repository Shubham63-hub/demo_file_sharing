const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// file schema that will be shared to the mongoose database
const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);