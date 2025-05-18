const fs = require('fs');
const path = require('path');

// Import the deity data
// We'll need to modify this to work in Node.js environment
let deitiesData;
try {
    // Read the data.js file and extract the deitiesData array
    const dataJsContent = fs.readFileSync('data.js', 'utf8');
    // Extract the array by removing the const declaration
    const dataJsArray = dataJsContent.replace('const deitiesData = ', '');
    // Evaluate the array (note: this is safe since we control the content of data.js)
    deitiesData = eval(dataJsArray);
} catch (error) {
    console.error('Error loading deity data:', error);
    process.exit(1);
}

// Read the deity.html template
const deityTemplateHtml = fs.readFileSync('deity.html', 'utf8');

// Read the admin.html template
const adminTemplateHtml = fs.readFileSync('admin.html', 'utf8');

// Create a directory for the static deity pages if it doesn't exist
if (!fs.existsSync('deities')) {
    fs.mkdirSync('deities');
}

// Generate static HTML for each deity
deitiesData.forEach(deity => {
    // For each deity, create a directory with their ID
    const deityDir = path.join('deities', deity.id);
    if (!fs.existsSync(deityDir)) {
        fs.mkdirSync(deityDir);
    }
    
    // Create the main index.html file for the deity
    let deityHtml = deityTemplateHtml;
    
    // Update the HTML with deity-specific information
    // Note: This is a simple replace, but in a production environment
    // you would want to use a proper HTML parser/generator
    deityHtml = deityHtml.replace('<title>Deity Aarti - Aarti Sangrah</title>', 
                               `<title>${deity.name} Aarti - Aarti Sangrah</title>`);
    
    // Update all links to use the new URL structure
    deityHtml = deityHtml.replace(/href="index.html"/g, 'href="/"');
    deityHtml = deityHtml.replace(/href="deity.html\?id=/g, 'href="/');
    
    // Add script to load this specific deity data
    const scriptSection = `
    <script>
        // Single deity data for ${deity.id}
        const currentDeity = ${JSON.stringify(deity)};
        document.addEventListener('DOMContentLoaded', () => {
            // Get aarti ID from URL query parameter if any
            const urlParams = new URLSearchParams(window.location.search);
            const aartiId = urlParams.get('aarti');
            
            // Update page title
            document.title = \`${deity.name} Aarti - Aarti Sangrah\`;
            
            // Update content
            document.getElementById('deity-name').textContent = '${deity.name}';
            
            // Add deity image
            const deityImageContainer = document.getElementById('deity-image');
            if (deityImageContainer) {
                deityImageContainer.style.backgroundImage = \`url('../${deity.image}')\`;
            }
            
            // Current language state (default: Hindi)
            let currentLanguage = 'hindi';
            
            // Current selected aarti
            let currentAarti = null;
            
            // Handle both old format (single aarti) and new format (multiple aartis)
            let aartis = currentDeity.aartis;
            if (!aartis) {
                // Convert old format to new format on the fly
                aartis = [{
                    id: \`${deity.id}-1\`,
                    title: "आरती",
                    hindi: currentDeity.aarti || "Aarti text unavailable",
                    english: currentDeity.aartiEnglish || "English translation not available"
                }];
            }
            
            // Populate aarti cards
            const aartiCardsContainer = document.getElementById('aarti-cards');
            
            aartis.forEach(aarti => {
                const aartiCard = document.createElement('div');
                aartiCard.className = 'aarti-card';
                aartiCard.dataset.aartiId = aarti.id;
                
                const title = document.createElement('h4');
                title.textContent = aarti.title;
                
                const preview = document.createElement('p');
                // Show just the first line of the aarti for preview
                const previewText = aarti.hindi.split('\\n')[0];
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
            let initialAartiId = aartiId;
            if (!initialAartiId || !aartis.find(a => a.id === initialAartiId)) {
                initialAartiId = aartis[0].id;
            }
            
            // Select the initial aarti
            selectAarti(initialAartiId);
            
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
                currentAarti = aartis.find(a => a.id === id);
                
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
        });
    </script>`;
    
    // Remove the original script imports and add our inline script
    deityHtml = deityHtml.replace(/<script src="data.js"><\/script>\s*<script src="deity.js"><\/script>/,
                              scriptSection);
    
    // Write the index.html file to the deity's directory
    fs.writeFileSync(path.join(deityDir, 'index.html'), deityHtml);
    
    console.log(`Generated static page for ${deity.name}`);
});

// Create the admin page
console.log('Generating admin page...');
if (!fs.existsSync('admin')) {
    fs.mkdirSync('admin');
}

let adminHtml = adminTemplateHtml;
// Update links to use the new URL structure
adminHtml = adminHtml.replace(/href="index.html"/g, 'href="/"');
// Write the index.html file to the admin directory
fs.writeFileSync(path.join('admin', 'index.html'), adminHtml);
console.log('Generated admin page');

// Update the main index.html file to use the new URL format
let mainIndexHtml = fs.readFileSync('index.html', 'utf8');
mainIndexHtml = mainIndexHtml.replace(/window\.location\.href = `deity\.html\?id=\${deity\.id}`/g, 
                                 'window.location.href = `/${deity.id}`');

fs.writeFileSync('index.html.new', mainIndexHtml);
console.log('Updated main index.html with new URLs');

// Create .htaccess file for URL rewriting
const htaccessContent = `
# Enable rewrite engine
RewriteEngine On

# Redirect old deity.html?id=xxx URLs to /xxx
RewriteCond %{QUERY_STRING} ^id=([^&]+)
RewriteRule ^deity\.html$ /%1? [R=301,L]

# Serve static deity pages
RewriteRule ^([^/]+)/?$ deities/$1/index.html [L]
`;

fs.writeFileSync('.htaccess', htaccessContent);
console.log('Created .htaccess file for URL rewriting');

console.log('Static site generation complete!'); 