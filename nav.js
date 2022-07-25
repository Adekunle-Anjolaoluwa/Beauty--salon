const hamburger = document.querySelector('.hamburger')
const navUL = document.querySelector('.navUL')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navUL.classList.toggle('active')
})
document.querySelectorAll('.nav-link').forEach((n) =>
 n.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navUL.classList.toggle('active')
 }),
)

