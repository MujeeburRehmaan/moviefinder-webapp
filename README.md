# 🎬 Movie Search App

A modern, responsive movie search web application built with HTML, CSS, JavaScript (ES6), and Bootstrap 5. Search for your favorite movies and get detailed information powered by the OMDb API.

![Movie Search App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

## ✨ Features

- 🔍 **Real-time Movie Search** - Search for movies by title using the OMDb API
- 🎨 **Dark Cinematic Theme** - Stunning dark UI with animated backgrounds and glowing effects
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Detailed Movie Information** - View comprehensive details including:
  - Movie poster
  - Title, year, and genre
  - Director and cast
  - IMDb rating
  - Full plot synopsis
  - Runtime and release date
- ⚡ **Smooth Animations** - Elegant hover effects and transitions
- 🔄 **Loading States** - Visual feedback with Bootstrap spinner
- ❌ **Error Handling** - User-friendly error messages for failed searches
- 🖼️ **Fallback Images** - Automatic placeholder for missing posters
- ⌨️ **Keyboard Support** - Press Enter to search


## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom animations and responsive design
- **JavaScript (ES6)** - Async/await, Fetch API, DOM manipulation
- **Bootstrap 5** - Grid system, modal, and utilities
- **OMDb API** - Movie database
- **Google Fonts** - Bebas Neue & Archivo

## 📋 Prerequisites

Before you begin, you need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OMDb API key (free)

🚀 Demo
Live Demo : https://moviefinder-webapp.vercel.app/




## 📁 Project Structure

```
movie-search-app/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 💻 Usage

1. **Search for Movies**
   - Type a movie name in the search box
   - Click the "SEARCH" button or press Enter
   - Browse through the search results

2. **View Movie Details**
   - Click "VIEW DETAILS" on any movie card
   - A modal will display comprehensive movie information
   - Close the modal to return to search results

## 🎨 Customization

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a0e27;
    --accent-gold: #ffd700;
    --accent-cyan: #00f7ff;
    /* Add your custom colors */
}
```

### Modifying API Settings

Edit the API configuration in `script.js`:

```javascript
const API_KEY = 'your_api_key';
const API_BASE_URL = 'https://www.omdbapi.com/';
```

## 🌐 Deployment

### GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be published at `https://MujeeburRehmaan.github.io/movie-search-app/`


### Vercel

1. Create account on [Vercel](https://vercel.com/)
2. Click **New Project**
3. Import your GitHub repository
4. Click **Deploy**

## 🐛 Known Issues

- API rate limit: 1,000 requests per day on free tier
- Some older movies may not have posters available

## 🔮 Future Enhancements

- [ ] Add pagination for search results
- [ ] Implement movie categories/genres filter
- [ ] Add favorites/watchlist feature
- [ ] Include movie trailers
- [ ] Add sort options (year, rating, title)
- [ ] Dark/Light theme toggle
- [ ] Advanced search filters

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

Mujeeb ur Reman 

- GitHub: (https://github.com/MujeeburRehmaan)

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing the movie database
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Google Fonts](https://fonts.google.com/) for beautiful typography
- Font Awesome for icons (if used)

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact me directly.

---

⭐ If you found this project helpful, please give it a star!

Made with ❤️ and ☕# moviefinder-webapp
