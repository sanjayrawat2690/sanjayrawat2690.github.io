document.addEventListener('DOMContentLoaded', () => {
    // Carousel configuration
    const carouselConfig = {
        // Array of banner images with their captions
        slides: [
            {
                image: 'images/banner-temple.jpg',
                caption: 'Discover the spiritual essence of Hindu devotional hymns'
            },
            {
                image: 'images/banner-ganesh.jpg',
                caption: 'Lord Ganesh - Remover of Obstacles and God of New Beginnings'
            },
            {
                image: 'images/banner-shiva.jpg',
                caption: 'Lord Shiva - The Destroyer and Transformer'
            },
            {
                image: 'images/banner-durga.jpg',
                caption: 'Goddess Durga - The Divine Mother and Embodiment of Shakti'
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
        startAutoSlide();
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
    
    // Add event listeners for manual navigation
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    // Stop auto-sliding when user hovers over carousel
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Resume auto-sliding when user's mouse leaves the carousel
    carouselTrack.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
    
    // Initialize the carousel
    initCarousel();
    
    // Use a fallback image if the banner images fail to load
    const fallbackImage = 'images/default-banner.jpg';
    
    // Check if the banner images exist, use fallbacks if they don't
    carouselConfig.slides.forEach((slide, index) => {
        const img = new Image();
        img.onload = () => {
            // Image loaded successfully, do nothing
        };
        
        img.onerror = () => {
            // Image failed to load, use a fallback
            console.log(`Banner image ${slide.image} failed to load, using fallback`);
            const slideElement = carouselTrack.children[index];
            if (slideElement) {
                slideElement.style.backgroundImage = `url('${fallbackImage}')`;
            }
        };
        
        img.src = slide.image;
    });
}); 