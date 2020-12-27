const { Schema, model } = require('mongoose');

const plantSchema = Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
})

module.exports = model('Plant', plantSchema);