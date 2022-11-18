(() => {
    const body = document.body;
    body.classList.remove('no-js');

    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('portfolio-tema__span')) body.classList.toggle('dark-mode');
        if (el.classList.contains('light-mode')) body.classList.remove('dark-mode');
        if (el.classList.contains('dark-mode')) body.classList.add('dark-mode');
    });

    const slides = document.querySelectorAll('.slideshow__item');

    function addEventsOnSlides() {
        for (let slide of slides) {
            slide.addEventListener('click', e => createMsg(slide));
        }
    }

    function createMsg(slide) {
        const h3 = document.querySelector('.info h3');
        const p = document.querySelector('.info p');
        let label = slide.querySelector('p').innerText;

        h3.innerText = label;
        if (slide.classList.contains('disabled')) {
            p.innerText = 'bloqueado';
            return;
        }

        label = label.toLowerCase();

        if (label === 'html') p.innerText = 'Tenho 6 meses de experiência com esta tecnologia';
        if (label === 'css') p.innerText = 'Tenho 6 meses de experiência com esta tecnologia';
        if (label === 'javascript') p.innerText = 'Tenho 4 meses de experiência com esta linguagem';
        if (label === 'figma') p.innerText = 'Tenho 4 meses de experiência com esta tecnologia, e sou capaz de utilizar o Adobe XD.';
        if (label === 'node') p.innerText = 'Neste momento encontro-me a aprender esta ferramenta';
        if (label === 'typescript') p.innerText = 'Neste momento encontro-me a aprender esta linguagem';

    }

    addEventsOnSlides()

    window.addEventListener('scroll', fixedMenu);

    function fixedMenu() {
        const header = document.querySelector('.main-header');
        const Yposition = body.getBoundingClientRect().top;
        Yposition <= -96 ? header.classList.add('fixed') : header.classList.remove('fixed');
    }

    const menu = new List({
        btn: document.querySelector('.main-header__btnMenu'),
        list: document.querySelector('.main-header__menu'),
        maxWidth: 992,
    });

    const tema = new List({
        btn: document.querySelector('.temas-mobile__item'),
        list: document.querySelector('.temas-mobile__lista'),
        maxWidth: 992
    });

    const skills = new Carrossel({
        next: document.querySelector('.next'),
        prev: document.querySelector('.prev'),
        container: document.querySelector('.slideshow__grid'),
        width: 308
    })
})();