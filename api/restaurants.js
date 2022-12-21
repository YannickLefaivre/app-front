import axios from 'axios'

const getRestaurants = async () => {
  try {
    const response = await axios.get('https://frozen-reef-84613.herokuapp.com/api/restaurants')

    console.log(`response.data.data = ${JSON.stringify(response.data.data, undefined, 2)}\n\n`)

    return response.data.data.flat()
  } catch (error) {
    console.error(error)
  }
}

export { getRestaurants }
