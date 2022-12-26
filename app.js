import express from 'express'
import { getRestaurant, getRestaurants } from './api/restaurants.js'

const app = express()
const port = 8080

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  const restaurants = await getRestaurants()

  res.render('pages/home', {
    title: 'Accueil',
    list: restaurants,
  })
})

app.get('/restaurant', async (req, res) => {
  const restaurant = await getRestaurant(req.query.id)
  res.render('pages/restaurant', { data: restaurant })
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.listen(port, () => {
  console.log(`Front-end app listening on port ${port}`)
})
