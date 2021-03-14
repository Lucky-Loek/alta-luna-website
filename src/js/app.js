function burger() {
    console.log('Logging burgers!');

    let burger = document.querySelector('.burger');
    let menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
};

window.addEventListener('load', burger);
