const card = document.querySelector('#card')
const cardTitle = document.querySelector('#card-title')

console.log(cardTitle);
console.log(cardTitle.textContent);

cardTitle.innerHTML = 'abhilash <H1>ffff</H1>'

card.addEventListener('click', (e) => {
     card.classList.toggle('selected')
})

