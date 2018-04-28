(() => {
    const links = document.getElementsByClassName('nav-link');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', () => {
            document.querySelector(link.getAttribute("data-target")).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
})();