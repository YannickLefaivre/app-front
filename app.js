import express from "express";
import { getRestaurants } from "./api/restaurants.js";

const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get('/', async (req, res) => {
  const restaurants = await getRestaurants()
  
  console.log(`games = ${JSON.stringify(restaurants, undefined, 2)}\n\n`)

  res.render("pages/home", {list: restaurants})
})

app.get('/about', (req, res) => {
  res.render("pages/about")
})

app.listen(port, () => {
  console.log(`Front-end app listening on port ${port}`)
})
