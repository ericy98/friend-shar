const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const moment = require('moment');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "You need to enter a thought!",
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('DD MMM YYYY [at] hh:mm a'),
        },
        username: {
            type: String,
            required: "What's your username?",
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;