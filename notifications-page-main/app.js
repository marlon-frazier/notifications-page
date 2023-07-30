let count = 6
const notifications = document.querySelector('.count')
const user = document.querySelectorAll('.user')
const blip = document.querySelectorAll('.blip')
const markAll = document.querySelector('.mark-all')

for (let i = 0; i < user.length; i++){
    user[i].addEventListener('click', ()=>{
        if (!user[i].classList.contains('read') && (count >= 0)){
            notifications.innerText = count--
        }
        user[i].classList.add('read')
        user[i].style.backgroundColor = 'white'
        blip[i].classList.add('hidden')
        
    })
}

markAll.addEventListener('click', () => {
    user.forEach( element => {
        element.style.backgroundColor = 'white'
    })

    blip.forEach( dot => {
        dot.classList.add('hidden')
    })
    count = 0
    notifications.innerText = count
})
console.log(blip)