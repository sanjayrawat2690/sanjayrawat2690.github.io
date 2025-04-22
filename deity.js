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
    
    // Add in-page aarti search functionality
    // Listen for search changes to highlight matching parts in the current aarti
    let searchTimeout;
    
    // Create a dedicated inline search for this deity's aartis
    const aartiContainer = document.querySelector('.aarti-container');
    if (aartiContainer) {
        // Add inline search box
        const inlineSearchContainer = document.createElement('div');
        inlineSearchContainer.className = 'inline-search-container';
        inlineSearchContainer.innerHTML = `
            <div class="inline-search">
                <input type="text" id="inline-search-input" placeholder="Search within aartis...">
                <button id="inline-search-button"><i class="fas fa-search"></i></button>
            </div>
            <div class="inline-search-results"></div>
        `;
        
        // Insert after the aarti cards container
        const aartiCardsContainer = document.querySelector('.aarti-cards-container');
        if (aartiCardsContainer && aartiCardsContainer.nextSibling) {
            aartiCardsContainer.parentNode.insertBefore(inlineSearchContainer, aartiCardsContainer.nextSibling);
        }
        
        // Set up inline search functionality
        const inlineSearchInput = document.getElementById('inline-search-input');
        const inlineSearchButton = document.getElementById('inline-search-button');
        const inlineSearchResults = document.querySelector('.inline-search-results');
        
        const handleInlineSearch = () => {
            const query = inlineSearchInput.value.trim().toLowerCase();
            if (query.length < 2) {
                inlineSearchResults.innerHTML = '';
                inlineSearchResults.style.display = 'none';
                resetAartiHighlighting();
                return;
            }
            
            // Search through all aartis for this deity
            const matches = [];
            deity.aartis.forEach(aarti => {
                // Search in both Hindi and English texts
                const hindiMatches = findMatchesInText(aarti.hindi, query);
                const englishMatches = aarti.english ? findMatchesInText(aarti.english, query) : [];
                
                if (hindiMatches.length > 0 || englishMatches.length > 0) {
                    matches.push({
                        aarti: aarti,
                        hindiMatches: hindiMatches, 
                        englishMatches: englishMatches
                    });
                }
            });
            
            // Display results and highlight if the query is in the current aarti
            displayInlineSearchResults(matches, query);
            
            // Check if the current aarti contains the search term
            const currentMatch = matches.find(match => match.aarti.id === currentAarti.id);
            if (currentMatch) {
                highlightAartiText(currentMatch, query);
            } else {
                resetAartiHighlighting();
            }
        };
        
        // Set up event listeners for inline search
        inlineSearchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(handleInlineSearch, 300);
        });
        
        inlineSearchButton.addEventListener('click', handleInlineSearch);
        
        inlineSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleInlineSearch();
            }
        });
    }
    
    // Helper function to find matches of a query in text
    function findMatchesInText(text, query) {
        if (!text) return [];
        
        const matches = [];
        const lines = text.split('\n');
        const regExp = new RegExp(escapeRegExp(query), 'gi');
        
        lines.forEach((line, index) => {
            if (regExp.test(line)) {
                matches.push({
                    line: line,
                    lineNumber: index
                });
            }
        });
        
        return matches;
    }
    
    // Display inline search results
    function displayInlineSearchResults(matches, query) {
        const inlineSearchResults = document.querySelector('.inline-search-results');
        inlineSearchResults.innerHTML = '';
        
        if (matches.length === 0) {
            inlineSearchResults.innerHTML = '<div class="no-results">No matches found in any aarti</div>';
            inlineSearchResults.style.display = 'block';
            return;
        }
        
        matches.forEach(match => {
            const resultItem = document.createElement('div');
            resultItem.className = 'inline-search-result';
            
            // Show aarti title as heading
            const heading = document.createElement('div');
            heading.className = 'result-heading';
            heading.textContent = match.aarti.title;
            resultItem.appendChild(heading);
            
            // Show up to 3 matching lines
            const allMatches = [...match.hindiMatches, ...match.englishMatches].slice(0, 3);
            
            allMatches.forEach(lineMatch => {
                const matchLine = document.createElement('div');
                matchLine.className = 'match-line';
                matchLine.innerHTML = highlightMatchText(lineMatch.line, query);
                resultItem.appendChild(matchLine);
            });
            
            // Add "more matches" indicator if needed
            const totalMatches = match.hindiMatches.length + match.englishMatches.length;
            if (totalMatches > 3) {
                const moreMatches = document.createElement('div');
                moreMatches.className = 'match-line more-matches';
                moreMatches.textContent = `And ${totalMatches - 3} more matches...`;
                resultItem.appendChild(moreMatches);
            }
            
            // Make the result clickable to select that aarti
            resultItem.addEventListener('click', () => {
                // Update URL without reloading
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('aarti', match.aarti.id);
                window.history.pushState({}, '', newUrl);
                
                // Select the aarti
                selectAarti(match.aarti.id);
                
                // Scroll to the matched content
                setTimeout(() => {
                    const aartiLyrics = document.getElementById('aarti-lyrics');
                    if (aartiLyrics) {
                        aartiLyrics.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            });
            
            inlineSearchResults.appendChild(resultItem);
        });
        
        inlineSearchResults.style.display = 'block';
    }
    
    // Highlight aarti text with the matches
    function highlightAartiText(match, query) {
        const aartiLyrics = document.getElementById('aarti-lyrics');
        if (!aartiLyrics || !match) return;
        
        // Get the appropriate matches based on current language
        const matches = currentLanguage === 'hindi' ? match.hindiMatches : match.englishMatches;
        
        // Get the text content
        const text = currentLanguage === 'hindi' ? match.aarti.hindi : match.aarti.english;
        if (!text) return;
        
        // Split into lines
        const lines = text.split('\n');
        
        // Create new HTML content with highlights
        let newHtml = '';
        
        lines.forEach((line, index) => {
            const isMatched = matches.some(m => m.lineNumber === index);
            
            if (isMatched) {
                // Highlight the matched line
                newHtml += `<div class="line matched">${highlightMatchText(line, query)}</div>`;
            } else {
                // Regular line
                newHtml += `<div class="line">${line}</div>`;
            }
        });
        
        aartiLyrics.innerHTML = newHtml;
    }
    
    // Reset highlighting in the aarti text
    function resetAartiHighlighting() {
        const aartiLyrics = document.getElementById('aarti-lyrics');
        if (!aartiLyrics) return;
        
        // Just show the plain text again
        updateAartiText();
    }
    
    // Helper function to highlight matched text
    function highlightMatchText(text, query) {
        const regExp = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regExp, '<span class="highlight">$1</span>');
    }
    
    // Helper function to escape regex special characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}); 