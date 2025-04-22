document.addEventListener('DOMContentLoaded', () => {
    // Carousel configuration
    const carouselConfig = {
        // Array of banner images with their captions
        slides: [
            {
                image: 'images/default-banner.svg',
                caption: 'Discover the spiritual essence of Hindu devotional hymns'
            }
        ],
        // Auto-slide interval in milliseconds (5 seconds)
        interval: 5000,
        // Initial slide index
        currentIndex: 0
    };
    
    // Get carousel elements
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const bannerSearchContainer = document.querySelector('.banner-search-container');
    
    // Check if carousel elements exist (they might not on other pages)
    if (!carouselTrack) return;
    
    let autoSlideInterval;
    let indicators = [];
    
    // Initialize the carousel
    function initCarousel() {
        // Create slides
        carouselConfig.slides.forEach((slide, index) => {
            // Create slide element
            const slideElement = document.createElement('div');
            slideElement.className = 'carousel-slide';
            slideElement.style.backgroundImage = `url('${slide.image}')`;
            
            // Create caption
            if (slide.caption) {
                const caption = document.createElement('div');
                caption.className = 'carousel-caption';
                caption.textContent = slide.caption;
                slideElement.appendChild(caption);
            }
            
            // Add to track
            carouselTrack.appendChild(slideElement);
            
            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('data-index', index);
            indicatorsContainer.appendChild(indicator);
            indicators.push(indicator);
            
            // Add click event to indicator
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
        });
        
        // Set initial state
        updateCarousel();
        
        // Make sure the banner search container is visible and positioned correctly
        if (bannerSearchContainer) {
            bannerSearchContainer.style.display = 'block';
            bannerSearchContainer.style.zIndex = '20';
        }
        
        // Only start auto-slide if there are multiple slides
        if (carouselConfig.slides.length > 1) {
            startAutoSlide();
        } else {
            // If there's only one slide, hide the navigation buttons
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
            if (indicatorsContainer) indicatorsContainer.style.display = 'none';
        }
    }
    
    // Update carousel display based on current index
    function updateCarousel() {
        // Update slide position
        carouselTrack.style.transform = `translateX(-${carouselConfig.currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === carouselConfig.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Go to a specific slide
    function goToSlide(index) {
        carouselConfig.currentIndex = index;
        updateCarousel();
    }
    
    // Go to the next slide
    function nextSlide() {
        carouselConfig.currentIndex = (carouselConfig.currentIndex + 1) % carouselConfig.slides.length;
        updateCarousel();
    }
    
    // Go to the previous slide
    function prevSlide() {
        carouselConfig.currentIndex = (carouselConfig.currentIndex - 1 + carouselConfig.slides.length) % carouselConfig.slides.length;
        updateCarousel();
    }
    
    // Start auto-sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, carouselConfig.interval);
    }
    
    // Reset auto-slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Add event listeners for manual navigation if multiple slides
    if (carouselConfig.slides.length > 1) {
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        // Stop auto-sliding when user hovers over carousel
        carouselTrack.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        // Resume auto-sliding when user's mouse leaves the carousel
        carouselTrack.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    // Initialize the carousel
    initCarousel();
}); 