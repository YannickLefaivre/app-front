import axios from 'axios'

const getRestaurants = async () => {
  try {
    const response = await axios.get(
      'https://frozen-reef-84613.herokuapp.com/api/restaurants'
    )

    return response.data.data.flat()
  } catch (error) {
    console.error(error)
  }
}

const getRestaurant = async (id) => {
  try {
    const response = await axios.get(
      `https://frozen-reef-84613.herokuapp.com/api/restaurants/${id}`
    )

    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export { getRestaurants, getRestaurant }
