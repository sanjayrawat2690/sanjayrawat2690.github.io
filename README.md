# Aarti Sangrah - Static Site

A digital collection of traditional Hindu devotional hymns featuring deities and their aartis.

## New URL Structure

The website has been updated to use a cleaner URL structure:

- Old format: `https://dailyaartiandpooja.com/deity.html?id=ganesh`
- New format: `https://dailyaartiandpooja.com/ganesh`

## How to Generate Static Pages

The site now uses a static site generation approach where each deity gets its own directory and index.html file:

1. Install Node.js (if not already installed)
2. Run the static page generator:

```bash
node generate-static-pages.js
```

This will:
- Create a `/deities` directory with subdirectories for each deity
- Generate an `index.html` file for each deity
- Create a `.htaccess` file for URL rewriting
- Generate a new `index.html.new` file with updated URLs

3. After running the script:
   - Review `index.html.new` and if it looks good, rename it to `index.html`
   - Upload all files to your web server
   - Ensure that `.htaccess` file is properly configured on your server

## Directory Structure

After running the generator, your site will have this structure:

```
/                         # Root directory
├── index.html            # Main homepage
├── styles.css            # Main stylesheet
├── search.js             # Search functionality
├── script.js             # Main site functionality
├── autocomplete.css      # Styles for search autocomplete
├── .htaccess             # URL rewriting rules
├── images/               # Image directory
└── deities/              # Deity pages
    ├── ganesh/           # Ganesh deity directory
    │   └── index.html    # Ganesh page
    ├── lakshmi/          # Lakshmi deity directory 
    │   └── index.html    # Lakshmi page
    └── [other deities]/  # Other deity directories
```

## Server Requirements

To use the clean URLs, your server must:
1. Support `.htaccess` files
2. Have `mod_rewrite` enabled
3. Allow URL rewriting via `.htaccess`

Most Apache servers support this by default, but you may need to enable it in your hosting configuration.

## SEO Benefits

This URL structure provides several SEO benefits:
- Cleaner URLs are more user-friendly
- URL structure better reflects the content hierarchy
- Improved search engine indexing
- Better readability in search results

## Features

- Browse through 50 Hindu deities with Ghibli-style illustrations
- Beautiful, peaceful interface inspired by Studio Ghibli's aesthetic
- Read the most popular aarti lyrics for each deity
- Simple, intuitive interface with easy navigation

## Ghibli-Style Illustrations

The website features Studio Ghibli-inspired artwork for each deity, characterized by:
- Soft, pastel color palettes
- Gentle, rounded forms
- Peaceful and reverent artistic style
- Simple yet expressive character designs

## Development

This project is built using HTML, CSS, and JavaScript.

To run the project locally:
1. Clone the repository
2. Open the `index.html` file in your browser

## Image Credits

The deity illustrations are currently placeholder SVG images. For a production site, it's recommended to:
- Commission an artist to create custom Ghibli-style illustrations for each deity
- Generate images using AI tools with appropriate prompts
- Replace the placeholder SVGs with the final artwork using the same filenames

## Deployment

The site is deployable on the lovable.dev platform. 