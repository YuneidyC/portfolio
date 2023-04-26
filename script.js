addSocialMedia();

function addSocialMedia() {
    const arraySocialMedia = [
        {image: './assets/icons/linkedin.png', link: 'https://ie.linkedin.com/in/yuneidyc'},
        {image: './assets/icons/github.svg', link: 'https://github.com/YuneidyC'},
        {image: './assets/icons/gmail.png', link: ''}
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
        image.classList = 'nav__social-media__img';
    }
}
