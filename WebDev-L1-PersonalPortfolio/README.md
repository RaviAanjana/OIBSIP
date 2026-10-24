# Personal Portfolio Website (Level 1, Task 2)

A complete, professional, and fully responsive personal portfolio website built for the Oasis Infobyte Web Development & Designing Internship - Level 1, Task 2.

## Project Overview

This portfolio website showcases your skills, projects, and provides a way for potential employers or collaborators to get in touch. Built with HTML5, CSS3, and optional Vanilla JavaScript for enhanced mobile navigation. All personal information uses clearly marked placeholders that you can easily replace.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling to all sections
- **Hero Section**: Profile photo placeholder, name, professional title, introduction, and CTA buttons
- **About Me Section**: Background information and career goals sections
- **Skills Section**: Technical skills displayed in attractive cards with tags
- **Projects Section**: Two project cards with titles, descriptions, tech stack, and GitHub/demo links
- **Contact Section**: Email, LinkedIn, and GitHub contact information with placeholders
- **Footer**: Copyright information
- **Hover Effects**: Smooth transitions on all interactive elements
- **Mobile Menu**: Optional JavaScript-powered hamburger menu for mobile devices
- **Semantic HTML**: Uses proper HTML5 semantic elements
- **Accessibility**: Keyboard navigation support and proper focus states

## Project Structure

```
WebDev-L1-PersonalPortfolio/
├── index.html      # Main HTML file with all sections
├── style.css       # Stylesheet with responsive design
├── script.js       # Optional JavaScript for mobile menu
├── README.md       # Project documentation
└── screenshots/    # Folder for project screenshots
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations, Media Queries)
- Vanilla JavaScript (optional - for mobile navigation)

## How to Run Locally

1. **Download or Clone**: Download this folder to your local machine
2. **Navigate**: Open the `WebDev-L1-PersonalPortfolio` folder
3. **Open in Browser**: Double-click `index.html` or right-click and open with your preferred web browser
4. **Optional**: Use a local server for best results (especially if you add more features)

Using a local server:
- **VS Code Live Server**: Install extension, right-click `index.html` → "Open with Live Server"
- **Python**: `python -m http.server 8000` then visit `http://localhost:8000`
- **Node.js**: `npx serve .`

## How to Replace Placeholders with Your Information

All placeholders are clearly marked with square brackets `[like this]`. Follow these steps to customize:

### Hero Section
- Replace `[Your Initials/Name]` in nav logo
- Replace `[Your Full Name]` with your actual name
- Replace `[Your Professional Title - e.g., Web Developer]` with your title
- Replace the intro text in `[Write a short introduction...]` with your own
- Optionally replace the SVG profile placeholder with your photo

### About Section
- Replace `[Describe your educational background...]` with your education details
- Replace `[Add more details about your journey...]` with your story
- Replace `[Describe your career aspirations...]` with your goals

### Skills Section
- Replace `[JavaScript]`, `[React/Vue/etc]` with your actual skills
- Replace backend skills `[Node.js]`, `[Python]`, etc.
- Replace tools `[VS Code]`, `[Figma]`, etc. with your actual tools
- Add or remove skill tags as needed

### Projects Section
- Replace `[Project Title 1]` and `[Project Title 2]` with your project names
- Replace descriptions with actual project details
- Replace tech tags `[Tech 1]`, `[Tech 2]`, `[Tech 3]` with actual technologies used
- Replace `[GitHub Link Placeholder]` with your actual GitHub repository URLs
- Replace `[Demo Link Placeholder]` with your live demo URLs (if available)

### Contact Section
- Replace `[your.email@example.com]` with your actual email
- Replace `[Your LinkedIn URL Placeholder]` with your LinkedIn profile URL
- Replace `[linkedin.com/in/your-profile]` with your display text
- Replace `[Your GitHub URL Placeholder]` with your GitHub profile URL
- Replace `[github.com/your-username]` with your display text

### Footer
- Replace `[Your Full Name]` with your actual name

## How to Take Screenshots for GitHub Submission

### Desktop View
1. Open the page in browser at 1920x1080 resolution
2. Take full page screenshot or section by section
3. Recommended tools: Chrome DevTools, Snipping Tool (Win+Shift+S), or browser extensions

### Tablet View
1. Open Developer Tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Select iPad or set width to ~768px
4. Capture screenshot

### Mobile View
1. Use device emulation with width 375px - 414px (iPhone sizes)
2. Test the hamburger menu functionality
3. Capture screenshot

Save in `screenshots/` folder as:
- `desktop-home.png`, `desktop-about.png`, etc.
- `tablet-view.png`
- `mobile-view.png`
- `mobile-menu.png` (showing hamburger menu open)

## Customization Tips

- **Colors**: Change the CSS variables/colors in `style.css`. Main color is `#6366f1` (indigo)
- **Profile Photo**: Replace the SVG in hero section with an `<img>` tag pointing to your photo
- **Fonts**: Currently using Inter from Google Fonts - can be changed
- **Add More Projects**: Copy a project card block and customize
- **Add Resume Download**: Add a button linking to your PDF resume

## Browser Compatibility

Compatible with all modern browsers:
- Chrome, Firefox, Edge, Safari (latest versions)

## Notes

- The JavaScript file is optional - the site works perfectly without it
- All links with placeholders are marked clearly
- Mobile menu requires JavaScript to function
- Images are SVG placeholders - replace with actual images as needed
- No external frameworks or libraries used

## Author

Created by **Ravi Aanjana** for Oasis Infobyte Web Development & Designing Internship - Level 1, Task 2

## License

This project is created for educational purposes as part of the internship program.
