// Abrir e fechar menu lateral
let menuIcon = document.getElementById('menu-categories')
let menuLateral = document.getElementById('container-menu')

menuLateral.classList.add('hidden');

menuIcon.addEventListener('click', function() {
    menuLateral.classList.toggle('hidden');
});

// Rolagem lateral de ofertas relâmpagos e semanais
let currentIndex = 0;

function scrollWeeklyOffers(direction) {
    const offersContainer = document.querySelector('.weekly-offers-container');
    const offerWidth = document.querySelector('.offers').offsetWidth + 10;
    const maxScrollLeft = offersContainer.scrollWidth - offersContainer.clientWidth;

    let newScrollLeft = offersContainer.scrollLeft + direction * offerWidth;

    if (newScrollLeft < 0) {
        newScrollLeft = 0;
    } else if (newScrollLeft > maxScrollLeft) {
        newScrollLeft = maxScrollLeft;
    }

    offersContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
    });
}

function scrollFlashDeals(direction) {
    const offersContainer = document.querySelector('.flash-deals-container');
    const offerWidth = document.querySelector('.offers').offsetWidth + 10;
    const maxScrollLeft = offersContainer.scrollWidth - offersContainer.clientWidth;

    let newScrollLeft = offersContainer.scrollLeft + direction * offerWidth;

    if (newScrollLeft < 0) {
        newScrollLeft = 0;
    } else if (newScrollLeft > maxScrollLeft) {
        newScrollLeft = maxScrollLeft;
    }

    offersContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
    });
}

// Função para criar ofertas semanais
function addWeeklyOffer(imageUrl, reviewCount, discountPrice, realPrice) {
    const weeklyOffersContainer = document.querySelector('.weekly-offers-container');
    let currentLanguage = document.getElementById('current-language').children[0].getAttribute('data-language');

    const weeklyOffersHTML = `
        <div class="offers">
            <div class="view-product">
                <img src="${imageUrl}" alt="">
            </div>

            <div class="rate-and-reviews">
                <ul class="rating">
                    <li class="star-icon" data-avaliacao="1"></li>
                    <li class="star-icon" data-avaliacao="2"></li>
                    <li class="star-icon" data-avaliacao="3"></li>
                    <li class="star-icon active" data-avaliacao="4"></li>
                    <li class="star-icon" data-avaliacao="5"></li>
                </ul>

                <div class="reviews">
                    <p><span class="review-counter">${reviewCount}</span> <span class="review-language">${reviewCount > 1 ? 'avaliações' : 'avaliação'}</span></p>
                </div>
            </div>

            <div class="content-price">
                <span class="discount-price">${discountPrice}</span>
                <span class="real-price">${realPrice}</span>
            </div>
        </div>
    `;

    weeklyOffersContainer.insertAdjacentHTML('beforeend', weeklyOffersHTML)
}


// Função para criar ofertas relâmpagos
function addFlashDeals(imageUrl, reviewCount, discountPrice, realPrice) {
    const flashDealsContainer = document.querySelector('.flash-deals-container');


    const flashDealsHTML = `
        <div class="offers">
            <div class="view-product">
                <img src="${imageUrl}" alt="">
            </div>

            <div class="rate-and-reviews">
                <ul class="rating">
                    <li class="star-icon" data-avaliacao="1"></li>
                    <li class="star-icon" data-avaliacao="2"></li>
                    <li class="star-icon" data-avaliacao="3"></li>
                    <li class="star-icon active" data-avaliacao="4"></li>
                    <li class="star-icon" data-avaliacao="5"></li>
                </ul>

                <div class="reviews">
                    <p><span class="review-counter">${reviewCount}</span> <span class="review-language">${reviewCount > 1 ? 'avaliações' : 'avaliação'}</span></p>
                </div>
            </div>

            <div class="content-price">
                <span class="discount-price">${discountPrice}</span>
                <span class="real-price">${realPrice}</span>
            </div>
        </div>
    `;

    flashDealsContainer.insertAdjacentHTML('beforeend', flashDealsHTML)
}

// Estrutura de repetição para adicionar as ofertas no HTML
for(let i = 0; i < 8; i++) {
    addWeeklyOffer(
        '',
        1,
        'R$ 00,00',
        'R$ 00,00'
    );

    addFlashDeals(
        '',
        5,
        'R$ 00,00',
        'R$ 00,00'
    );
}

// Contador para definir a duração de ofertas relâmpagos
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const endOffer = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 horas a partir do momento atual

function count() {
    const currentDate = new Date().getTime();

    const totalSeconds = (endOffer - currentDate) / 1000;

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Chama a função count a cada segundo para atualizar o contador
setInterval(count, 1000);

// Abrir e fechar menu de selecionar a linguagem
const selectLanguageContainer = document.getElementById('language-options')
const selectLanguage = document.getElementById('select-language')

selectLanguageContainer.classList.add('hidden')

selectLanguage.addEventListener('click', function() {
    selectLanguageContainer.classList.toggle('hidden')
})

// Abrir informações da conta
const popupAccount = document.getElementById('info-account');
const accountHeader = document.getElementById('account');

popupAccount.classList.add('hidden');

accountHeader.addEventListener('click', function() {
    popupAccount.classList.toggle('hidden');
})

// Oculta os menus se o usuário clicar fora
document.addEventListener('click', function(event) {
    if (!selectLanguageContainer.contains(event.target) && !selectLanguage.contains(event.target)) {
        selectLanguageContainer.classList.add('hidden');
    } 
});

document.addEventListener('click', function(event) {
    if (!popupAccount.contains(event.target) && !accountHeader.contains(event.target)) {
        popupAccount.classList.add('hidden');
    } 
});

// Barra de pesquisa para dispositivos mobile
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// Oculta o campo de entrada em telas menores que 992px
function updateVisibility() {
    if (window.innerWidth < 992) {
        searchInput.classList.add('hidden');
    } else {
        searchInput.classList.remove('hidden');
    }
}

// Chama a função de atualização de visibilidade ao carregar a página
updateVisibility();

window.addEventListener('resize', updateVisibility);

searchButton.addEventListener('click', function() {
    if (window.innerWidth < 992) {
        searchInput.classList.toggle('hidden');
    }
});