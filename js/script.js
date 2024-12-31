const menuIcon = document.querySelector(".menu-icon"),
    close = document.querySelector(".cross"),
    menuBar = document.querySelector(".navbar"),
    links = document.querySelector("#links"),
    currentPage = window.location.pathname;

menuIcon.addEventListener("click", () => {
    menuBar.classList.add("active");
})

const removeActiveClass = () => {
    menuBar.classList.remove("active");
}

close.addEventListener("click", removeActiveClass);
links.addEventListener("mouseleave", removeActiveClass);



if (currentPage === '/' || currentPage.includes('index.html')) {
    // change menubar color on scroll 
    window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
            menuBar.style.background = 'rgb(0 0 0 / 70%)';
        } else {
            menuBar.style.background = 'rgb(255 255 255 / 40%)';
        }
    });
} else {
    menuBar.style.background = 'rgb(0 0 0 / 70%)';
}


// menubar swipe down animation 
gsap.from(".navbar", {
    y: -100,
    duration: .8,
    delay: .3
});



//   play and pause video 
document.querySelector("#playVideo").addEventListener('click', () => {
    let video = document.querySelector("#playVideo video"),
        playIcon = document.querySelector("#playIcon");

    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
})