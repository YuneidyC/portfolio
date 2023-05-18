addSocialMedia("transition-left", "transition__social-media__left", "transition transition__social-media__link__left");
addSocialMedia("transition-bottom", "transition__social-media__bottom", "bottom transition__social-media__link__bottom");

function addSocialMedia(elementClass, classChild, classListLink) {
    const arraySocialMedia = [
        {image: './assets/icons/linkedin.png', link: 'https://ie.linkedin.com/in/yuneidyc', alt: 'linkedin'},
        {image: './assets/icons/github.png', link: 'https://github.com/YuneidyC', alt: 'github'},
        {image: './assets/icons/gmail.png', link: 'mailto:yuneidycastillo25@gmail.com', alt: 'gmail'}
    ];

    const element = document.getElementsByClassName(elementClass)[0];
        const socialMedia = document.createElement('div');
        socialMedia.classList = classChild;
        element.appendChild(socialMedia);
            for (let i = 0; i <= arraySocialMedia.length - 1; i++) {
                const aLink = document.createElement('a');
                socialMedia.appendChild(aLink);

                aLink.href = arraySocialMedia[i].link;
                aLink.target = '_blank';
                aLink.classList = classListLink;
        
                const image = document.createElement('img');
                aLink.appendChild(image);
                image.src = arraySocialMedia[i].image;
                image.alt = arraySocialMedia[i].alt;
                image.classList = 'transition__social-media__img';
            }
}

addProjects();

function addProjects() {
    const projectList = document.getElementsByClassName('project__list')[0];
    const projectContainer = document.createElement('div');
    projectList.appendChild(projectContainer);
    projectContainer.classList = 'project__list__container';

    const projects = document.createElement('ul');
    projectContainer.appendChild(projects);
    projects.classList = 'project__list__items';

    const projectArray = [
        {image: './assets/image/todo.PNG', source: 'https://github.com/YuneidyC/todo-app', test: 'https://yuneidyc.github.io/todo-app/', alt: `Todo's app`},
        {image: './assets/image/weather.PNG', source: 'https://github.com/YuneidyC/weatherApp', alt: 'Weather'},
        {image: './assets/image/timer.PNG', source: 'https://github.com/YuneidyC/Timer', test: 'https://yuneidyc.github.io/Timer/', alt: 'Timer'},
        {image: './assets/image/batatabit.PNG', source: 'https://github.com/YuneidyC/Batatabit', test: 'https://yuneidyc.github.io/Batatabit/', alt: 'Batatabit'},
        {image: './assets/image/blog.PNG', source: 'https://github.com/YuneidyC/Portfolio-Blog', test:'https://yuneidyc.github.io/Portfolio-Blog/', alt: 'Blog page'},
        {image: './assets/image/animationLand.PNG', source: 'https://github.com/YuneidyC/Animationland', test: 'https://yuneidyc.github.io/Animationland/', alt: 'Animation Land'},
        {image: './assets/image/restaurantMenu.PNG', source: 'https://github.com/YuneidyC/RestaurantMenu', test: 'https://yuneidyc.github.io/RestaurantMenu/', alt: 'Restaurant page'},
    ];
    
    for (let i = 0; i <= projectArray.length - 1; i++) {
        const project = document.createElement('li');
        projects.appendChild(project);
        project.classList = 'project__list__item';

        const card = document.createElement('div');
        project.appendChild(card);
        card.classList = 'card';

        let img = document.createElement('img');
        card.appendChild(img);
        img.src = projectArray[i].image;
        img.alt = projectArray[i].alt;
        img.classList = 'card__background';

        const cardContent = document.createElement('div');
        card.appendChild(cardContent);
        cardContent.classList = 'card__content | flow';

        const cardContentContainer = document.createElement('div');
        cardContent.appendChild(cardContentContainer);
        cardContentContainer.classList = 'card__content--container | flow';

        const h2 = document.createElement('h2');
        const text = document.createTextNode(projectArray[i].alt);
        cardContentContainer.appendChild(h2);
        h2.appendChild(text);
        h2.classList = 'card__title';

        // Second child
        const divContainerButton = document.createElement('div');
        cardContent.appendChild(divContainerButton);
        divContainerButton.classList = 'card__content--button';

        if (projectArray[i].test !== undefined) {
            const button = document.createElement('button');
            divContainerButton.appendChild(button);
            button.classList = 'card__button';
            button.addEventListener('click', function(){
                location = projectArray[i].test;
            });

            const buttonImgTest = document.createElement('img');
            button.appendChild(buttonImgTest);
            buttonImgTest.src = './assets/icons/eye.PNG';
            buttonImgTest.alt = 'test';
        }

        const button = document.createElement('button');
        divContainerButton.appendChild(button);
        button.classList = 'card__button';
        button.addEventListener('click', function(){
            location = projectArray[i].source;
        });

        const buttonImgSource = document.createElement('img');
        button.appendChild(buttonImgSource);
        buttonImgSource.src = './assets/icons/source.PNG';
        buttonImgSource.alt = 'source';
    }
}
