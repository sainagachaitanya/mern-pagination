import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide a Title"]
    },
    author: {
        type: String,
        required: [true, "Please Provide a Author"]
    },
    body: {
        type: String,
        required: [true, "Please Provide a Body"]
    }
})

const Post = mongoose.model('Post', PostSchema);

export default Post;