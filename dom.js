const card = document.querySelector('#card')
const cardTitle = document.querySelector('#card-title')
const form = document.querySelector('#form')
const toggle = document.querySelector('#toggle')
const userName = document.querySelector('#userName')
const charCount = document.querySelector('#charCount')
const submitBtn = document.querySelector('#submitBtn')
const message = document.querySelector('#message')
const userForm = document.querySelector('#userForm')


console.log(cardTitle);
console.log(cardTitle.textContent);

cardTitle.innerHTML = 'abhilash <H1>ffff</H1>'

card.addEventListener('click', (e) => {
     card.classList.toggle('selected')
     // card.classList.remove('selected')
     // card.classList.add('selected')
})

toggle.addEventListener('click', (e) => {
     e.stopPropagation()
     form.classList.toggle('hidden')
})

userName.addEventListener('input', (e) => {
     let userName =  e.target.value 
      charCount.textContent = `${userName.length} / 10 characters`  
      charCount.style.color = userName.length > 10 ? 'red' : 'green'
})

userForm.addEventListener('submit', (e) => {
      e.preventDefault()
     const para = document.createElement('p')
     // console.log(userName.value);
     para.textContent = userName.value
     message.appendChild(para)
     
     


})