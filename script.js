addSocialMedia("transition-left", "transition__social-media__left", "transition transition__social-media__link__left");
addSocialMedia("transition-bottom", "transition__social-media__bottom", "bottom transition__social-media__link__bottom");

function addSocialMedia(elementClass, classChild, classListLink) {
    const arraySocialMedia = [
        { image: './assets/icons/linkedin.png', link: 'https://ie.linkedin.com/in/yuneidyc', alt: 'linkedin' },
        { image: './assets/icons/github.png', link: 'https://github.com/YuneidyC', alt: 'github' },
        { image: './assets/icons/gmail.png', link: 'mailto:yuneidycastillo25@gmail.com', alt: 'gmail' },
    ];

    const element = document.getElementsByClassName(elementClass)[0];
    const socialMedia = createElement('div', element, classChild);

    for (let i = 0; i <= arraySocialMedia.length - 1; i++) {
        const aLink = createElement('a', socialMedia, classListLink, null, null, arraySocialMedia[i].link, '_blank');
        createElement('img', aLink, 'transition__social-media__img', arraySocialMedia[i].image, arraySocialMedia[i].alt);
    }
}

createFilterContainer();

function createFilterContainer() {
    const filterContainer = document.getElementsByClassName('project__filter')[0];
    const arrayTech2 = [ 
        { tag: '#All' },
        { tag: '#React', image: './assets/icons/react.svg'},
        { tag: '#Webpack', image: './assets/icons/webpack.svg'}, 
        { tag: '#JavaScript', image: './assets/icons/js.svg'},
        { tag: '#CSS', image: './assets/icons/css.svg'},
        { tag: '#HTML', image: './assets/icons/html.svg'},
        { tag: '#Git', image: './assets/icons/git.svg'}
    ];
    for (let i = 0; i < arrayTech2.length; i++) {
        let button;
        if (i === 0) {
            button = createElement('button', filterContainer, 'btn active');
            const textElement = document.createTextNode(arrayTech2[i].tag);
            button.appendChild(textElement);
        } else {
            button = createElement('button', filterContainer, 'btn', arrayTech2[i].image, null, null, null, arrayTech2[i].tag);
        }
        button.addEventListener('click', function() {
            filterSelection(arrayTech2[i].tag.replace('#', ''));
        });
    }
}

{
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
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
    const projects = createElement('ul', projectContainer, 'project__list__items');

    const projectArray = [
        { image: './assets/image/todo.PNG', source: 'https://github.com/YuneidyC/todo-app', test: 'https://yuneidyc.github.io/todo-app/', alt: `Todo's app`, className: 'project__list__item React JavaScript HTML CSS Git show' },
        { image: './assets/image/weather.PNG', source: 'https://github.com/YuneidyC/weatherApp', alt: 'Weather', className: 'project__list__item React Webpack JavaScript HTML CSS Git show' },
        { image: './assets/image/timer.PNG', source: 'https://github.com/YuneidyC/Timer', test: 'https://yuneidyc.github.io/Timer/', alt: 'Timer', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/batatabit.PNG', source: 'https://github.com/YuneidyC/Batatabit', test: 'https://yuneidyc.github.io/Batatabit/', alt: 'Batatabit', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/blog.PNG', source: 'https://github.com/YuneidyC/Portfolio-Blog', test: 'https://yuneidyc.github.io/Portfolio-Blog/', alt: 'Blog page', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/animationLand.PNG', source: 'https://github.com/YuneidyC/Animationland', test: 'https://yuneidyc.github.io/Animationland/', alt: 'Animation Land', className: 'project__list__item JavaScript HTML CSS Git show' },
        { image: './assets/image/restaurantMenu.PNG', source: 'https://github.com/YuneidyC/RestaurantMenu', test: 'https://yuneidyc.github.io/RestaurantMenu/', alt: 'Restaurant page', className: 'project__list__item JavaScript HTML CSS Git show' },
    ];

    for (let i = 0; i <= projectArray.length - 1; i++) {
        const project = createElement('li', projects, projectArray[i].className);
        const card = createElement('div', project, 'project__list__item__card');

        createElement('img', card, 'project__list__item__card__background', projectArray[i].image, projectArray[i].alt);

        const cardContent = createElement('div', card, 'project__list__item__card__content | flow');
        const cardContentContainer = createElement('div', cardContent, 'card__content--container | flow');

        createElement('h2', cardContentContainer, 'card__title', null, null, null, null, projectArray[i].alt);

        const divContainerButton = createElement('div', cardContent, 'card__content--button');

        if (projectArray[i].test !== undefined) {
            const button = createElement('button', divContainerButton, 'card__button');

            const testLink = createElement('a', button, null, null, null, projectArray[i].test, '_blank');
            createElement('img', testLink, null, './assets/icons/eye.png', 'test');
        }

        const button = createElement('button', divContainerButton, 'card__button');

        const sourceLink = createElement('a', button, null, null, null, projectArray[i].source, '_blank');
        createElement('img', sourceLink, null, './assets/icons/source.png', 'source');
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

    if (elementType === 'h2') {
        const textElement = document.createTextNode(text);
        element.appendChild(textElement);
        return;
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
