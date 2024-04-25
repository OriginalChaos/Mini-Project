const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/your_database_name';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
