document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Build a searchable index from the deities data
    const searchIndex = buildSearchIndex();
    
    // Handle search input
    searchInput.addEventListener('input', debounce(() => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }
        
        const results = performSearch(query);
        displayResults(results, query);
    }, 300));
    
    // Handle search button click
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) return;
        
        const results = performSearch(query);
        displayResults(results, query);
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchButton.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Build search index from deity data
    function buildSearchIndex() {
        const index = [];
        
        deitiesData.forEach(deity => {
            // Add deity basic info to index
            index.push({
                type: 'deity',
                id: deity.id,
                name: deity.name,
                content: deity.name.toLowerCase(),
                url: `deity.html?id=${deity.id}`
            });
            
            // Add aartis to index (handle both old and new format)
            if (deity.aartis) {
                // New format with multiple aartis
                deity.aartis.forEach(aarti => {
                    index.push({
                        type: 'aarti',
                        id: aarti.id,
                        deityId: deity.id,
                        deityName: deity.name,
                        title: aarti.title,
                        content: `${aarti.title.toLowerCase()} ${aarti.hindi.toLowerCase()} ${aarti.english.toLowerCase()}`,
                        url: `deity.html?id=${deity.id}&aarti=${aarti.id}`
                    });
                });
            } else if (deity.aarti) {
                // Old format with single aarti
                index.push({
                    type: 'aarti',
                    id: `${deity.id}-1`,
                    deityId: deity.id,
                    deityName: deity.name,
                    title: "आरती",
                    content: `आरती ${deity.aarti.toLowerCase()} ${deity.aartiEnglish ? deity.aartiEnglish.toLowerCase() : ''}`,
                    url: `deity.html?id=${deity.id}`
                });
            }
        });
        
        return index;
    }
    
    // Perform search against index
    function performSearch(query) {
        return searchIndex.filter(item => item.content.includes(query))
                          .slice(0, 10); // Limit to 10 results for performance
    }
    
    // Display search results
    function displayResults(results, query) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
            searchResults.classList.add('active');
            return;
        }
        
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            if (result.type === 'deity') {
                resultItem.innerHTML = `<span class="deity-name">${highlightMatch(result.name, query)}</span>`;
            } else {
                resultItem.innerHTML = `
                    <span class="deity-name">${result.deityName}</span>
                    <span class="aarti-title">${highlightMatch(result.title, query)}</span>
                `;
            }
            
            resultItem.addEventListener('click', () => {
                window.location.href = result.url;
            });
            
            searchResults.appendChild(resultItem);
        });
        
        searchResults.classList.add('active');
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