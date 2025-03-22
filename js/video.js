// Video handling functionality
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('hero-video');
    
    if (heroVideo) {
        // Function to handle video loading and playback
        function setupVideo() {
            // Try to play the video automatically
            const playPromise = heroVideo.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started successfully
                    console.log('Video playback started successfully');
                }).catch(error => {
                    // Auto-play was prevented (common on mobile devices)
                    console.log('Auto-play was prevented:', error);
                    
                    // Add a play button for user interaction
                    const playButton = document.createElement('button');
                    playButton.classList.add('video-play-btn');
                    playButton.innerHTML = '<i class="fas fa-play"></i>';
                    
                    const videoContainer = document.querySelector('.video-container');
                    videoContainer.appendChild(playButton);
                    
                    playButton.addEventListener('click', () => {
                        heroVideo.play();
                        playButton.style.display = 'none';
                    });
                });
            }
        }

        // Check if video is already loaded
        if (heroVideo.readyState >= 3) {
            setupVideo();
        } else {
            // If not loaded yet, wait for it
            heroVideo.addEventListener('loadeddata', setupVideo);
        }

        // Handle video resize for responsive behavior
        window.addEventListener('resize', function() {
            const videoContainer = document.querySelector('.video-container');
            const containerWidth = videoContainer.offsetWidth;
            const containerHeight = videoContainer.offsetHeight;
            
            // Adjust video positioning based on aspect ratio
            if (containerWidth / containerHeight > 16/9) {
                heroVideo.style.width = '100%';
                heroVideo.style.height = 'auto';
            } else {
                heroVideo.style.width = 'auto';
                heroVideo.style.height = '100%';
            }
        });
    }
});
