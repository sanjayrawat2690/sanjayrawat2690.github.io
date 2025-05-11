// Search Feature (autocomplete disabled)
document.addEventListener('DOMContentLoaded', function() {
    // Get main search input element
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const mainSearchResults = document.getElementById('main-search-results');
    const searchResultsGrid = document.getElementById('search-results-grid');
    
    if (!searchInput) {
        console.warn('Search input element not found');
        return;
    }
    
    // Handle search input form submission
    const searchForm = searchInput.closest('form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (searchInput.value.trim()) {
                if (searchButton) {
                    searchButton.click();
                } else {
                    performSearch(searchInput.value.trim());
                }
            }
        });
    }
    
    // Direct Enter key handling if not in form
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim()) {
            // Perform search with current input
            if (searchButton) {
                e.preventDefault();
                searchButton.click();
            } else {
                e.preventDefault();
                performSearch(searchInput.value.trim());
            }
        }
    });
    
    // If search button exists, add click handler
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (searchInput.value.trim()) {
                performSearch(searchInput.value.trim());
            }
        });
    }
    
    // Function to perform search
    function performSearch(query) {
        // Check if we have the search results elements available
        if (!mainSearchResults || !searchResultsGrid) {
            // Navigate to deity page for the specific deity if exact match
            const matchingDeity = deitiesData.find(deity => 
                deity.name.toLowerCase() === query.toLowerCase()
            );
            
            if (matchingDeity) {
                window.location.href = `deity.html?id=${matchingDeity.id}`;
                return;
            }
            
            // If no exact match but we have query, redirect to search page
            window.location.href = `index.html?search=${encodeURIComponent(query)}`;
            return;
        }
        
        // Clear previous search results
        searchResultsGrid.innerHTML = '';
        
        // Filter deities based on search query
        const results = deitiesData.filter(deity => {
            // Match deity name
            if (deity.name.toLowerCase().includes(query.toLowerCase())) {
                return true;
            }
            
            // Match aarti titles if available
            if (deity.aartis) {
                for (const aarti of deity.aartis) {
                    if (aarti.title.toLowerCase().includes(query.toLowerCase())) {
                        return true;
                    }
                }
            }
            
            return false;
        });
        
        // Display search results count
        const searchInfo = document.getElementById('search-info');
        if (searchInfo) {
            searchInfo.textContent = `Found ${results.length} result${results.length !== 1 ? 's' : ''}`;
        }
        
        // Show search results section
        mainSearchResults.style.display = 'block';
        
        // Hide deity grid
        const deityGrid = document.getElementById('deity-grid');
        if (deityGrid) {
            deityGrid.style.display = 'none';
        }
        
        // Create result cards
        results.forEach(deity => {
            const card = document.createElement('div');
            card.className = 'deity-card';
            card.innerHTML = `
                <div class="deity-image" style="background-image: url('${deity.image}')"></div>
                <h3>${deity.name}</h3>
                <span class="aarti-count">${deity.aartis ? deity.aartis.length : 1} Aarti${deity.aartis && deity.aartis.length !== 1 ? 's' : ''}</span>
            `;
            
            card.addEventListener('click', () => {
                window.location.href = `deity.html?id=${deity.id}`;
            });
            
            searchResultsGrid.appendChild(card);
        });
        
        // Show "Clear Search" button
        const clearSearchBtn = document.getElementById('clear-search-btn');
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'block';
        }
    }
    
    // Check for URL search parameter on page load
    window.addEventListener('load', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        
        if (searchParam) {
            searchInput.value = searchParam;
            performSearch(searchParam);
        }
    });
});