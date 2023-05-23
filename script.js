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

addProjects();

function addProjects() {
    const projectList = document.getElementsByClassName('project__list')[0];
    const projectContainer = createElement('div', projectList, 'project__list__container');
    const projects = createElement('ul', projectContainer, 'project__list__items');

    const projectArray = [
        { image: './assets/image/todo.PNG', source: 'https://github.com/YuneidyC/todo-app', test: 'https://yuneidyc.github.io/todo-app/', alt: `Todo's app` },
        { image: './assets/image/weather.PNG', source: 'https://github.com/YuneidyC/weatherApp', alt: 'Weather' },
        { image: './assets/image/timer.PNG', source: 'https://github.com/YuneidyC/Timer', test: 'https://yuneidyc.github.io/Timer/', alt: 'Timer' },
        { image: './assets/image/batatabit.PNG', source: 'https://github.com/YuneidyC/Batatabit', test: 'https://yuneidyc.github.io/Batatabit/', alt: 'Batatabit' },
        { image: './assets/image/blog.PNG', source: 'https://github.com/YuneidyC/Portfolio-Blog', test: 'https://yuneidyc.github.io/Portfolio-Blog/', alt: 'Blog page' },
        { image: './assets/image/animationLand.PNG', source: 'https://github.com/YuneidyC/Animationland', test: 'https://yuneidyc.github.io/Animationland/', alt: 'Animation Land' },
        { image: './assets/image/restaurantMenu.PNG', source: 'https://github.com/YuneidyC/RestaurantMenu', test: 'https://yuneidyc.github.io/RestaurantMenu/', alt: 'Restaurant page' },
    ];

    for (let i = 0; i <= projectArray.length - 1; i++) {
        const project = createElement('li', projects, 'project__list__item');
        const card = createElement('div', project, 'card');

        createElement('img', card, 'card__background', projectArray[i].image, projectArray[i].alt);

        const cardContent = createElement('div', card, 'card__content | flow');
        const cardContentContainer = createElement('div', cardContent, 'card__content--container | flow');

        createElement('h2', cardContentContainer, 'card__title', null, null, null, null, projectArray[i].alt);

        const divContainerButton = createElement('div', cardContent, 'card__content--button');

        if (projectArray[i].test !== undefined) {
            const button = createElement('button', divContainerButton, 'card__button');
            button.addEventListener('click', function () {
                location = projectArray[i].test;
            });

            createElement('img', button, null, './assets/icons/eye.png', 'test');
        }

        const button = createElement('button', divContainerButton, 'card__button');
        button.addEventListener('click', function () {
            location = projectArray[i].source;
        });

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

    return element;
}
