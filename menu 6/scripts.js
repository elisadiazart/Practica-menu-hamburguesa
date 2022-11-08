const MenuElement = document.getElementById('icon-menu')
const LineElement = document.getElementById('line')

MenuElement.addEventListener('click', () => {
    LineElement.classList.toggle('line-plus')
});