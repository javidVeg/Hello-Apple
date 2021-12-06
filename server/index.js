// import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import sendSms from './twilio.js'; 


import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

// dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://david1:david1@cluster0.q7cs7.mongodb.net/HelloApple?retryWrites=mtrue&w=majority';
const PORT = process.env.PORT|| 5001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


// const userDatabase = [];

// // Create user endpoint
// app.get('/user', (req, res) => {
//   const { phoneNumber } = req.body;
//   const user = {
//     phoneNumber
//   };

//   const welcomeMessage = 'Welcome to Opalod! Your verification code is 54875';

//   sendSms(user.phoneNumber, welcomeMessage);

//   res.status(201).send({
//     message: 'Account created successfully, kindly check your phone to activate your account!',
//     data: user
//   })
// });
