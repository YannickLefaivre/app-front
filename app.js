import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'
import { getRestaurant, getRestaurants } from './api/restaurants.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  const restaurants = await getRestaurants()

  for (let i = 0; i < restaurants.length; i++) {
    restaurants[i].attributes.thumbnail = `images/restaurants/restaurant-${restaurants[i].id}.jpg`;
  }

  res.render('pages/home', {
    title: 'Accueil',
    list: restaurants,
  })
})

app.get('/restaurant', async (req, res) => {
  const restaurant = await getRestaurant(req.query.id)

  restaurant.attributes.thumbnail = `images/restaurants/restaurant-${req.query.id}.jpg`;

  res.render('pages/restaurant', { data: restaurant })
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.listen(port, () => {
  console.log(`Front-end app listening on port ${port}`)
})
