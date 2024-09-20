const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

let posts = [{
    "Title": "Sample",
    "Content": "Lorem Ipsum Dolor"
}]

app.get("/posts", (req, res) => {
    res.send(posts);
    console.log(`Posts sent successfully!`);

})

app.post("/posts", (req, res) => {
    if (req.body) {
        console.log(req.body)
        posts.push(req.body);
        res.status(201);
        res.send(`Post added successfully!`)
    }
    else {
        console.error(`Empty post received!`)
    }

})
app.listen(5000, () => {
    console.log(`Server is running on port 5000!`);
});
