/*==================== ПОКАЗАТИ МЕНЮ ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Підтверджуємо існування змінних
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Ми додаємо клас show-menu до тегу div за допомогою класу nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== ВИДАЛИТИ МЕНЮ МОБІЛЬНОГО ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Коли ми натискаємо на кожне nav__link, ми видаляємо клас show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ПРОКТУТІТЬ РОЗДІЛИ З АКТИВНИМ ПОСИЛАННЯМ ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== ЗМІНИТИ ФОН ЗАГОЛОВКА ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // Якщо висота вікна прокручування перевищує 200, додаємо клас заголовка прокрутки до тегу заголовка
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== ПОКАЗАТИ ВЕРХ ПРОКРУЧУВАННЯ ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //Якщо прокручування перевищує висоту вікна перегляду 560, додаємо клас show-scroll до тегу a з класом scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== ТЕМНА СВІТЛА ТЕМА ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Раніше вибрана тема (якщо вибрано користувачем)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Ми отримуємо поточну тему, яку має інтерфейс, перевіряючи клас темної теми
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Ми перевіряємо, якщо користувач раніше вибрав тему
if (selectedTheme) {
  // Якщо перевірку виконано, ми запитуємо, у чому була проблема, щоб дізнатися, чи ми активували або дезактивували темний режим
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Активувати/деактивувати тему вручну кнопкою
themeButton.addEventListener('click', () => {
    // Додайте або видаліть темну тему/тему значків
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Ми зберігаємо тему та поточну іконку, яку вибирає користувач
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== АНІМАЦІЯ ВІДКРИТТЯ ПРОКРУЧУВАННЯ ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})