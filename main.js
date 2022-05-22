//adicione o evento scroll e execute a função onScroll
window.addEventListener('scroll', onScroll )

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo:
    const targetLine = scrollY + innerHeight / 2

    //quais dados vou precisar?
    //verificar se a seção passou da linha:

    //o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo:
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    //verificar se a base esta abaixo da linha alvo
    //quais dados vou precisar?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seçã passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine &&
    !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.
    querySelector(`.menu a[href*=${sectionId}]`)

    //começamos sempre removendo a classe, para quando entrar na condição ele adicionar
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }


}























function showNavOnScroll() {
    if (scrollY > 0) {
    navigation.classList.add('scroll') 
    } else {
    navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
    backToTopButton.classList.add('show')
    } else {
    backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}



//scrollReval
//criar um objeto com var {}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,


}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);

