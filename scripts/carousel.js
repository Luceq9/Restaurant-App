export function showSlides(data) {
	console.log(data)
	const slidesBox = document.querySelector('.carousel-inner')
	data.recipes.forEach((recipe, index) => {
		const slide = document.createElement('div')
		slide.classList.add('carousel-item')
		if (index === 0) {
			slide.classList.add('active')
		}

		slide.innerHTML = `
        <img src="${recipe.image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h5>${recipe.title}</h5>
        <p>${recipe.summary}</p>
        `
		slidesBox.appendChild(slide)
		console.log('dsad')
	})
	const carousel = document.querySelector('#carouselExampleCaptions')
	carousel.addEventListener('slid.bs.carousel', () => {
		const activeSlide = carousel.querySelector('.carousel-item.active')
		if (activeSlide) {
			const slides = Array.from(slidesBox.querySelectorAll('.carousel-item'))
			slides.forEach(slide => slide.classList.remove('active'))
			activeSlide.classList.add('active')
		}
	})

	blockArrow()
}

function blockArrow() {
	const carouselItems = document.querySelectorAll('.carousel-item')
	const next = document.querySelector('.carousel-control-prev-icon')
	const prev = document.querySelector('.carousel-control-next-icon')
	console.log(carouselItems)
	// Sprawdź, czy są jakiekolwiek elementy .carousel-item
	if (carouselItems.length > 0 && next && prev) {
		const lastCarouselItem = carouselItems[carouselItems.length - 1]
		const firstCarouselItem = carouselItems[0]

		// Sprawdź, czy lastCarouselItem jest zdefiniowany
		if (lastCarouselItem && lastCarouselItem.classList.contains('active')) {
			next.classList.add('disabled')
		} else {
			next.classList.remove('disabled')
		}

		// Sprawdź, czy firstCarouselItem jest zdefiniowany
		if (firstCarouselItem && firstCarouselItem.classList.contains('active')) {
			prev.classList.add('disabled')
		} else {
			prev.classList.remove('disabled')
		}
	}
}
document.addEventListener('DOMContentLoaded', () => {
	const carousel = document.querySelector('#carouselExampleCaptions')
	carousel.addEventListener('slid.bs.carousel', blockArrow)
})
