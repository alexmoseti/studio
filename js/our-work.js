document.querySelectorAll('.grid-box video').forEach(video => {
    video.addEventListener('mouseover', () => {
        video.muted = true;
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0
    });

    video.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    })
})