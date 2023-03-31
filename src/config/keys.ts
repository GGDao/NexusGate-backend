const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    mongoURI: process.env.MONGODB_URI,
    mongoDev: 'mongodb+srv://localhost:7000/login_demo',
    secretOrKey: process.env.ACCESS_TOKEN
};
