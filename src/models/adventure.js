const mongoose = require('mongoose');
const Schema = mongoose.Schema

const adventureSchema = new Schema({
    name: String,
    date: Date,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adventurers: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Adventure = mongoose.model('adventure', adventureSchema);

module.exports = Adventure