const categoriItem = document.querySelectorAll('.item')

categoriItem.forEach(item => {
	const categoryTitle = item.querySelector('h2').textContent
	const categoryList = item.querySelectorAll('ul li').length
	console.log(`Category: ${categoryTitle}`)
	console.log(`Elements: ${categoryList}`)
})

console.log('Number of categories: ' + categoriItem.length)
