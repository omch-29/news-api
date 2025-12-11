const news = require("../services/news");

async function home(req, res) {
    try{
        const category = req.query.category || "technology";
        const articles = await news.fetchRecent(category);
        res.render("index",{ articles,category, error: null});
    }catch(e){
        res.render("index", {articles:[], error: e.message});
    }
}

async function search(req, res) {
    try{
        const q = req.query.q;
        if(!q) return res.redirect("/");

        const articles = await news.fetchSearch(q);
        res.render("index",{articles, category: "search", error: null});
    }catch(e){
        res.render("index",{articles: [], error: e.message});
    }
}

async function show(req, res){
    const idx=req.params.idx;
    const decoded = Buffer.from(idx, "base64").toString("utf-8");
    const data = JSON.parse(decoded);

    res.render("details",{ item: data});
}




module.exports = {home, search, show};