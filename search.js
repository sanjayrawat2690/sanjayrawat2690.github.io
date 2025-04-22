document.addEventListener('DOMContentLoaded', () => {
    // Main header search elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Debug: Log which search elements are found or missing
    console.log("Search Elements Found:");
    console.log("Header Search Input:", searchInput ? "✓" : "✗");
    console.log("Header Search Button:", searchButton ? "✓" : "✗");
    console.log("Header Search Results:", searchResults ? "✓" : "✗");
    
    // Build a searchable index from the deities data
    const searchIndex = buildSearchIndex();
    
    // Set up search functionality for the header search bar
    if (searchInput && searchButton && searchResults) {
        setupSearch(searchInput, searchButton, searchResults);
    } else {
        console.log("Warning: Header search elements missing");
    }
    
    // Generic function to set up search for any search bar
    function setupSearch(input, button, results) {
        console.log(`Setting up search for ${input.id}`);
        
        // Handle search input
        input.addEventListener('input', debounce(() => {
            const query = input.value.trim().toLowerCase();
            if (query.length < 2) {
                results.classList.remove('active');
                results.innerHTML = '';
                return;
            }
            
            const searchResults = performSearch(query);
            displayResults(searchResults, query, results);
        }, 300));
        
        // Handle search button click
        button.addEventListener('click', () => {
            const query = input.value.trim().toLowerCase();
            if (query.length < 2) return;
            
            const searchResults = performSearch(query);
            displayResults(searchResults, query, results);
        });
        
        // Handle Enter key press
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = input.value.trim().toLowerCase();
                if (query.length < 2) return;
                
                const searchResults = performSearch(query);
                displayResults(searchResults, query, results);
            }
        });
    }
    
    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        // Function to check if an element is part of a search component
        const isPartOfSearch = (element, input, button, results) => {
            return input && (
                input.contains(e.target) || 
                (button && button.contains(e.target)) || 
                (results && results.contains(e.target))
            );
        };
        
        // Check and hide header search results if needed
        if (searchResults && !isPartOfSearch(e.target, searchInput, searchButton, searchResults)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Build search index from deity data
    function buildSearchIndex() {
        const index = [];
        
        if (!window.deitiesData || !Array.isArray(window.deitiesData)) {
            console.error("Error: deitiesData is not available or not an array");
            return index;
        }
        
        console.log(`Building search index with ${window.deitiesData.length} deities`);
        
        deitiesData.forEach(deity => {
            // Add deity basic info to index
            index.push({
                type: 'deity',
                id: deity.id,
                name: deity.name,
                content: deity.name.toLowerCase(),
                url: `deity.html?id=${deity.id}`,
                score: 100 // Base score for deity names
            });
            
            // Add aartis to index (handle both old and new format)
            if (deity.aartis) {
                // New format with multiple aartis
                deity.aartis.forEach(aarti => {
                    // Add aarti title as a separate entry for better visibility
                    index.push({
                        type: 'aarti_title',
                        id: aarti.id,
                        deityId: deity.id,
                        deityName: deity.name,
                        title: aarti.title,
                        content: aarti.title.toLowerCase(),
                        url: `deity.html?id=${deity.id}&aarti=${aarti.id}`,
                        score: 90 // High score for aarti titles
                    });
                    
                    // Add full aarti content for searching
                    index.push({
                        type: 'aarti_content',
                        id: aarti.id,
                        deityId: deity.id,
                        deityName: deity.name,
                        title: aarti.title,
                        content: `${aarti.title.toLowerCase()} ${aarti.hindi.toLowerCase()} ${aarti.english.toLowerCase()}`,
                        url: `deity.html?id=${deity.id}&aarti=${aarti.id}`,
                        hindi: aarti.hindi,
                        english: aarti.english,
                        score: 80 // Lower score for content matches
                    });
                });
            } else if (deity.aarti) {
                // Old format with single aarti
                index.push({
                    type: 'aarti_content',
                    id: `${deity.id}-1`,
                    deityId: deity.id,
                    deityName: deity.name,
                    title: "आरती",
                    content: `आरती ${deity.aarti.toLowerCase()} ${deity.aartiEnglish ? deity.aartiEnglish.toLowerCase() : ''}`,
                    url: `deity.html?id=${deity.id}`,
                    hindi: deity.aarti,
                    english: deity.aartiEnglish || "",
                    score: 80 // Lower score for content matches
                });
            }
        });
        
        console.log(`Search index built with ${index.length} entries`);
        return index;
    }
    
    // Perform search against index
    function performSearch(query) {
        // Filter items that match the query
        const matchingItems = searchIndex.filter(item => item.content.includes(query));
        
        // Score each result based on how well it matches
        const scoredResults = matchingItems.map(item => {
            let finalScore = item.score;
            
            // Boost score if query is at the beginning of content
            if (item.content.startsWith(query)) {
                finalScore += 20;
            }
            
            // Boost score based on how much of the query matches
            const matchRatio = query.length / item.content.length;
            finalScore += Math.round(matchRatio * 10);
            
            // Boost score if exact match in title
            if (item.title && item.title.toLowerCase() === query) {
                finalScore += 30;
            }
            
            return {
                ...item,
                finalScore
            };
        });
        
        // Sort by score (highest first) and limit results
        return scoredResults
            .sort((a, b) => b.finalScore - a.finalScore)
            .slice(0, 10);
    }
    
    // Display search results
    function displayResults(results, query, resultsContainer) {
        console.log(`Displaying ${results.length} search results for "${query}"`);
        
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
            resultsContainer.classList.add('active');
            return;
        }
        
        // Group results by deity
        const groupedResults = {};
        results.forEach(result => {
            if (!groupedResults[result.deityId]) {
                groupedResults[result.deityId] = [];
            }
            groupedResults[result.deityId].push(result);
        });
        
        // Display results grouped by deity
        Object.entries(groupedResults).forEach(([deityId, items]) => {
            // Get the first result to extract deity info
            const firstItem = items[0];
            
            const deitySection = document.createElement('div');
            deitySection.className = 'search-result-deity';
            
            // Create and append deity header
            const deityHeader = document.createElement('div');
            deityHeader.className = 'search-result-deity-header';
            deityHeader.innerHTML = `<span class="deity-name">${firstItem.deityName}</span>`;
            deityHeader.addEventListener('click', () => {
                window.location.href = `deity.html?id=${deityId}`;
            });
            deitySection.appendChild(deityHeader);
            
            // Add each aarti result
            items.forEach(item => {
                if (item.type === 'aarti_content' || item.type === 'aarti_title') {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    
                    let itemContent = '';
                    if (item.title) {
                        itemContent += `<div class="aarti-title">${highlightMatch(item.title, query)}</div>`;
                    }
                    
                    if (item.type === 'aarti_content') {
                        // Get excerpt for hindi or english content based on match
                        const excerpt = findExcerpt(item.hindi, item.english, query);
                        itemContent += `<div class="aarti-excerpt">${excerpt}</div>`;
                    }
                    
                    resultItem.innerHTML = itemContent;
                    resultItem.addEventListener('click', () => {
                        window.location.href = item.url;
                    });
                    
                    deitySection.appendChild(resultItem);
                }
            });
            
            resultsContainer.appendChild(deitySection);
        });
        
        resultsContainer.classList.add('active');
    }
    
    // Find a relevant excerpt from the aarti that contains the query
    function findExcerpt(hindi, english, query) {
        // Try to find the query in hindi text first
        let hindiLines = hindi.split('\n');
        for (let line of hindiLines) {
            if (line.toLowerCase().includes(query)) {
                return highlightMatch(line, query);
            }
        }
        
        // If not found in hindi, try english
        if (english) {
            let englishLines = english.split('\n');
            for (let line of englishLines) {
                if (line.toLowerCase().includes(query)) {
                    return highlightMatch(line, query);
                }
            }
        }
        
        // If no specific line found, return the first line
        return hindiLines[0];
    }
    
    // Highlight matching text
    function highlightMatch(text, query) {
        if (!text.toLowerCase().includes(query.toLowerCase())) return text;
        
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    
    // Helper function to escape regex special characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // Debounce function to limit how often the search runs
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }
}); 