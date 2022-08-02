function openMenu() {
    document.body.classList.add('menuExpanded')
}

let hamburgerMenu = document.getElementById('hamburgerMenu')

function closeMenu(){
    document.body.classList.remove('menuExpanded')
    hamburgerMenu.classList.add('closed')
}