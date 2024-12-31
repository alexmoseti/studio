function animateElement(selector, animationOption) {
    gsap.to(selector, {
        scrollTrigger: {
            trigger: animationOption.trigger || selector,
            start: animationOption.start || "top 50%",
            end: animationOption.end || "top 80%",
            toggleAction: animationOption.toggleAction || "play none none none",
        },
        x: animationOption.x || 0,
        y: animationOption.y || 0,
        opacity: animationOption.opacity || 1,
        duration: animationOption.duration || 1,
        delay: animationOption.delay || 0,
        stagger: animationOption.stagger || 1,
    });
}

// dynamic animation for multiple elements 
function animateMultipleElements(selector, animationOption) {
    gsap.utils.toArray(selector).forEach((element, i) => {
        gsap.to(element, {
            x: animationOption.x || 0,
            y: animationOption.y || 0,
            opacity: animationOption.opacity || 1,
            duration: animationOption.duration || .5,
            delay: i * (animationOption.stagger || 0.3),
            scrollTrigger: {
                trigger: element,
                start: animationOption.start || "top 80%",
                toggleAction: animationOption.toggleAction || "play none none none",
            }
        });
    });
}


// service box animation
animateMultipleElements('.service .box', {stagger: 0.5});

// demo section animation 
animateElement('.demo .video', {
    trigger: '.demo'
})

animateElement('.demo .box :is(.content > *, .button)', {
    trigger: '.demo'
})

// home gallery section animation 

animateElement(".home-gallery :is(.container .container-box h2, .container .content)", {
    trigger: ".home-gallery",
    start: "top 80%"
})

// gallery boxes animation 

animateMultipleElements('.home-gallery .container .gallery .box', {})

// feedback section animation 

animateElement('.feedback .text :is(h4, p)', {
    stagger: .4,
})

animateElement('.feedback .feedback-card',{})

// footer element animation 

animateMultipleElements('footer :is(.about-us, .links)',{})