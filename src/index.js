const express = require("express")
const app = express()
const port = 3000
const findCities = require("./findCities")
const getCitiesNearWithin = require("./citiesWithin")
const getSunData = require("./sunSetAndRish")

app.get("/", (req, res) => res.send("hello world!"))

const myFakeData = [
    {
        title: "hello",
        messgae: "world!", 
        emo: ":p"
    },{
        title: "hola",
        messgae: "mundo!", 
        emo: ":0"
    },{
        title: "你好",
        messgae: "世界!", 
        emo: ":X"
    }
]
app.get("/data", (req, res) => res.json(myFakeData))

app.get("/test", (req, res) => {
    res.json(req.query)
})

app.get("/findCity", (req, res) => {
    res.json(findCities(req.query.city))
})

app.get("/findSunData", (req, res) => {
    res.json(getSunData(req.query.city))
})

app.get("/getCitiesNearWithin", (req, res) => {
    res.json(getCitiesNearWithin(req.query.city, req.query.distance, req.query.num))
})


app.listen(port, () => console.log("Example app listening at http://localhost:" + port))