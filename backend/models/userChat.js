const mongoose = require("mongoose");
const userChatsSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        chats: [
            {
                _id: {
                    type: String,
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                isFavorite: {
                    type: Boolean,
                    default: false,
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserChat", userChatsSchema);
