const ukrButton = document.querySelector('.index__ukr-lang-choose-button')
const engButton = document.querySelector('.index__eng-lang-choose-button')

ukrButton.addEventListener('click', ukrTranslate)
engButton.addEventListener('click', engTranslate)

const mainTitle = document.querySelector('.index__main-text')
const downTitle = document.querySelector('.index__down-main-text')

function ukrTranslate(){
    mainTitle.innerHTML = "Сайт в розробці..."
    downTitle.innerHTML = "Не хвилюйся, потрібно трохи зачекати☕..."
}

function engTranslate(){
    mainTitle.innerHTML = "Site in progress..."
    downTitle.innerHTML = "Keep calm and wait☕..."
}