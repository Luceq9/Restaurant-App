import { createCardForRecipe } from './script.js'
import { showSlides } from './carousel.js'

const API_KEY = '20e3ea31d574466cb9f9c0fbe542dc63'
const apiKeyText = `&apiKey=${API_KEY}`
const URL = 'https://api.spoonacular.com/'

function handleResponse(response) {
	if (response.ok) {
		return response.json()
	}
	throw new Error('Network response was not ok.')
}

async function fetchData(endPoint) {
	try {
		const response = await fetch(`${URL}${endPoint}${apiKeyText}`)
		!response.ok && console.log('Error:', response)
		const data = await handleResponse(response)
		console.log(data)
		return data
	} catch (error) {
		console.log('Error:', error)
	}
}

async function createCard() {
	const endPoint = '/recipes/random?number=5'
	const data = await fetchData(endPoint)
	createCardForRecipe(data)
	showSlides(data)
}

createCard()
