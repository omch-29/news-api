// const axios = require("axios");
// const {API_KEY, API_ROUTE} = require('../config');

// async function fetchRecent(category = "technology"){
//     const url=`${API_ROUTE}/top-headlines?category=${category}&language=en&apikey=${API_KEY}`;
//     const res = await axios.get(url);
//     return res.data.articles.filter(a => a.language === "en");
// }

// async function fetchSearch(query){
//     const url=`${API_ROUTE}/search?q=${query}&language=en&apikey=${API_KEY}`;
//     const res = await axios.get(url);
//     return res.data.articles.filter(a => a.language === "en");
// }

// module.exports = {fetchRecent, fetchSearch};

const axios = require("axios");
const { API_KEY, API_ROUTE } = require("../config");

// Detect if text looks English (basic but effective)
function isEnglish(text = "") {
    return /^[A-Za-z0-9 ,.'"!?()\-:;]+$/.test(text.replace(/\n/g, " "));
}

async function fetchRecent(category = "technology") {
    const url = `${API_ROUTE}/top-headlines?category=${category}&apikey=${API_KEY}`;
    const res = await axios.get(url);

    const articles = res.data.articles || [];

    // Keep only English articles
    return articles.filter(a =>
        isEnglish(a.title) || isEnglish(a.description)
    );
}

async function fetchSearch(query) {
    const url = `${API_ROUTE}/search?q=${query}&apikey=${API_KEY}&language=en`;
    const res = await axios.get(url);

    const articles = res.data.articles || [];

    return articles.filter(a =>
        isEnglish(a.title) || isEnglish(a.description)
    );
}

module.exports = { fetchRecent, fetchSearch };
