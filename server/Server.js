const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const { MONGO_URL, PORT } = process.env
app.use(cors({
    origin: ['https://bespoke-taiyaki-d40a38.netlify.app',
        "http://localhost:5173"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
const authRouteUser = require('./Routes/AuthRoute')
app.use(cookieParser());
app.use(express.json())
app.use(express.static('Assets'))


app.use('/', authRouteUser)

app.use((req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    console.log("Request Type:", req.method);
    console.log("Request IP:", req.url);
    next();
});
mongoose.connect(MONGO_URL).then((result) => {
    console.log('connect to mongoDB')
}).catch((err) => {
    console.log(err)
});
console.log(PORT);
app.listen(PORT, () => {
    console.log(`server is ruing ${PORT}`)
})