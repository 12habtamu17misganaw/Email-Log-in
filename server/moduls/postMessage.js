import  mongoose  from "mongoose";


const postSchema = mongoose.Schema({
    username: String,
    password: String,
    
    likeCount: {

        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: new Date()
    },
     
});
const PostMessage = mongoose.model ('postMessage', postSchema)

export default PostMessage