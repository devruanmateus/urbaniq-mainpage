let contentSubheader = document.getElementById('content-subheader');
let contentHeader = document.getElementById('content-header');
let menuNav = document.getElementById('menu-nav').children[0];

let menu = document.getElementById('menu').children[0];

let contentContainer = document.getElementById('content-container');

// Acessa a string avaliações de cada oferta
let reviewLanguage = document.querySelectorAll('.review-language');

// Barra de pesquisa padrão
contentHeader.children[1].children[0].innerHTML = '<input type="text" id="search-input" placeholder="Pesquisar produtos...">';

// Valor do atributo da linguagem selecionada
let currentLanguage = document.getElementById('current-language').children[0];

// Popup para acessar as configurações da sua conta
let configAccount = document.getElementById('info-account')

function changeLanguageBR() {
    // Seta o atributo da linguagem selecionada
    currentLanguage.setAttribute('data-language', 'pt');
    currentLanguage.textContent = 'Português';

    // Sub-cabeçário
    contentSubheader.children[0].children[0].textContent = 'Suporte';
    contentSubheader.children[0].children[1].textContent = 'Localidade';
    contentSubheader.children[1].children[0].textContent = 'Ligue: (800) 123-456';

    // Cabeçário
    contentHeader.children[1].children[0].innerHTML = '<input type="text" id="search-input" placeholder="Pesquisar produtos...">';
    contentHeader.children[4].children[0].children[0].innerHTML = '<span><button id="btn-account">Usuário <span class="material-symbols-outlined">keyboard_arrow_down</span></button></span>';
    configAccount.children[0].children[0].textContent = 'Cadastra-se e aproveite os descontos da loja!';
    configAccount.children[0].children[1].textContent = 'Entre agora';
    configAccount.children[0].children[2].innerHTML = '<p id="new-user-signup">Novo por aqui? <a id="signup-link" href="#">Sign Up</a></p>'
    
    // Menu de navegação
    menuNav.children[0].children[0].textContent = 'Top Ofertas';
    menuNav.children[1].children[0].textContent = 'Ofertas do Dia';
    menuNav.children[2].children[0].textContent = 'Camisetas';
    menuNav.children[3].children[0].textContent = 'Bermudas';
    menuNav.children[4].children[0].textContent = 'Tênis';
    menuNav.children[5].children[0].textContent = 'Jaquetas';

    // Menu lateral 
    menu.children[0].children[0].children[0].innerHTML = '<span>Homem</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[0].children[1].children[0].children[0].textContent = 'Camisas e Camisetas';
    menu.children[0].children[1].children[1].children[0].textContent = 'Jaquetas e Casacos';
    menu.children[0].children[1].children[2].children[0].textContent = 'Calças';
    menu.children[0].children[1].children[3].children[0].textContent = 'Ternos e Conjuntos';
    menu.children[0].children[1].children[4].children[0].textContent = 'Acessórios';

    menu.children[1].children[0].children[0].innerHTML = '<span>Mulher</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[1].children[1].children[0].children[0].textContent = 'Camisas e Camisetas';
    menu.children[1].children[1].children[1].children[0].textContent = 'Vestidos';
    menu.children[1].children[1].children[2].children[0].textContent = 'Jaquetas e Casacos';
    menu.children[1].children[1].children[3].children[0].textContent = 'Calças';
    menu.children[1].children[1].children[4].children[0].textContent = 'Ternos e Conjuntos';
    menu.children[1].children[1].children[5].children[0].textContent = 'Saias';
    menu.children[1].children[1].children[6].children[0].textContent = 'Roupas íntimas e Loungwear';
    menu.children[1].children[1].children[7].children[0].textContent = 'Acessórios';

    menu.children[2].children[0].children[0].innerHTML = '<span>Crianças</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[2].children[1].children[0].children[0].textContent = 'Camisas e Camisetas';
    menu.children[2].children[1].children[1].children[0].textContent = 'Conjuntos';
    menu.children[2].children[1].children[2].children[0].textContent = 'Jaquetas e Casacos';
    menu.children[2].children[1].children[3].children[0].textContent = 'Calças';
    menu.children[2].children[1].children[4].children[0].textContent = 'Roupas de Banho';
    menu.children[2].children[1].children[5].children[0].textContent = 'Roupas íntimas';
    menu.children[2].children[1].children[6].children[0].textContent = 'Acessórios';

    menu.children[4].children[0].children[0].children[0].innerHTML = '<span>Português</span>';


    // Conteúdo do site
    contentContainer.children[1].textContent = 'Ofertas Imperdíveis';
    contentContainer.children[3].children[0].textContent = 'Ofertas Relâmpago';
    // Verifica a quantidade de avaliações de cada oferta
    reviewLanguage.forEach((e, index) => {
        let counter = parseInt(document.querySelectorAll('.review-counter')[index].textContent);
        e.textContent = counter > 1 ? 'avaliações' : 'avaliação';
    });
}

function changeLanguageUS() {
    // Seta o atributo da linguagem selecionada
    currentLanguage.setAttribute('data-language', 'en');
    currentLanguage.textContent = 'English';

    // Sub-cabeçário
    contentSubheader.children[0].children[0].textContent = 'Support';
    contentSubheader.children[0].children[1].textContent = 'Location';
    contentSubheader.children[1].children[0].textContent = 'Call: (800) 123-456';

    // Cabeçário
    contentHeader.children[1].children[0].innerHTML = '<input type="text" id="search-input" placeholder="Search products...">';
    contentHeader.children[4].children[0].children[0].innerHTML = '<span><button id="btn-account">User <span class="material-symbols-outlined">keyboard_arrow_down</span></button></span>';
    configAccount.children[0].children[0].textContent = 'Sign up and enjoy store discounts!';
    configAccount.children[0].children[1].textContent = 'Log in now';
    configAccount.children[0].children[2].innerHTML = '<p id="new-user-signup">New here? <a id="signup-link" href="#">Sign Up</a></p>';
    
    // Menu de navegação
    menuNav.children[0].children[0].textContent = 'Top Offers';
    menuNav.children[1].children[0].textContent = 'Daily Offers';
    menuNav.children[2].children[0].textContent = 'T-shirts';
    menuNav.children[3].children[0].textContent = 'Shorts';
    menuNav.children[4].children[0].textContent = 'Shoes';
    menuNav.children[5].children[0].textContent = 'Jackets';

    // Menu lateral
    menu.children[0].children[0].children[0].innerHTML = '<span>Men</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[0].children[1].children[0].children[0].textContent = 'Shirts and T-shirts';
    menu.children[0].children[1].children[1].children[0].textContent = 'Jackets and Coats';
    menu.children[0].children[1].children[2].children[0].textContent = 'Pants';
    menu.children[0].children[1].children[3].children[0].textContent = 'Suits and Sets';
    menu.children[0].children[1].children[4].children[0].textContent = 'Accessories';

    menu.children[1].children[0].children[0].innerHTML = '<span>Women</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[1].children[1].children[0].children[0].textContent = 'Shirts and T-shirts';
    menu.children[1].children[1].children[1].children[0].textContent = 'Dresses';
    menu.children[1].children[1].children[2].children[0].textContent = 'Jackets and Coats';
    menu.children[1].children[1].children[3].children[0].textContent = 'Pants';
    menu.children[1].children[1].children[4].children[0].textContent = 'Suits and Sets';
    menu.children[1].children[1].children[5].children[0].textContent = 'Skirts';
    menu.children[1].children[1].children[6].children[0].textContent = 'Underwear and Loungewear';
    menu.children[1].children[1].children[7].children[0].textContent = 'Accessories';

    menu.children[2].children[0].children[0].innerHTML = '<span>Kids</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[2].children[1].children[0].children[0].textContent = 'Shirts and T-shirts';
    menu.children[2].children[1].children[1].children[0].textContent = 'Sets';
    menu.children[2].children[1].children[2].children[0].textContent = 'Jackets and Coats';
    menu.children[2].children[1].children[3].children[0].textContent = 'Pants';
    menu.children[2].children[1].children[4].children[0].textContent = 'Swimwear';
    menu.children[2].children[1].children[5].children[0].textContent = 'Underwear';
    menu.children[2].children[1].children[6].children[0].textContent = 'Accessories';

    menu.children[4].children[0].children[0].children[0].innerHTML = '<span>English</span>';


    // Conteúdo do site
    contentContainer.children[1].textContent = 'Unmissable Offers';
    contentContainer.children[3].children[0].textContent = 'Flash Deals';
    reviewLanguage.forEach((e, index) => {
        // Seleciona o valor de cada elemento reviewCounter pelo índice
        let counter = parseInt(document.querySelectorAll('.review-counter')[index].textContent);
        e.textContent = counter > 1 ? 'reviews' : 'review';
    });
}

function changeLanguageES() {
    // Seta o atributo da linguagem selecionada
    currentLanguage.setAttribute('data-language', 'es');
    currentLanguage.textContent = 'Español';

    // Sub-cabeçário
    contentSubheader.children[0].children[0].textContent = 'Soporte';
    contentSubheader.children[0].children[1].textContent = 'Ubicación';
    contentSubheader.children[1].children[0].textContent = 'Llamar: (800) 123-456';

    // Cabeçário
    contentHeader.children[1].children[0].innerHTML = '<input type="text" id="search-input" placeholder="Buscar productos...">';
    contentHeader.children[4].children[0].children[0].innerHTML = '<span><button id="btn-account">Usuário <span class="material-symbols-outlined">keyboard_arrow_down</span></button></span>';
    configAccount.children[0].children[0].textContent = '¡Regístrate y disfruta de los descuentos de la tienda!';
    configAccount.children[0].children[1].textContent = 'Inicia sesión ahora';
    configAccount.children[0].children[2].innerHTML = '<p id="new-user-signup">¿Nuevo aquí? <a id="signup-link" href="#">Sign Up</a></p>';
    // Menu de navegação
    menuNav.children[0].children[0].textContent = 'Ofertas Principales';
    menuNav.children[1].children[0].textContent = 'Ofertas Diarias';
    menuNav.children[2].children[0].textContent = 'Camisetas';
    menuNav.children[3].children[0].textContent = 'Pantalones Cortos';
    menuNav.children[4].children[0].textContent = 'Zapatos';
    menuNav.children[5].children[0].textContent = 'Chaquetas';

    // Menu lateral
    menu.children[0].children[0].children[0].innerHTML = '<span>Hombres</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[0].children[1].children[0].children[0].textContent = 'Camisas y Camisetas';
    menu.children[0].children[1].children[1].children[0].textContent = 'Chaquetas y Abrigos';
    menu.children[0].children[1].children[2].children[0].textContent = 'Pantalones';
    menu.children[0].children[1].children[3].children[0].textContent = 'Trajes y Conjuntos';
    menu.children[0].children[1].children[4].children[0].textContent = 'Accesorios';

    menu.children[1].children[0].children[0].innerHTML = '<span>Mujeres</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[1].children[1].children[0].children[0].textContent = 'Camisas y Camisetas';
    menu.children[1].children[1].children[1].children[0].textContent = 'Vestidos';
    menu.children[1].children[1].children[2].children[0].textContent = 'Chaquetas y Abrigos';
    menu.children[1].children[1].children[3].children[0].textContent = 'Pantalones';
    menu.children[1].children[1].children[4].children[0].textContent = 'Trajes y Conjuntos';
    menu.children[1].children[1].children[5].children[0].textContent = 'Faldas';
    menu.children[1].children[1].children[6].children[0].textContent = 'Ropa interior y Ropa de estar';
    menu.children[1].children[1].children[7].children[0].textContent = 'Accesorios';

    menu.children[2].children[0].children[0].innerHTML = '<span>Niños</span> <span class="material-symbols-outlined icon-arrow-right">chevron_right</span>';
    menu.children[2].children[1].children[0].children[0].textContent = 'Camisas y Camisetas';
    menu.children[2].children[1].children[1].children[0].textContent = 'Conjuntos';
    menu.children[2].children[1].children[2].children[0].textContent = 'Chaquetas y Abrigos';
    menu.children[2].children[1].children[3].children[0].textContent = 'Pantalones';
    menu.children[2].children[1].children[4].children[0].textContent = 'Trajes de Baño';
    menu.children[2].children[1].children[5].children[0].textContent = 'Ropa interior';
    menu.children[2].children[1].children[6].children[0].textContent = 'Accesorios';

    menu.children[4].children[0].children[0].children[0].innerHTML = '<span>Espanõl</span>';


    // Conteúdo do site
    contentContainer.children[1].textContent = 'Ofertas Imperdibles';
    contentContainer.children[3].children[0].textContent = 'Ofertas Relámpago';
    reviewLanguage.forEach((e, index) => {
        // Seleciona o valor de cada elemento reviewCounter pelo índice
        let counter = parseInt(document.querySelectorAll('.review-counter')[index].textContent);
        e.textContent = counter > 1 ? 'opiniones' : 'opinión';
    });
}