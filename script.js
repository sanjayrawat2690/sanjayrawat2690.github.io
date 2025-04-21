document.addEventListener('DOMContentLoaded', () => {
    const deityGrid = document.getElementById('deity-grid');
    
    // Populate the deity grid with cards
    deitiesData.forEach(deity => {
        const deityCard = document.createElement('div');
        deityCard.className = 'deity-card';
        deityCard.setAttribute('data-id', deity.id);
        
        // Create image element for Ghibli-style deity image
        const deityImage = document.createElement('div');
        deityImage.className = 'deity-image';
        deityImage.style.backgroundImage = `url('${deity.image}')`;
        
        const deityName = document.createElement('h3');
        deityName.textContent = deity.name;
        
        // Add count of aartis - handle both old and new data format
        const aartiCount = document.createElement('span');
        aartiCount.className = 'aarti-count';
        
        // Check if deity has aartis array (new format) or single aarti (old format)
        if (deity.aartis) {
            aartiCount.textContent = `${deity.aartis.length} Aarti${deity.aartis.length > 1 ? 's' : ''}`;
        } else {
            aartiCount.textContent = `1 Aarti`;
        }
        
        deityCard.appendChild(deityImage);
        deityCard.appendChild(deityName);
        deityCard.appendChild(aartiCount);
        deityGrid.appendChild(deityCard);
        
        // Add click event to navigate to deity page
        deityCard.addEventListener('click', () => {
            // We'll use a query parameter to pass the deity ID
            window.location.href = `deity.html?id=${deity.id}`;
        });
    });
}); 