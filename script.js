// ============================
// API CONFIGURATION
// ============================

const API_KEY = '333b4073'; // OMDb API key
const API_BASE_URL = 'https://www.omdbapi.com/';
const FALLBACK_IMAGE = 'https://via.placeholder.com/300x450/1a1f3a/ffd700?text=No+Poster+Available';

// ============================
// DOM ELEMENTS
// ============================

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const moviesContainer = document.getElementById('moviesContainer');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
const modalBody = document.getElementById('modalBody');

// ============================
// EVENT LISTENERS
// ============================

searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// ============================
// MAIN FUNCTIONS
// ============================

/**
 * Handle search button click
 */
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('Please enter a movie name to search');
        return;
    }
    
    searchMovies(query);
}

/**
 * Search for movies using OMDb API
 * @param {string} query - Search query
 */
async function searchMovies(query) {
    hideError();
    showLoading();
    clearMovies();
    
    try {
        const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        hideLoading();
        
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            showError(`No movies found for "${query}". Please try a different search term.`);
        }
        
    } catch (error) {
        hideLoading();
        showError('An error occurred while fetching movies. Please check your internet connection and try again.');
        console.error('Search error:', error);
    }
}

/**
 * Display movies in grid
 * @param {Array} movies - Array of movie objects
 */
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    
    movies.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    });
}

/**
 * Create a movie card element
 * @param {Object} movie - Movie object
 * @returns {HTMLElement} Movie card element
 */
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : FALLBACK_IMAGE;
    
    card.innerHTML = `
        <img src="${posterUrl}" alt="${movie.Title}" class="movie-poster" onerror="this.src='${FALLBACK_IMAGE}'">
        <div class="movie-info">
            <h3 class="movie-title">${movie.Title}</h3>
            <p class="movie-year">📅 ${movie.Year}</p>
            <button class="btn btn-details" onclick="getMovieDetails('${movie.imdbID}')">
                VIEW DETAILS
            </button>
        </div>
    `;
    
    return card;
}

/**
 * Fetch and display movie details
 * @param {string} imdbID - IMDb ID of the movie
 */
async function getMovieDetails(imdbID) {
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const movie = await response.json();
        
        hideLoading();
        
        if (movie.Response === 'True') {
            displayMovieDetails(movie);
            movieModal.show();
        } else {
            showError('Unable to fetch movie details. Please try again.');
        }
        
    } catch (error) {
        hideLoading();
        showError('An error occurred while fetching movie details. Please try again.');
        console.error('Details error:', error);
    }
}

/**
 * Display movie details in modal
 * @param {Object} movie - Detailed movie object
 */
function displayMovieDetails(movie) {
    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : FALLBACK_IMAGE;
    const genre = movie.Genre !== 'N/A' ? movie.Genre : 'Not available';
    const director = movie.Director !== 'N/A' ? movie.Director : 'Not available';
    const actors = movie.Actors !== 'N/A' ? movie.Actors : 'Not available';
    const plot = movie.Plot !== 'N/A' ? movie.Plot : 'No plot available';
    const imdbRating = movie.imdbRating !== 'N/A' ? movie.imdbRating : 'N/A';
    const runtime = movie.Runtime !== 'N/A' ? movie.Runtime : 'Unknown';
    const rated = movie.Rated !== 'N/A' ? movie.Rated : 'Not Rated';
    const released = movie.Released !== 'N/A' ? movie.Released : 'Unknown';
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4 text-center mb-4">
                <img src="${posterUrl}" alt="${movie.Title}" class="modal-poster" onerror="this.src='${FALLBACK_IMAGE}'">
            </div>
            <div class="col-md-8 modal-info">
                <h3>${movie.Title}</h3>
                
                <div class="info-label">Year</div>
                <div class="info-value">${movie.Year}</div>
                
                <div class="info-label">Genre</div>
                <div class="info-value">${genre}</div>
                
                <div class="info-label">Director</div>
                <div class="info-value">${director}</div>
                
                <div class="info-label">Cast</div>
                <div class="info-value">${actors}</div>
                
                <div class="info-label">Runtime</div>
                <div class="info-value">${runtime}</div>
                
                <div class="info-label">Rated</div>
                <div class="info-value">${rated}</div>
                
                <div class="info-label">Released</div>
                <div class="info-value">${released}</div>
                
                <div class="info-label">IMDb Rating</div>
                <div>
                    <span class="imdb-rating">⭐ ${imdbRating}/10</span>
                </div>
                
                <div class="info-label">Plot</div>
                <div class="info-value plot-text">${plot}</div>
            </div>
        </div>
    `;
}

/**
 * Show loading spinner
 */
function showLoading() {
    loadingSpinner.classList.remove('d-none');
}

/**
 * Hide loading spinner
 */
function hideLoading() {
    loadingSpinner.classList.add('d-none');
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('d-none');
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.add('d-none');
}

/**
 * Clear movies container
 */
function clearMovies() {
    moviesContainer.innerHTML = '';
}

// ============================
// INITIALIZATION
// ============================

// Optional: Search for a default movie on page load
// searchMovies('Inception');