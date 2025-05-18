#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "=== Starting Static Site Generation ==="

# Run the generator script
echo "Running static page generator..."
node generate-static-pages.js

# Check if the generation was successful
if [ $? -ne 0 ]; then
    echo "Error: Generation failed. Please check the error messages above."
    exit 1
fi

# Check if index.html.new was created
if [ -f "index.html.new" ]; then
    # Backup the current index.html
    echo "Backing up original index.html to index.html.backup..."
    cp index.html index.html.backup
    
    # Replace the index.html with the new version
    echo "Updating index.html with new version..."
    mv index.html.new index.html
else
    echo "Warning: index.html.new was not created. Check if the generator ran correctly."
fi

echo "=== Static Site Generation Complete ==="
echo ""
echo "Next steps:"
echo "1. Test the website locally"
echo "2. Upload all files to your web server"
echo "3. Ensure .htaccess is properly configured on your server"
echo ""
echo "Your site now has clean URLs! (e.g., https://dailyaartiandpooja.com/ganesh)" 