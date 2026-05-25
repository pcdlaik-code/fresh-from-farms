const jokeText = document.getElementById('jokeText');
const getJokeBtn = document.getElementById('getJokeBtn');
const shareBtn = document.getElementById('shareBtn');
const spinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');

// API endpoints (multiple APIs for better reliability)
const APIs = [
    {
        name: 'Official Joke API',
        url: 'https://official-joke-api.appspot.com/random_joke',
        parser: (data) => `${data.setup} ${data.punchline}`
    },
    {
        name: 'JokeAPI',
        url: 'https://v2.jokeapi.dev/joke/Any?type=single',
        parser: (data) => data.joke
    },
    {
        name: 'icanhazdadjoke',
        url: 'https://icanhazdadjoke.com/?format=json',
        parser: (data) => data.joke
    }
];

let currentJoke = '';

// Event listeners
getJokeBtn.addEventListener('click', fetchJoke);
shareBtn.addEventListener('click', shareJoke);

// Fetch joke from API
async function fetchJoke() {
    getJokeBtn.disabled = true;
    shareBtn.disabled = true;
    spinner.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    jokeText.textContent = 'Loading...';

    try {
        const joke = await getRandomJoke();
        currentJoke = joke;
        jokeText.textContent = joke;
        animateJoke();
    } catch (error) {
        console.error('Error fetching joke:', error);
        showError('Failed to load a joke. Please try again!');
        jokeText.textContent = '😅 Oops! Something went wrong.';
    } finally {
        getJokeBtn.disabled = false;
        shareBtn.disabled = false;
        spinner.classList.add('hidden');
    }
}

// Get random joke from one of the APIs
async function getRandomJoke() {
    const shuffledAPIs = APIs.sort(() => Math.random() - 0.5);

    for (const api of shuffledAPIs) {
        try {
            const response = await fetch(api.url);
            if (!response.ok) throw new Error('API request failed');
            const data = await response.json();
            const joke = api.parser(data);
            return joke;
        } catch (error) {
            console.warn(`Failed to fetch from ${api.name}:`, error);
            continue;
        }
    }

    throw new Error('All joke APIs failed');
}

// Animate joke appearance
function animateJoke() {
    jokeText.style.animation = 'none';
    setTimeout(() => {
        jokeText.style.animation = 'slideIn 0.5s ease-out';
    }, 10);
}

// Share joke
function shareJoke() {
    if (!currentJoke) {
        showError('No joke to share. Get one first!');
        return;
    }

    const text = `😂 Check out this joke: "${currentJoke}"`;

    // Try to use Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'Random Joke',
            text: text
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            showSuccess('Joke copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showError('Failed to share joke');
        });
    }
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000);
}

// Show success message
function showSuccess(message) {
    const originalText = errorMessage.textContent;
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    errorMessage.style.background = '#d4edda';
    errorMessage.style.color = '#155724';
    errorMessage.style.borderColor = '#c3e6cb';

    setTimeout(() => {
        errorMessage.classList.add('hidden');
        errorMessage.style.background = '#f8d7da';
        errorMessage.style.color = '#dc3545';
        errorMessage.style.borderColor = '#f5c6cb';
    }, 3000);
}

// Load a joke on page load
window.addEventListener('load', () => {
    jokeText.textContent = 'Ready to laugh? Click the button!';
});
