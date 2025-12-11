require('dotenv').config();
module.exports={
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.API_KEY,
    API_ROUTE: "https://gnews.io/api/v4"
};