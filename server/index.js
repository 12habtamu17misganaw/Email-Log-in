import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/Posts.js'


const app = express();

app.use(bodyParser.json({limit: "50mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))

app.use(cors());

app.use('/posts', postRoutes)

//app.use('/post', postRoutes)
//const CONNECTION_URL = 'mongodb+srv://login:login@cluster0.ezopw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://habtamu-test:test@cluster0.ezopw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
mongoose.connect(CONNECTION_URL)
.then( () => console.log(`mongodb connect: ${PORT}`))
.catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));