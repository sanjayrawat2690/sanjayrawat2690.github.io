// Search Autocomplete Feature
document.addEventListener('DOMContentLoaded', function() {
    // Get main search input element
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const mainSearchResults = document.getElementById('main-search-results');
    const searchResultsGrid = document.getElementById('search-results-grid');
    
    if (!searchInput) {
        console.warn('Search input element not found');
        return;
    }
    
    // Create the autocomplete dropdown element
    const autocompleteDropdown = document.createElement('div');
    autocompleteDropdown.className = 'autocomplete-dropdown';
    
    // Ensure the parent container has position:relative
    const searchContainer = searchInput.closest('.search-container');
    if (searchContainer) {
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(autocompleteDropdown);
    } else {
        // If no search container, create a wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'search-container';
        wrapper.style.position = 'relative';
        wrapper.style.width = '100%';
        
        // Place the wrapper in the DOM
        searchInput.parentNode.insertBefore(wrapper, searchInput);
        wrapper.appendChild(searchInput);
        wrapper.appendChild(autocompleteDropdown);
    }
    
    // Add event listener for input changes
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        // Clear the dropdown
        autocompleteDropdown.innerHTML = '';
        
        // Hide dropdown if query is less than 3 characters
        if (query.length < 3) {
            autocompleteDropdown.style.display = 'none';
            return;
        }
        
        // Filter deity data based on the search query
        const matchingDeities = deitiesData.filter(deity => {
            // Search in deity name
            if (deity.name.toLowerCase().includes(query)) {
                return true;
            }
            
            // Search in aarti titles if available
            if (deity.aartis) {
                for (const aarti of deity.aartis) {
                    if (aarti.title.toLowerCase().includes(query)) {
                        return true;
                    }
                }
            }
            
            return false;
        });
        
        // Take only the top 5 matches
        const topMatches = matchingDeities.slice(0, 5);
        
        // If no matches found, hide dropdown
        if (topMatches.length === 0) {
            autocompleteDropdown.style.display = 'none';
            return;
        }
        
        // Display matches in the dropdown
        topMatches.forEach(deity => {
            const resultItem = document.createElement('div');
            resultItem.className = 'autocomplete-item';
            resultItem.textContent = deity.name;
            
            // Add click event to search for this deity
            resultItem.addEventListener('click', function() {
                // Set the search input value to the deity name
                searchInput.value = deity.name;
                
                // Hide the autocomplete dropdown
                autocompleteDropdown.style.display = 'none';
                
                // Trigger search if search button exists
                if (searchButton) {
                    // Simulate a click on the search button
                    searchButton.click();
                } else {
                    // Manual search implementation
                    performSearch(deity.name);
                }
            });
            
            autocompleteDropdown.appendChild(resultItem);
        });
        
        // Show the dropdown
        autocompleteDropdown.style.display = 'block';
    });
    
    // Function to perform search
    function performSearch(query) {
        // Check if we have the search results elements available
        if (!mainSearchResults || !searchResultsGrid) {
            // Navigate to deity page for the specific deity
            const matchingDeity = deitiesData.find(deity => 
                deity.name.toLowerCase() === query.toLowerCase()
            );
            
            if (matchingDeity) {
                window.location.href = `deity.html?id=${matchingDeity.id}`;
            }
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
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !autocompleteDropdown.contains(event.target)) {
            autocompleteDropdown.style.display = 'none';
        }
    });
    
    // Handle keyboard navigation in dropdown
    searchInput.addEventListener('keydown', function(event) {
        const items = autocompleteDropdown.querySelectorAll('.autocomplete-item');
        const activeItem = autocompleteDropdown.querySelector('.autocomplete-item.active');
        
        if (items.length === 0) return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (!activeItem) {
                items[0].classList.add('active');
            } else {
                const nextIndex = Array.from(items).indexOf(activeItem) + 1;
                if (nextIndex < items.length) {
                    activeItem.classList.remove('active');
                    items[nextIndex].classList.add('active');
                }
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (activeItem) {
                const prevIndex = Array.from(items).indexOf(activeItem) - 1;
                if (prevIndex >= 0) {
                    activeItem.classList.remove('active');
                    items[prevIndex].classList.add('active');
                }
            }
        } else if (event.key === 'Enter' && activeItem) {
            event.preventDefault();
            activeItem.click();
        }
    });
}); 