const { Schema, model } = require('mongoose');

const songSchema = Schema({
    title:      { type: String, required: true },
    lyrics:     { type: String, required: true }
    // any new attributes must 
    // NOT BE REQUIRED

    // newAttribute:     { type: ******, required: false }


})

module.exports = model('Song', songSchema)