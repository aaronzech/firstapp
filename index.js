const express = require("express");
const res = require("express/lib/response");
const app = express()
//console.dir(app);


// Any incoming request
// Call back request
// app.use((req,res) =>{
//     console.warn("We got a new request");
//     res.send("<h1>Hello, We got your request!</h1>")
// })
app.get('/',  (req,res) =>{
    res.send("Welcome Home!!!!")
} )

app.post('/cats', (req,res) =>{
    res.send("THIS IS A GET REQUEST");
})

app.get('/cats',  (req,res) =>{
    res.send("MEOW!!!")
} )

app.get('/dogs',  (req,res) =>{
    res.send("Woof!!!")
} )

// Generic pattern web path - route
app.get('/r/:subreddit', (req,res)=>{
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`Browsing the ${subreddit}`);
    
})

app.get('/search',  (req,res) =>{

    console.log(req.query);

        const {q} = req.query;
        res.send(`<h1>Search Results for: ${q}`);
} )


// When server starts up
app.listen(3000,()=>{
    console.log("LISTENIGN ON PORT 3000")
})