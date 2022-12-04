import express from "express";
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import dotenv from "dotenv";
// import connectDB from "./db/connect.js"

dotenv.config()

const app = express();

app.get('/', (req, res) => {
    // throw new Error('Something went wrong');
    res.send('server is running successfully');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;



const start=async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on port ${port}...`);
    });
  }
  catch(error){
    console.log(error);
  }
}

start();