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
    const searchInput = document.getElementById('search-input');
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
                const englishMatches = findMatchesInText(aarti.english, query);
                
                if (hindiMatches.length > 0 || englishMatches.length > 0) {
                    matches.push({
                        aarti: aarti,
                        hindiMatches,
                        englishMatches
                    });
                }
            });
            
            // Display results
            if (matches.length > 0) {
                displayInlineSearchResults(matches, query);
                
                // If the current aarti has matches, highlight them
                if (currentAarti) {
                    const currentMatch = matches.find(m => m.aarti.id === currentAarti.id);
                    if (currentMatch) {
                        highlightAartiText(currentLanguage === 'hindi' 
                            ? currentMatch.hindiMatches 
                            : currentMatch.englishMatches, 
                            query);
                    }
                }
            } else {
                inlineSearchResults.innerHTML = '<div class="no-results">No matches found in any aarti</div>';
                inlineSearchResults.style.display = 'block';
                resetAartiHighlighting();
            }
        };
        
        // Set up event listeners
        inlineSearchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(handleInlineSearch, 300);
        });
        
        inlineSearchButton.addEventListener('click', handleInlineSearch);
        
        inlineSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleInlineSearch();
            }
        });
    }
    
    // Function to find all matching text positions in a string
    function findMatchesInText(text, query) {
        if (!text) return [];
        
        const matches = [];
        const textLower = text.toLowerCase();
        let pos = 0;
        
        while (pos < textLower.length) {
            const index = textLower.indexOf(query, pos);
            if (index === -1) break;
            
            // Find the start of the line containing this match
            let lineStart = text.lastIndexOf('\n', index);
            lineStart = lineStart === -1 ? 0 : lineStart + 1;
            
            // Find the end of the line
            let lineEnd = text.indexOf('\n', index);
            lineEnd = lineEnd === -1 ? text.length : lineEnd;
            
            matches.push({
                matchIndex: index,
                matchLength: query.length,
                lineText: text.substring(lineStart, lineEnd),
                lineStart,
                lineEnd
            });
            
            pos = index + query.length;
        }
        
        return matches;
    }
    
    // Function to display inline search results
    function displayInlineSearchResults(matches, query) {
        inlineSearchResults.innerHTML = '';
        
        matches.forEach(match => {
            const resultItem = document.createElement('div');
            resultItem.className = 'inline-search-result';
            
            // Create heading with aarti title
            const heading = document.createElement('div');
            heading.className = 'result-heading';
            heading.textContent = match.aarti.title;
            resultItem.appendChild(heading);
            
            // Show up to 3 matching lines for each aarti
            const allMatches = [...match.hindiMatches, ...match.englishMatches].slice(0, 3);
            
            allMatches.forEach(lineMatch => {
                const matchLine = document.createElement('div');
                matchLine.className = 'match-line';
                
                // Highlight the matching part of the line
                const before = lineMatch.lineText.substring(0, lineMatch.matchIndex - lineMatch.lineStart);
                const matched = lineMatch.lineText.substring(
                    lineMatch.matchIndex - lineMatch.lineStart, 
                    lineMatch.matchIndex - lineMatch.lineStart + lineMatch.matchLength
                );
                const after = lineMatch.lineText.substring(
                    lineMatch.matchIndex - lineMatch.lineStart + lineMatch.matchLength
                );
                
                matchLine.innerHTML = `${before}<span class="highlight">${matched}</span>${after}`;
                resultItem.appendChild(matchLine);
            });
            
            // Add click handler to go to this aarti
            resultItem.addEventListener('click', () => {
                selectAarti(match.aarti.id);
                
                // Update URL
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('aarti', match.aarti.id);
                window.history.pushState({}, '', newUrl);
                
                // Highlight matches in the selected aarti
                const matchesToHighlight = currentLanguage === 'hindi' 
                    ? match.hindiMatches 
                    : match.englishMatches;
                
                highlightAartiText(matchesToHighlight, query);
                
                // Hide search results after selection
                inlineSearchResults.style.display = 'none';
            });
            
            inlineSearchResults.appendChild(resultItem);
        });
        
        inlineSearchResults.style.display = 'block';
    }
    
    // Function to highlight matches in the displayed aarti text
    function highlightAartiText(matches, query) {
        if (!matches || matches.length === 0) {
            resetAartiHighlighting();
            return;
        }
        
        const aartiLyrics = document.getElementById('aarti-lyrics');
        const text = aartiLyrics.textContent;
        
        // Create a temporary container to hold highlighted HTML
        const tempContainer = document.createElement('div');
        let lastPos = 0;
        
        // Sort matches by position
        const sortedMatches = [...matches].sort((a, b) => a.matchIndex - b.matchIndex);
        
        // Build highlighted HTML
        sortedMatches.forEach(match => {
            // Add text before the match
            tempContainer.appendChild(document.createTextNode(
                text.substring(lastPos, match.matchIndex)
            ));
            
            // Add the highlighted match
            const highlightSpan = document.createElement('span');
            highlightSpan.className = 'highlight';
            highlightSpan.textContent = text.substring(
                match.matchIndex, 
                match.matchIndex + match.matchLength
            );
            tempContainer.appendChild(highlightSpan);
            
            lastPos = match.matchIndex + match.matchLength;
        });
        
        // Add any remaining text
        if (lastPos < text.length) {
            tempContainer.appendChild(document.createTextNode(
                text.substring(lastPos)
            ));
        }
        
        // Replace aarti lyrics content with highlighted version
        aartiLyrics.innerHTML = '';
        aartiLyrics.appendChild(tempContainer);
    }
    
    // Reset aarti text highlighting
    function resetAartiHighlighting() {
        const aartiLyrics = document.getElementById('aarti-lyrics');
        if (currentAarti) {
            if (currentLanguage === 'hindi') {
                aartiLyrics.textContent = currentAarti.hindi;
            } else {
                aartiLyrics.textContent = currentAarti.english || "English translation not available yet.";
            }
        }
    }
}); 