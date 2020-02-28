const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Celeb = mongoose.model('Celeb', celebSchema);

module.exports = Celeb;