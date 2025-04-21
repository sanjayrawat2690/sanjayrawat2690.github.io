document.addEventListener('DOMContentLoaded', () => {
    // Authentication elements
    const loginContainer = document.getElementById('login-container');
    const adminPanel = document.getElementById('admin-panel');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Admin elements
    const adminGrid = document.querySelector('.admin-grid');
    const resizeImagesCheckbox = document.getElementById('resize-images');
    const applyGhibliEffectCheckbox = document.getElementById('apply-ghibli-effect');
    
    // Authentication credentials
    const ADMIN_USERNAME = 'Aarti_admin';
    const ADMIN_PASSWORD = 'Aarti12345*';
    
    // Check if user is already logged in (from session storage)
    function checkAuthentication() {
        const isAuthenticated = sessionStorage.getItem('aartisangrah_auth') === 'true';
        if (isAuthenticated) {
            showAdminPanel();
        } else {
            showLoginForm();
        }
    }
    
    // Show login form, hide admin panel
    function showLoginForm() {
        loginContainer.style.display = 'flex';
        adminPanel.style.display = 'none';
    }
    
    // Hide login form, show admin panel
    function showAdminPanel() {
        loginContainer.style.display = 'none';
        adminPanel.style.display = 'block';
        initializeAdminPanel();
    }
    
    // Handle login attempt
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Login successful
            sessionStorage.setItem('aartisangrah_auth', 'true');
            loginError.textContent = '';
            showAdminPanel();
        } else {
            // Login failed
            loginError.textContent = 'Invalid username or password';
            passwordInput.value = '';
        }
    });
    
    // Allow Enter key to submit login
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
    
    // Handle logout
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('aartisangrah_auth');
        showLoginForm();
        usernameInput.value = '';
        passwordInput.value = '';
    });
    
    // Initialize admin panel with deity cards
    function initializeAdminPanel() {
        // Clear existing cards
        adminGrid.innerHTML = '';
        
        // Populate the admin grid with deity upload cards
        deitiesData.forEach(deity => {
            const uploadCard = createDeityUploadCard(deity);
            adminGrid.appendChild(uploadCard);
        });
    }
    
    // Create a deity upload card with image preview and upload form
    function createDeityUploadCard(deity) {
        const card = document.createElement('div');
        card.className = 'deity-upload-card';
        
        // Create deity name heading
        const heading = document.createElement('h3');
        heading.textContent = deity.name;
        card.appendChild(heading);
        
        // Create image preview container
        const preview = document.createElement('div');
        preview.className = 'deity-preview';
        
        // Check if deity has a custom image or using default
        const isDefaultImage = deity.image === 'images/default-deity.svg';
        
        if (!isDefaultImage) {
            // Set background image if it exists
            preview.style.backgroundImage = `url('${deity.image}')`;
        } else {
            // Show placeholder text if using default image
            const placeholderText = document.createElement('div');
            placeholderText.className = 'placeholder-text';
            placeholderText.textContent = 'No custom image uploaded';
            preview.appendChild(placeholderText);
        }
        
        card.appendChild(preview);
        
        // Create upload form
        const form = document.createElement('form');
        form.className = 'deity-upload-form';
        form.setAttribute('data-deity-id', deity.id);
        
        // Create file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = `file-${deity.id}`;
        fileInput.accept = 'image/*';
        
        // Create upload button
        const uploadBtn = document.createElement('label');
        uploadBtn.className = 'file-upload-btn';
        uploadBtn.setAttribute('for', `file-${deity.id}`);
        uploadBtn.textContent = isDefaultImage ? 'Upload Image' : 'Change Image';
        
        // Create status message container
        const statusMsg = document.createElement('div');
        statusMsg.className = 'upload-status';
        
        form.appendChild(fileInput);
        form.appendChild(uploadBtn);
        form.appendChild(statusMsg);
        card.appendChild(form);
        
        // Handle file selection
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    statusMsg.innerHTML = '<span>Processing image...</span>';
                    
                    // Process the image based on selected options
                    let processedImage = file;
                    
                    // Apply resizing if selected
                    if (resizeImagesCheckbox.checked) {
                        processedImage = await ImageUtils.resizeAndCropToSquare(processedImage);
                    }
                    
                    // Apply Ghibli effect if selected
                    if (applyGhibliEffectCheckbox.checked) {
                        processedImage = await ImageUtils.applyGhibliStyle(processedImage);
                    }
                    
                    // Create a URL for the processed image
                    const imageUrl = URL.createObjectURL(processedImage);
                    
                    // Update preview with processed image
                    preview.innerHTML = '';
                    preview.style.backgroundImage = `url('${imageUrl}')`;
                    
                    // Generate download link for processed image
                    const downloadLink = ImageUtils.createDownloadLink(processedImage, `${deity.id}.jpg`);
                    
                    // Show success message
                    statusMsg.innerHTML = '<span class="success-message">Image processed successfully!</span>';
                    
                    // Show instructions for saving
                    showManualSaveInstructions(deity.id, downloadLink);
                    
                } catch (error) {
                    statusMsg.innerHTML = `<span class="error-message">Error: ${error.message}</span>`;
                    console.error('Image processing error:', error);
                }
            }
        });
        
        return card;
    }
    
    // Function to display manual save instructions
    function showManualSaveInstructions(deityId, downloadLink) {
        // Create or update instructions div
        let instructionsDiv = document.getElementById('manual-instructions');
        if (!instructionsDiv) {
            instructionsDiv = document.createElement('div');
            instructionsDiv.id = 'manual-instructions';
            instructionsDiv.style.cssText = 'position:fixed; bottom:0; left:0; right:0; background:#f8f8f8; border-top:1px solid #ddd; padding:15px; z-index:100;';
            document.body.appendChild(instructionsDiv);
        }
        
        // Show instructions with image download link
        instructionsDiv.innerHTML = `
            <h3>Save Your Processed Image</h3>
            <p>To use this image for ${deityId}:</p>
            <ol>
                <li><a href="${downloadLink}" download="${deityId}.jpg">Click here to download</a> the processed image</li>
                <li>Save it as "${deityId}.jpg" in the "images" folder of your website</li>
                <li>The data.js file has already been updated to use this image path: <code>images/${deityId}.jpg</code></li>
            </ol>
            <div style="display:flex; gap:10px;">
                <button id="close-instructions" style="padding:5px 10px; background:#333; color:white; border:none; border-radius:4px; cursor:pointer;">Close</button>
                <a href="${downloadLink}" download="${deityId}.jpg" style="padding:5px 10px; background:var(--primary-color); color:white; border:none; border-radius:4px; cursor:pointer; text-decoration:none; display:inline-block;">Download Image</a>
            </div>
        `;
        
        // Add close button functionality
        document.getElementById('close-instructions').addEventListener('click', () => {
            instructionsDiv.style.display = 'none';
        });
    }
    
    // Initialize the page - check authentication status
    checkAuthentication();
}); 