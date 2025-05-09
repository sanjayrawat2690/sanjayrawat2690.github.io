// Search Autocomplete Feature
document.addEventListener('DOMContentLoaded', function() {
    // Get all search input elements (for both index.html and deity.html)
    const searchInputs = document.querySelectorAll('.search-input');
    
    // Initialize the autocomplete feature for each search input
    searchInputs.forEach(searchInput => {
        // Create the autocomplete dropdown element
        const autocompleteDropdown = document.createElement('div');
        autocompleteDropdown.className = 'autocomplete-dropdown';
        searchInput.parentNode.style.position = 'relative';
        searchInput.parentNode.appendChild(autocompleteDropdown);
        
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
                
                // Add click event to navigate to deity page
                resultItem.addEventListener('click', function() {
                    window.location.href = `deity.html?id=${deity.id}`;
                });
                
                autocompleteDropdown.appendChild(resultItem);
            });
            
            // Show the dropdown
            autocompleteDropdown.style.display = 'block';
        });
        
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
}); 