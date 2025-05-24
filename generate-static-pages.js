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

// Read the deity template
const deityTemplateHtml = fs.readFileSync('deity-template.html', 'utf8');

// Read the admin.html template
const adminTemplateHtml = fs.readFileSync('admin.html', 'utf8');

// Create deities directory if it doesn't exist
if (!fs.existsSync('deities')) {
    fs.mkdirSync('deities');
}

// Generate static HTML for each deity
deitiesData.forEach(deity => {
    // For each deity, create a directory with their ID in the deities directory
    const deityDir = path.join('deities', deity.id);
    if (!fs.existsSync(deityDir)) {
        fs.mkdirSync(deityDir);
    }
    
    // Create the main index.html file for the deity
    let deityHtml = deityTemplateHtml;
    
    // Update the HTML with deity-specific information
    deityHtml = deityHtml.replace('<title>Deity Aarti - Aarti Sangrah</title>', 
                               `<title>${deity.name} Aarti - Aarti Sangrah</title>`);
    
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
// Update resource paths to be absolute
adminHtml = adminHtml.replace(/href="styles.css"/g, 'href="/styles.css"');
adminHtml = adminHtml.replace(/href="admin-styles.css"/g, 'href="/admin-styles.css"');
adminHtml = adminHtml.replace(/src="admin.js"/g, 'src="/admin.js"');
adminHtml = adminHtml.replace(/src="image-utils.js"/g, 'src="/image-utils.js"');

// Write the index.html file to the admin directory
fs.writeFileSync(path.join('admin', 'index.html'), adminHtml);
console.log('Generated admin page');

console.log('Static site generation complete!'); 