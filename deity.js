document.addEventListener('DOMContentLoaded', () => {
    // Get deity ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const deityId = urlParams.get('id');
    let aartiId = urlParams.get('aarti');
    
    if (!deityId) {
        // Redirect to home page if no deity ID is provided
        window.location.href = 'index.html';
        return;
    }
    
    // Find the deity in our data
    const deity = deitiesData.find(d => d.id === deityId);
    
    if (!deity) {
        // Handle case where deity is not found
        document.getElementById('deity-name').textContent = 'Deity Not Found';
        document.getElementById('aarti-lyrics').textContent = 'Sorry, we could not find the requested deity.';
        return;
    }
    
    // Current language state (default: Hindi)
    let currentLanguage = 'hindi';
    
    // Current selected aarti
    let currentAarti = null;
    
    // Update page title
    document.title = `${deity.name} Aarti - Aarti Sangrah`;
    
    // Update content
    document.getElementById('deity-name').textContent = deity.name;
    
    // Add deity image
    const deityImageContainer = document.getElementById('deity-image');
    if (deityImageContainer) {
        deityImageContainer.style.backgroundImage = `url('${deity.image}')`;
    }
    
    // Handle both old format (single aarti) and new format (multiple aartis)
    if (!deity.aartis) {
        // Convert old format to new format on the fly
        deity.aartis = [{
            id: `${deity.id}-1`,
            title: "आरती",
            hindi: deity.aarti || "Aarti text unavailable",
            english: deity.aartiEnglish || "English translation not available"
        }];
    }
    
    // Populate aarti cards
    const aartiCardsContainer = document.getElementById('aarti-cards');
    
    deity.aartis.forEach(aarti => {
        const aartiCard = document.createElement('div');
        aartiCard.className = 'aarti-card';
        aartiCard.dataset.aartiId = aarti.id;
        
        const title = document.createElement('h4');
        title.textContent = aarti.title;
        
        const preview = document.createElement('p');
        // Show just the first line of the aarti for preview
        const previewText = aarti.hindi.split('\n')[0];
        preview.textContent = previewText;
        
        aartiCard.appendChild(title);
        aartiCard.appendChild(preview);
        
        aartiCard.addEventListener('click', () => {
            // Update URL with the selected aarti ID without reloading the page
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('aarti', aarti.id);
            window.history.pushState({}, '', newUrl);
            
            selectAarti(aarti.id);
        });
        
        aartiCardsContainer.appendChild(aartiCard);
    });
    
    // If aartiId is not specified or not found, use the first aarti
    if (!aartiId || !deity.aartis.find(a => a.id === aartiId)) {
        aartiId = deity.aartis[0].id;
    }
    
    // Select the initial aarti
    selectAarti(aartiId);
    
    // Set up language toggle buttons
    const hindiBtn = document.getElementById('hindi-btn');
    const englishBtn = document.getElementById('english-btn');
    
    hindiBtn.addEventListener('click', () => {
        if (currentLanguage !== 'hindi') {
            currentLanguage = 'hindi';
            updateButtonStates();
            updateAartiText();
        }
    });
    
    englishBtn.addEventListener('click', () => {
        if (currentLanguage !== 'english') {
            currentLanguage = 'english';
            updateButtonStates();
            updateAartiText();
        }
    });
    
    // Function to update button active states
    function updateButtonStates() {
        hindiBtn.classList.toggle('active', currentLanguage === 'hindi');
        englishBtn.classList.toggle('active', currentLanguage === 'english');
    }
    
    // Function to select an aarti
    function selectAarti(id) {
        // Find the selected aarti
        currentAarti = deity.aartis.find(a => a.id === id);
        
        if (!currentAarti) {
            return;
        }
        
        // Update active card
        const aartiCards = document.querySelectorAll('.aarti-card');
        aartiCards.forEach(card => {
            card.classList.toggle('active', card.dataset.aartiId === id);
        });
        
        // Update aarti title
        document.getElementById('aarti-title').textContent = currentAarti.title;
        
        // Update the aarti text
        updateAartiText();
    }
    
    // Function to update aarti text based on selected language
    function updateAartiText() {
        if (!currentAarti) {
            return;
        }
        
        const aartiLyrics = document.getElementById('aarti-lyrics');
        
        if (currentLanguage === 'hindi') {
            aartiLyrics.textContent = currentAarti.hindi;
            aartiLyrics.style.fontFamily = "'Arial', sans-serif";
        } else {
            // Show English translation
            aartiLyrics.textContent = currentAarti.english || "English translation not available yet.";
            aartiLyrics.style.fontFamily = "'Arial', sans-serif";
        }
    }
}); 