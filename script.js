let arrayTech2 = [
    { tag: '#All' },
    { tag: '#React', image: './assets/icons/react.svg' },
    { tag: '#Webpack', image: './assets/icons/webpack.svg' },
    { tag: '#JavaScript', image: './assets/icons/js.svg' },
    { tag: '#CSS', image: './assets/icons/css.svg' },
    { tag: '#Sass', image: './assets/icons/sass.svg' },
    { tag: '#HTML', image: './assets/icons/html.svg' },
    { tag: '#Git', image: './assets/icons/git.svg' },
];

window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});

addSocialMedia("transition-left", "transition__social-media__left", "transition transition__social-media__link__left");
addSocialMedia("transition-bottom", "transition__social-media__bottom", "bottom transition__social-media__link__bottom");

function addSocialMedia(elementClass, classChild, classListLink) {
    const arraySocialMedia = [
        { image: './assets/icons/Linkedin.svg', link: 'https://ie.linkedin.com/in/yuneidyc', alt: 'linkedin' },
        { image: './assets/icons/Github.svg', link: 'https://github.com/YuneidyC', alt: 'github' },
        { image: './assets/icons/Gmail.svg', link: 'mailto:yuneidycastillo25@gmail.com', alt: 'gmail' },
    ];

    const element = document.getElementsByClassName(elementClass)[0];
    const socialMedia = createElement('div', element, classChild);

    for (let i = 0; i <= arraySocialMedia.length - 1; i++) {
        const aLink = createElement('a', socialMedia, classListLink + ' ' + i, null, null, arraySocialMedia[i].link, '_blank');
        createElement('img', aLink, `transition__social-media__img ${arraySocialMedia[i].alt} `, arraySocialMedia[i].image, arraySocialMedia[i].alt);
    }
}

createFilterContainer();

function createFilterContainer() {
    const filterContainer = document.getElementsByClassName('project__filter')[0];
    for (let i = 0; i < arrayTech2.length; i++) {
        let button;
        if (i === 0) {
            button = createElement('button', filterContainer, 'btn btn-active');
            const textElement = document.createTextNode(arrayTech2[i].tag);
            button.appendChild(textElement);
        } else {
            button = createElement('button', filterContainer, 'btn', arrayTech2[i].image, null, null, null, arrayTech2[i].tag);
        }
        button.addEventListener('click', function () {
            filterSelection(arrayTech2[i].tag.replace('#', ''));
        });
    }
}

{
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("btn-active");
            current[0].className = current[0].className.replace(" btn-active", "");
            this.className += " btn-active";
        });
    }
}

function filterSelection(tech) {
    let element = document.getElementsByClassName('project__list__item');
    if (tech === 'All') {
        tech = '';
    }
    for (let i = 0; i < element.length; i++) {
        removeClassFilterSelection(element[i], 'show');
        if (element[i].className.indexOf(tech) > -1) {
            addClassFilterSelection(element[i], 'show');
        }
    }
}

function addClassFilterSelection(element, name) {
    let str1 = element.className.split(' ');
    let str2 = name.split(' ');
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            element.className += ' ' + str2[i];
        }
    }
}

function removeClassFilterSelection(element, name) {
    let str1 = element.className.split(' ');
    let str2 = name.split(' ');
    for (i = 0; i < str2.length; i++) {
        while (str1.indexOf(str2[i]) > -1) {
            str1.splice(str1.indexOf(str2[i]), 1);
        }
    }
    element.className = str1.join(" ");
}

addProjects();

function addProjects() {
    const projectList = document.getElementsByClassName('project__list')[0];
    const projectContainer = createElement('div', projectList, 'project__list__container');
    const projects = createElement('ul', projectContainer, 'project__list__items noscroll');

    const projectArray = [
        { image: './assets/image/yardSale.png', source: 'https://github.com/YuneidyC/Yard-Sale', test: 'https://yuneidyc.github.io/Yard-Sale/', alt: `Yard Sale`, className: 'project__list__item React Webpack JavaScript HTML CSS Git show' },
        { image: './assets/image/todo.png', source: 'https://github.com/YuneidyC/todo-app', test: 'https://yuneidyc.github.io/todo-app/', alt: `Todo's app`, className: 'project__list__item React JavaScript HTML CSS Git show' },
        { image: './assets/image/weather.png', source: 'https://github.com/YuneidyC/weatherApp', alt: 'Weather', className: 'project__list__item React Webpack JavaScript HTML CSS Git show' },
        { image: './assets/image/timer.png', source: 'https://github.com/YuneidyC/Timer', test: 'https://yuneidyc.github.io/Timer/', alt: 'Timer', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/batatabit.png', source: 'https://github.com/YuneidyC/Batatabit', test: 'https://yuneidyc.github.io/Batatabit/', alt: 'Batatabit', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/blog.png', source: 'https://github.com/YuneidyC/Portfolio-Blog', test: 'https://yuneidyc.github.io/Portfolio-Blog/', alt: 'Blog page', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/animationLand.png', source: 'https://github.com/YuneidyC/Animationland', test: 'https://yuneidyc.github.io/Animationland/', alt: 'Animation Land', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/restaurantMenu.png', source: 'https://github.com/YuneidyC/RestaurantMenu', test: 'https://yuneidyc.github.io/RestaurantMenu/', alt: 'Restaurant page', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/googleClone.png', source: 'https://github.com/YuneidyC/GoogleClone', test: 'https://google-clone-yuneidyc.vercel.app/', alt: 'Google clone', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/ecoStore.png', source: 'https://github.com/YuneidyC/Eco-store', test: 'https://yuneidyc.github.io/Eco-store/', alt: 'Eco-store', className: 'project__list__item JavaScript HTML Sass Git show' },
        { image: './assets/image/theOdinProject-MexicanRestaurant.png', source: 'https://github.com/YuneidyC/TheOdinProject-RestaurantPage', test: 'https://yuneidyc.github.io/TheOdinProject-RestaurantPage/', alt: 'Mexican-Restaurant', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/theOdinProject_EtchASketch.png', source: 'https://github.com/YuneidyC/TheOdinProject-EtchASketch', test: 'https://yuneidyc.github.io/TheOdinProject-EtchASketch/', alt: 'Etch A Sketch', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/theOdinProject_LandingPage.png', source: 'https://github.com/YuneidyC/TheOdinProject-LandingPage', test: 'https://yuneidyc.github.io/TheOdinProject-LandingPage/', alt: 'Landing Page', className: 'project__list__item HTML CSS Git show' },
        { image: './assets/image/theOdinProject_rockPaperAndScissors.png', source: 'https://github.com/YuneidyC/TheOdinProject-RockPaperScissors', test: 'https://yuneidyc.github.io/TheOdinProject-RockPaperScissors/', alt: 'Rock Paper and Scissors', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/theOdinProject_Library.png', source: 'https://github.com/YuneidyC/TheOdinProject-Library', test: 'https://yuneidyc.github.io/TheOdinProject-Library/', alt: 'Library', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/theOdinProject_SignUpForm.png', source: 'https://github.com/YuneidyC/TheOdinProject-SignUpForm', test: 'https://yuneidyc.github.io/TheOdinProject-SignUpForm/', alt: 'Sign up Form', className: 'project__list__item HTML CSS Git show' },
    ];

    for (let i = 0; i <= projectArray.length - 1; i++) {
        const project = createElement('li', projects, projectArray[i].className);
        const card = createElement('div', project, 'project__list__item__card');

        createElement('img', card, 'project__list__item__card__background', projectArray[i].image, projectArray[i].alt);

        const cardContent = createElement('div', card, 'project__list__item__card__content | flow');
        const cardContentContainer = createElement('div', cardContent, 'card__content--container | flow');

        createElement('h2', cardContentContainer, 'card__title', null, null, null, null, projectArray[i].alt);

        const projectTechContainer = createElement('div', cardContent, 'project__list__item__card__container');
        const projectTech = createElement('div', projectTechContainer, 'project__list__item__card__tasks');

        addTechProject(project, projectTech);

        const divContainerButton = createElement('div', cardContent, 'card__content--button');

        if (projectArray[i].test !== undefined) {
            const button = createElement('button', divContainerButton, 'card__button');

            createElement('a', button, 'card__button__test', null, null, projectArray[i].test, '_blank', 'Test');
            createElement('img', button, null, './assets/icons/eye.png', 'test');
        }

        const button = createElement('button', divContainerButton, 'card__button');

        createElement('a', button, 'card__button__source', null, null, projectArray[i].source, '_blank', 'Source');
        createElement('img', button, null, './assets/icons/source.png', 'source');
    }
}

function createElement(elementType, parent, className = null, src = null, alt = null, href = null, target = null, text = null) {
    const element = document.createElement(elementType);
    parent.appendChild(element);
    element.classList = className;

    if (elementType === 'img') {
        element.src = src;
        element.alt = alt;
        if (className === null) {
            return element;
        }
        return;
    }

    if (elementType === 'a') {
        element.href = href;
        element.target = target;
    }

    if (elementType === 'h2' || (elementType === 'a' && text !== null)) {
        const textElement = document.createTextNode(text);
        element.appendChild(textElement);
        return element;
    }

    if (elementType === 'p') {
        const textElement = document.createTextNode(text);
        element.appendChild(textElement);
    }

    if (elementType === 'button') {
        if (src !== null) {
            createElement('p', element, null, null, null, null, null, text);
            createElement('img', element, null, src, text.replace('#', ''));
        }
    }

    return element;
}

function addTechProject(element, techs) {
    const techElement = element.className.split(' ');

    for (let i = 0; i <= techElement.length - 1; i++) {
        if (arrayTech2.some(exist => exist.tag === '#' + techElement[i])) {
            const techsContainer = createElement('div', techs);
            addTechImage(techsContainer, techElement[i]);
        }
    }
}

function addTechImage(element, tech) {
    const srcImage = arrayTech2.find(({ tag }) => tag === '#' + tech);
    createElement('img', element, null, srcImage.image, srcImage.tag.replace('#', ''));
}

const wordflick = function () {
    let offset = 0;
    const word = `I'm a self-taught Software developer currently focusing on Front-End. I want to get real world experience in Front-End while I keep expanding on my Back-End knowledge on the side. My ambition is to slowly transition into a Full-Stack role by learning more about Back-End, DevOps, Databases and Cloud technologies, among others.`;
    // This arrow function will be appending each of the letters to the text after a delay
    return window.setInterval(function () {
        let part = word.substr(0, offset);
        offset++;
        document.getElementsByClassName("about-me__details__information")[0].innerText = part;
        if (part.length >= word.length) {
            window.clearInterval();
        }
    }, 15);
};

let intervalWord = wordflick();

function resetInfoTextAnimation() {
    clearInterval(intervalWord);
    document.getElementsByClassName("about-me__details__information")[0].innerText = " ";
    intervalWord = wordflick();
}

function reveal() {
    const firstSection = document.getElementById('about-me-section');
    let currentScrollRatio = Math.abs(firstSection.getBoundingClientRect().top) / window.innerHeight;

    updateElementsVisibility(currentScrollRatio);
}

const visibilityData = [
    { name: "about-me-section", minScroll: 0, maxScroll: 0.7 },
    { name: "projects-section", minScroll: 0.4, maxScroll: 1 },
];

function updateElementsVisibility(scrollRatio) {
    let reveals = document.querySelectorAll(".reveal");
    const projectListElement = document.getElementsByClassName('project__list__items')[0];

    reveals.forEach(sectionElement => {
        let isElementActive = sectionElement.classList.contains("active");
        let elemVisibilityData = visibilityData.find((x) => x.name === sectionElement.id);

        if (!elemVisibilityData) {
            return;
        }

        let minScroll = elemVisibilityData.minScroll;
        let maxScroll = elemVisibilityData.maxScroll;

        if (!isElementActive && scrollRatio >= minScroll && scrollRatio <= maxScroll) {
            sectionElement.classList.add("active");
            if ("about-me-section" === sectionElement.id) {
                resetInfoTextAnimation();
            }
            if ("projects-section" === sectionElement.id) {
                if (projectListElement) {
                    projectListElement.classList.remove("noscroll");
                }
            }
        } else if (isElementActive && (scrollRatio < minScroll || scrollRatio.toPrecision(2) > maxScroll)) {
            sectionElement.classList.remove("active");
            if ("projects-section" === sectionElement.id) {
                if (projectListElement) {
                    projectListElement.classList.add("noscroll");
                }
            }
        }
    });
}

window.addEventListener("DMContentLoaded", reveal);
window.addEventListener("scroll", reveal);

{
    document.addEventListener('mousemove', myMove);
    document.addEventListener('mouseout', mouseOut);

    var oldx = 0;
    var oldy = 0;

    function myMove(e) {
        const figures = document.getElementsByClassName('figure');

        for (let i = 0; i < figures.length; i++) {
            if (e.pageX > oldx) {
                figures[i].style.left = '-14px';
            } else if (e.pageX < oldx) {
                figures[i].style.left = '14px';
            }
            if (e.pageY > oldy) {
                figures[i].style.top = '-14px';
            } else if (e.pageY < oldy) {
                figures[i].style.top = '14px';
            }
        }
        oldx = e.pageX;
        oldy = e.pageY;
    }

    function mouseOut(e) {
        const figures = document.getElementsByClassName('figure');

        for (let i = 0; i < figures.length; i++) {
            figures[i].style.left = '0px';
            figures[i].style.top = '0px';
        }
    }

    function getRandomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    window.addEventListener('load', function () {
        const figures = ['circle', 'triangle-up', 'x', 'zigzag'];
        let items = [];

        for (const figure of figures) {
            items = createFigures(5, figure, 'figure_container', items);
        }

        let element2 = [items[Math.floor(Math.random() * items.length)], items[Math.floor(Math.random() * items.length)]];

        setTimeout(function animateFigure() {
            removeClassAnimation(element2);
            element2 = [items[Math.floor(Math.random() * items.length)], items[Math.floor(Math.random() * items.length)]]
            addClassAnimation(element2);
            setTimeout(animateFigure, 5000);
        }, 5000);
    }, true);

    function removeClassAnimation(element) {
        if (element[0] !== undefined) {
            element[0].classList.remove("animate-rotate", "animation-triangle");
            if (element[0].className.split(' ')[1] === 'circle') {
                element[0].classList.remove("animate-circle");
            }
        }
        if (element[1] !== undefined) {
            element[1].classList.remove("animate-rotate");
        }
    }

    function addClassAnimation(element) {
        if (element[0].className.split(' ')[1] === 'triangle-up') {
            element[0].classList.add("animation-triangle");
        } else {
            element[0].classList.add("animate-rotate");
            if (element[0].className.split(' ')[1] === 'circle') {
                element[0].classList.add("animate-circle");
            }
        }
        if (element[1].className.split(' ')[1] !== 'triangle-up') {
            element[1].classList.add("animate-rotate");
        }
    }

    function createFigures(qty, figureType, parentClassName, array) {
        const body = document.getElementsByClassName('figures-container')[0];
        for (let i = 0; i < qty; i++) {
            const figures = document.createElement('div');

            body.appendChild(figures);
            figures.className = parentClassName;

            const figure = document.createElement('div');
            figures.appendChild(figure);
            figure.className = `figure ${figureType}`;

            if (figureType === 'triangle-up') {
                figure.innerHTML += '&#9650';
            }

            if (figureType === 'x') {
                createX(figure);
                createX(figure);
            }

            if (figureType === 'zigzag') {
                createZigzag(figure);
            }
            array.push(figure);
        }
        return array;
    }

    function createX(parent) {
        const xElement = document.createElement('div');
        parent.appendChild(xElement);
    }

    function createZigzag(parent) {
        for (let i = 0; i <= 3; i++) {
            const zigzag = document.createElement('div');
            parent.appendChild(zigzag);
            zigzag.className = `zigzag${i}`;
        }
    }
}

document.getElementsByClassName("close")[0].onclick = function () {
    this.parentNode.parentNode.remove();
    return false;
};

document.addEventListener('touchstart', disableProjectCardsAnimation);

function disableProjectCardsAnimation() {
    const projects = document.getElementsByClassName('project__list__item__card__content');
    for (const element of projects) {
        element.style.pointerEvents = "none";
        element.style.height = "100%";
        const buttons = element.childNodes[2];
        for (const button of buttons.childNodes) {
            button.style.pointerEvents = "auto";
            button.style.width = "100px";
            button.childNodes[0].style.display = "block";
        }
    }
}

window.addEventListener('scroll', () => {
    const scroll = document.getElementsByClassName('mouse_scroll')[0];
    if (window.scrollY > window.innerHeight / 9) {
        scroll.classList.add('mouse__scroll-text-hidden');
    } else {
        scroll.classList.remove('mouse__scroll-text-hidden');
    }
});
