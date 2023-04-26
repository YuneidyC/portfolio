addSocialMedia();

function addSocialMedia() {
    const arraySocialMedia = [
        {image: './assets/icons/linkedin.png', link: 'https://ie.linkedin.com/in/yuneidyc', alt: 'linkedin'},
        {image: './assets/icons/github.svg', link: 'https://github.com/YuneidyC', alt: 'github'},
        {image: './assets/icons/gmail.png', link: '', alt: 'gmail'}
    ];

    const nav = document.getElementsByClassName('nav')[0];
    const socialMedia = document.createElement('div');
    socialMedia.classList = 'nav__social-media';
    nav.appendChild(socialMedia);

    for (let i = 0; i <= arraySocialMedia.length - 1; i++) {
        const aLink = document.createElement('a');
        socialMedia.appendChild(aLink);

        if(arraySocialMedia[i].image === './assets/icons/gmail.png') {
            aLink.href = "mailto:yuneidycastillo25@gmail.com";
        } else {
            aLink.href = arraySocialMedia[i].link;
        }
        aLink.target = '_blank';
        aLink.classList = 'nav__social-media__link';

        const image = document.createElement('img');
        aLink.appendChild(image);
        image.src = arraySocialMedia[i].image;
        image.alt = arraySocialMedia[i].alt;
        image.classList = 'nav__social-media__img';
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
        {image: './assets/image/todo.PNG', link: 'https://github.com/YuneidyC', alt: `Todo's app`},
        {image: './assets/image/weather.PNG', link: 'https://github.com/YuneidyC', alt: 'Weather'},
        {image: './assets/image/timer.PNG', link: 'https://github.com/YuneidyC', alt: 'Timer'},
        {image: './assets/image/batatabit.PNG', link: 'https://github.com/YuneidyC', alt: 'Batatabit'},
        {image: './assets/image/blog.PNG', link: 'https://github.com/YuneidyC', alt: 'Blog page'},
        {image: './assets/image/animationLand.PNG', link: 'https://github.com/YuneidyC', alt: 'Animation Land'},
        {image: './assets/image/restaurantMenu.PNG', link: 'https://github.com/YuneidyC', alt: 'Restaurant page'},
    ];
    
    for(let i = 0; i <= projectArray.length - 1; i++) {
        let project = document.createElement('li');
        projects.appendChild(project);
        project.classList = 'project__list__item';

        let image = document.createElement('img');
        project.appendChild(image);
        image.src = projectArray[i].image;
        image.alt = projectArray[i].alt;
    }
}
