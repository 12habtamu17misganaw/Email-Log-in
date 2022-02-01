import PostMessage from "../moduls/postMessage.js"
export  const getPostes = async ( req, res) => {

   try {
       const postMessages = await PostMessage.find();
       res.status(200).json(postMessages)
   } catch (error) {
       res.status(404).json({message: error.message });
       
   }
}

export const createPost = async (req, res) => {

    
console.log(req.body)
 const post = req.body;
const newPost = new PostMessage(post);
console.log(newPost)
try {
    await newPost.save();
    return res.status(201).json(newPost);

} catch (error) {
    console.log(error.message)
  return  res.status(409).json({ message: error.message})
}
}

export default getPostes