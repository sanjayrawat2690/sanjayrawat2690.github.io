/**
 * Utility functions for handling deity images
 */

const ImageUtils = {
    /**
     * Resize and crop an image to make it square
     * @param {File} file - The image file to process
     * @param {number} size - The target size (width and height) in pixels
     * @returns {Promise<Blob>} - A promise that resolves to the processed image as a Blob
     */
    resizeAndCropToSquare: function(file, size = 500) {
        return new Promise((resolve, reject) => {
            // Create image and file reader
            const img = new Image();
            const reader = new FileReader();
            
            reader.onload = function(e) {
                img.src = e.target.result;
                
                img.onload = function() {
                    // Create canvas for processing
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    // Set canvas size to target dimensions
                    canvas.width = size;
                    canvas.height = size;
                    
                    // Calculate crop dimensions
                    let sourceX = 0, sourceY = 0, sourceWidth = img.width, sourceHeight = img.height;
                    
                    // If image is wider than tall
                    if (img.width > img.height) {
                        sourceWidth = img.height;
                        sourceX = (img.width - sourceWidth) / 2;
                    } 
                    // If image is taller than wide
                    else if (img.height > img.width) {
                        sourceHeight = img.width;
                        sourceY = (img.height - sourceHeight) / 2;
                    }
                    
                    // Draw the cropped and resized image on the canvas
                    ctx.drawImage(
                        img,
                        sourceX, sourceY, sourceWidth, sourceHeight,
                        0, 0, size, size
                    );
                    
                    // Convert canvas to blob
                    canvas.toBlob(blob => {
                        resolve(blob);
                    }, 'image/jpeg', 0.85); // Using JPEG with 85% quality
                };
            };
            
            reader.onerror = function() {
                reject(new Error('Failed to read the file'));
            };
            
            // Start the process by reading the file
            reader.readAsDataURL(file);
        });
    },
    
    /**
     * Creates a download link for an image
     * @param {Blob} blob - The image blob
     * @param {string} filename - The filename to use for download
     * @returns {string} - The download URL
     */
    createDownloadLink: function(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        return link.href;
    },
    
    /**
     * Applies basic adjustments to make image more Ghibli-like
     * @param {File} file - The image file
     * @returns {Promise<Blob>} - A promise that resolves to the processed image
     */
    applyGhibliStyle: function(file) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const reader = new FileReader();
            
            reader.onload = function(e) {
                img.src = e.target.result;
                
                img.onload = function() {
                    // Create canvas for processing
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    // Draw original image
                    ctx.drawImage(img, 0, 0);
                    
                    // Get image data for processing
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    
                    // Apply a soft, pastel-like effect by slightly adjusting colors
                    for (let i = 0; i < data.length; i += 4) {
                        // Soften colors slightly (make them more pastel)
                        data[i] = Math.min(255, data[i] * 0.9 + 25); // Red
                        data[i + 1] = Math.min(255, data[i + 1] * 0.9 + 25); // Green
                        data[i + 2] = Math.min(255, data[i + 2] * 0.9 + 25); // Blue
                        
                        // Slightly reduce contrast
                        data[i] = data[i] > 127 ? Math.min(255, data[i] + 10) : Math.max(0, data[i] - 10);
                        data[i + 1] = data[i + 1] > 127 ? Math.min(255, data[i + 1] + 10) : Math.max(0, data[i + 1] - 10);
                        data[i + 2] = data[i + 2] > 127 ? Math.min(255, data[i + 2] + 10) : Math.max(0, data[i + 2] - 10);
                    }
                    
                    // Put processed data back
                    ctx.putImageData(imageData, 0, 0);
                    
                    // Add a subtle vignette effect
                    const gradient = ctx.createRadialGradient(
                        canvas.width / 2, canvas.height / 2, canvas.width * 0.3,
                        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
                    );
                    gradient.addColorStop(0, 'rgba(255,255,255,0)');
                    gradient.addColorStop(1, 'rgba(0,0,0,0.15)');
                    
                    ctx.fillStyle = gradient;
                    ctx.globalCompositeOperation = 'multiply';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Convert to blob
                    canvas.toBlob(blob => {
                        resolve(blob);
                    }, 'image/jpeg', 0.85);
                };
            };
            
            reader.onerror = function() {
                reject(new Error('Failed to read the file'));
            };
            
            reader.readAsDataURL(file);
        });
    }
};

// Make available globally
window.ImageUtils = ImageUtils; 