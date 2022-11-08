const menuElement = document.getElementById ('icon-menu')
const lineElement = document.getElementById('line')

menuElement.addEventListener('click', () => {
    lineElement.classList.toggle('line-rotate')
});