export function createCardForRecipe(recipe) {
	console.log('recipe', recipe)
	recipe.recipes.forEach(recipe => {
		createCard(recipe)
	})
}
function createCard(recipe) {
	console.log('recipe2', recipe)
	const card = document.createElement('div')
	card.classList.add('card')
	const img = document.createElement('img')
	img.src = recipe.image
	img.alt = recipe.title
	const title = document.createElement('h2')
	title.textContent = recipe.title.substring(0, 15) + '...'
	const instructions = document.createElement('p')

	if (recipe.instructions.length < 150) {
		instructions.innerHTML = recipe.instructions
	}
	instructions.innerHTML = recipe.instructions.substring(0, 150) + '...'
	//card.append(img, healthScore, instructions)
	card.appendChild(img)
	card.appendChild(title)
	card.appendChild(instructions)
	console.log(card)

	const carouselInner = document.querySelector('.carousel-inner--first')
	carouselInner.appendChild(card)
}
