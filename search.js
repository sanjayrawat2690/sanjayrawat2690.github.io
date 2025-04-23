document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const mainSearchResults = document.getElementById('main-search-results');
    const searchResultsGrid = document.getElementById('search-results-grid');
    const deityGrid = document.getElementById('deity-grid');
    const searchInfo = document.getElementById('search-info');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadMoreWrap = document.getElementById('load-more-wrap');
    
    // Search settings
    const RESULTS_PER_PAGE = 12;
    let currentResults = [];
    let currentPage = 1;
    
    // Event listeners
    searchInput.addEventListener('input', handleSearchInput);
    searchButton.addEventListener('click', () => performMainSearch(searchInput.value));
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performMainSearch(searchInput.value);
        }
    });
    clearSearchBtn.addEventListener('click', clearSearch);
    loadMoreBtn.addEventListener('click', loadMoreResults);
    
    // Handle the dropdown quick search
    function handleSearchInput() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        // Filter deities based on search query
        const matchedDeities = deitiesData.filter(deity => {
            return deity.name.toLowerCase().includes(query) || 
                   (deity.aartis && deity.aartis.some(aarti => 
                       aarti.title && aarti.title.toLowerCase().includes(query) || 
                       aarti.hindi && aarti.hindi.toLowerCase().includes(query) || 
                       aarti.english && aarti.english.toLowerCase().includes(query)
                   )) ||
                   (deity.aarti && deity.aarti.toLowerCase().includes(query));
        }).slice(0, 5); // Only show 5 quick results in dropdown
        
        if (matchedDeities.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        // Display results
        searchResults.innerHTML = '';
        searchResults.style.display = 'block';
        
        matchedDeities.forEach(deity => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            const deityImage = document.createElement('div');
            deityImage.className = 'search-result-image';
            deityImage.style.backgroundImage = `url('${deity.image}')`;
            
            const deityInfo = document.createElement('div');
            deityInfo.className = 'search-result-info';
            
            const deityName = document.createElement('div');
            deityName.className = 'search-result-name';
            deityName.textContent = deity.name;
            
            deityInfo.appendChild(deityName);
            resultItem.appendChild(deityImage);
            resultItem.appendChild(deityInfo);
            searchResults.appendChild(resultItem);
            
            // Add click event
            resultItem.addEventListener('click', () => {
                // Check if we're on the deity page
                const isDeityPage = window.location.pathname.includes('deity.html');
                if (isDeityPage) {
                    // If on deity page, navigate to that deity's page
                    window.location.href = `deity.html?id=${deity.id}`;
                } else {
                    // If on index page, show the deity in search results
                    performMainSearch(deity.name);
                    searchResults.style.display = 'none';
                }
            });
        });
        
        // Add "Show all results" option if there are more results
        if (deitiesData.filter(deity => 
            deity.name.toLowerCase().includes(query) || 
            (deity.aartis && deity.aartis.some(aarti => 
                aarti.title && aarti.title.toLowerCase().includes(query) || 
                aarti.hindi && aarti.hindi.toLowerCase().includes(query) || 
                aarti.english && aarti.english.toLowerCase().includes(query)
            )) ||
            (deity.aarti && deity.aarti.toLowerCase().includes(query))
        ).length > 5) {
            const showAllItem = document.createElement('div');
            showAllItem.className = 'search-result-show-all';
            showAllItem.textContent = 'Show all results';
            searchResults.appendChild(showAllItem);
            
            showAllItem.addEventListener('click', () => {
                performMainSearch(query);
                searchResults.style.display = 'none';
            });
        }
    }
    
    // Perform main search for the full results grid
    function performMainSearch(query) {
        if (!query || query.trim().length < 2) return;
        
        query = query.trim().toLowerCase();
        searchInput.value = query;
        
        // Close dropdown
        searchResults.style.display = 'none';
        
        // Filter deities
        currentResults = deitiesData.filter(deity => {
            return deity.name.toLowerCase().includes(query) || 
                  (deity.aartis && deity.aartis.some(aarti => 
                      aarti.title && aarti.title.toLowerCase().includes(query) || 
                      aarti.hindi && aarti.hindi.toLowerCase().includes(query) || 
                      aarti.english && aarti.english.toLowerCase().includes(query)
                  )) ||
                  (deity.aarti && deity.aarti.toLowerCase().includes(query));
        });
        
        // Check if we're on deity.html page
        const isDeityPage = window.location.pathname.includes('deity.html');
        
        if (isDeityPage) {
            // If on deity page, redirect to index with search query
            window.location.href = `index.html?search=${encodeURIComponent(query)}`;
            return;
        }
        
        // Show search results section, hide main grid
        deityGrid.style.display = 'none';
        mainSearchResults.style.display = 'block';
        
        // Update search info
        searchInfo.textContent = `Found ${currentResults.length} results for "${query}"`;
        
        // Reset pagination
        currentPage = 1;
        
        // Display results
        displaySearchResults();
    }
    
    // Display search results with pagination
    function displaySearchResults() {
        searchResultsGrid.innerHTML = '';
        
        const startIndex = 0;
        const endIndex = Math.min(currentPage * RESULTS_PER_PAGE, currentResults.length);
        const resultsToShow = currentResults.slice(startIndex, endIndex);
        
        resultsToShow.forEach(deity => {
            const resultCard = document.createElement('div');
            resultCard.className = 'search-result-deity';
            resultCard.setAttribute('data-id', deity.id);
            
            const deityImage = document.createElement('div');
            deityImage.className = 'deity-image';
            deityImage.style.backgroundImage = `url('${deity.image}')`;
            
            const deityName = document.createElement('h3');
            deityName.textContent = deity.name;
            
            // Add count of aartis
            const aartiCount = document.createElement('span');
            aartiCount.className = 'aarti-count';
            
            // Check if deity has aartis array (new format) or single aarti (old format)
            if (deity.aartis) {
                aartiCount.textContent = `${deity.aartis.length} Aarti${deity.aartis.length > 1 ? 's' : ''}`;
            } else {
                aartiCount.textContent = `1 Aarti`;
            }
            
            resultCard.appendChild(deityImage);
            resultCard.appendChild(deityName);
            resultCard.appendChild(aartiCount);
            searchResultsGrid.appendChild(resultCard);
            
            // Add click event to navigate to deity page
            resultCard.addEventListener('click', () => {
                window.location.href = `deity.html?id=${deity.id}`;
            });
        });
        
        // Show or hide load more button
        if (currentPage * RESULTS_PER_PAGE < currentResults.length) {
            loadMoreWrap.style.display = 'flex';
        } else {
            loadMoreWrap.style.display = 'none';
        }
    }
    
    // Load more results
    function loadMoreResults() {
        currentPage++;
        displaySearchResults();
    }
    
    // Clear search results and show original grid
    function clearSearch() {
        mainSearchResults.style.display = 'none';
        deityGrid.style.display = 'grid';
        searchInput.value = '';
        currentResults = [];
        currentPage = 1;
    }
    
    // Check for URL parameters for direct search
    function checkUrlForSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            performMainSearch(searchQuery);
        }
    }
    
    // Initialize
    checkUrlForSearch();
}); 