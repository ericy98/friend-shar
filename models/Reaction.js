const { Schema, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: "Please enter your reaction!",
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: "What's your username?",
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('DD MMM YYYY [at] hh:mm a'),
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = ReactionSchema;