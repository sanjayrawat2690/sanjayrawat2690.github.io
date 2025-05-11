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
    autocompleteDropdown.id = 'autocomplete-dropdown';
    
    // Get search container
    const searchContainer = searchInput.closest('.search-container');
    if (searchContainer) {
        // Position the dropdown correctly in the DOM structure
        searchContainer.appendChild(autocompleteDropdown);
    } else {
        // If no search container, create a wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'search-container';
        
        // Place the wrapper in the DOM
        searchInput.parentNode.insertBefore(wrapper, searchInput);
        wrapper.appendChild(searchInput);
        wrapper.appendChild(autocompleteDropdown);
    }
    
    // Track if an item is selected from the dropdown
    let itemSelected = false;
    
    // Add event listener for input changes
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        // Clear the dropdown
        autocompleteDropdown.innerHTML = '';
        
        // Reset selection flag on new input
        itemSelected = false;
        
        // Hide dropdown if query is less than 2 characters
        if (query.length < 2) {
            autocompleteDropdown.style.display = 'none';
            return;
        }
        
        // Generate suggestions based on the query
        const suggestions = generateSearchSuggestions(query);
        
        // If no suggestions found, hide dropdown
        if (suggestions.length === 0) {
            autocompleteDropdown.style.display = 'none';
            return;
        }
        
        // Display suggestions in the dropdown
        suggestions.forEach(suggestion => {
            const resultItem = document.createElement('div');
            resultItem.className = 'autocomplete-item';
            
            // Format the suggestion to highlight the matching part
            const highlightedText = formatHighlightedText(suggestion, query);
            resultItem.innerHTML = highlightedText;
            
            // Add click event to search for this suggestion
            resultItem.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Set the search input value to the suggestion text
                searchInput.value = suggestion;
                
                // Set the flag that an item was selected
                itemSelected = true;
                
                // Hide the autocomplete dropdown
                autocompleteDropdown.style.display = 'none';
                
                // Trigger search
                if (searchButton) {
                    searchButton.click();
                } else {
                    performSearch(suggestion);
                }
            });
            
            autocompleteDropdown.appendChild(resultItem);
        });
        
        // Show the dropdown
        autocompleteDropdown.style.display = 'block';
    });
    
    // Generate search suggestions based on query and our deity data
    function generateSearchSuggestions(query) {
        let suggestions = [];
        
        // Filter deities based on the search query
        const matchingDeities = deitiesData.filter(deity => 
            deity.name.toLowerCase().includes(query)
        );
        
        // Add the direct query as the first suggestion
        suggestions.push(query);
        
        // Add matching deity names
        matchingDeities.forEach(deity => {
            if (!suggestions.includes(deity.name.toLowerCase()) && 
                deity.name.toLowerCase() !== query) {
                suggestions.push(deity.name.toLowerCase());
            }
            
            // Add suggestions with common suffixes
            if (suggestions.length < 6) {
                const suffix1 = deity.name.toLowerCase() + " aarti";
                const suffix2 = deity.name.toLowerCase() + " images";
                const suffix3 = deity.name.toLowerCase() + " temple";
                
                if (!suggestions.includes(suffix1)) suggestions.push(suffix1);
                if (!suggestions.includes(suffix2)) suggestions.push(suffix2);
                if (suggestions.length < 6 && !suggestions.includes(suffix3)) 
                    suggestions.push(suffix3);
            }
        });
        
        // Add matching deity aarti titles
        if (suggestions.length < 6) {
            for (const deity of deitiesData) {
                if (deity.aartis) {
                    for (const aarti of deity.aartis) {
                        if (aarti.title.toLowerCase().includes(query) && 
                            !suggestions.includes(aarti.title.toLowerCase())) {
                            suggestions.push(aarti.title.toLowerCase());
                            if (suggestions.length >= 6) break;
                        }
                    }
                }
                if (suggestions.length >= 6) break;
            }
        }
        
        // Limit to top 6 suggestions
        return suggestions.slice(0, 6);
    }
    
    // Format text to highlight matching query part
    function formatHighlightedText(text, query) {
        const lowerText = text.toLowerCase();
        const index = lowerText.indexOf(query);
        
        if (index !== -1) {
            const before = text.substring(0, index);
            const match = text.substring(index, index + query.length);
            const after = text.substring(index + query.length);
            return `<span class="main-text">${before}<span class="highlight">${match}</span>${after}</span>`;
        }
        
        return `<span class="main-text">${text}</span>`;
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
            // If dropdown is open with active item, select that item
            const activeItem = autocompleteDropdown.querySelector('.autocomplete-item.active');
            if (autocompleteDropdown.style.display === 'block' && activeItem) {
                e.preventDefault();
                activeItem.click();
                return;
            }
            
            // Otherwise perform search with current input
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
        
        if (items.length === 0 || autocompleteDropdown.style.display !== 'block') return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (!activeItem) {
                items[0].classList.add('active');
                items[0].scrollIntoView({ block: 'nearest' });
            } else {
                const nextIndex = Array.from(items).indexOf(activeItem) + 1;
                if (nextIndex < items.length) {
                    activeItem.classList.remove('active');
                    items[nextIndex].classList.add('active');
                    items[nextIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (activeItem) {
                const prevIndex = Array.from(items).indexOf(activeItem) - 1;
                if (prevIndex >= 0) {
                    activeItem.classList.remove('active');
                    items[prevIndex].classList.add('active');
                    items[prevIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        } else if (event.key === 'Escape') {
            autocompleteDropdown.style.display = 'none';
        }
    });
    
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