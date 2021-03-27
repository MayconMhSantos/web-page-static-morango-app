const  menuNav = document.querySelectorAll(".nav-list a[href^='#']");

console.log(menuNav)

menuNav.forEach(item => {
    console.log(item)
    item.addEventListener('click', scrollToIdonClick);
})

function scrollToIdonClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;


    window.scroll({
        top: to - 100,
        behavior: "smooth"
    })
}