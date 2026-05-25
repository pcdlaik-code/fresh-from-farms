# 😂 Random Joke Generator

A fun, interactive web application that generates random jokes using external APIs. Get a new joke with a single click and share your laughs with friends!

## Features

✨ **Random Joke Generation** - Fetches jokes from multiple APIs for variety
🔄 **Multiple API Support** - Uses three different joke APIs for reliability:
  - Official Joke API
  - JokeAPI
  - icanhazdadjoke

📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
🎨 **Beautiful UI** - Modern gradient design with smooth animations
📤 **Share Functionality** - Share jokes via Web Share API or copy to clipboard
⚡ **Fast Loading** - Quick API calls with loading indicators
🛡️ **Error Handling** - Graceful fallback if one API fails

## How to Use

1. **Clone or download** the repository
2. **Open `index.html`** in your web browser
3. **Click "Get Joke"** to generate a random joke
4. **Click "Share Joke"** to share it with friends or copy to clipboard

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Functionality with async/await
- **REST APIs** - Multiple external joke APIs

## API Endpoints

The application uses the following free joke APIs:

1. **Official Joke API**
   - URL: `https://official-joke-api.appspot.com/random_joke`
   - Format: JSON with setup and punchline

2. **JokeAPI**
   - URL: `https://v2.jokeapi.dev/joke/Any?type=single`
   - Format: JSON with single joke

3. **icanhazdadjoke**
   - URL: `https://icanhazdadjoke.com/?format=json`
   - Format: JSON with dad jokes

## File Structure

```
fresh-from-farms/
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # JavaScript logic
└── README.md       # This file
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features Explained

### Get Joke
Fetches a random joke from one of the available APIs. The app intelligently rotates through APIs to ensure variety and reliability.

### Share Joke
- On devices supporting Web Share API: Opens native share dialog
- Fallback: Copies joke text to clipboard for easy sharing

### Error Handling
If one API fails, the app automatically tries another. If all fail, a user-friendly error message is displayed.

## Customization

You can easily customize this project:

- **Change colors**: Modify the gradient colors in `style.css`
- **Add more APIs**: Add new API endpoints to the `APIs` array in `script.js`
- **Adjust animation speed**: Change timing values in `style.css`
- **Modify button text**: Edit the HTML in `index.html`

## Live Demo

Simply open `index.html` in your browser - no server setup required!

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to fork, modify, and improve this project. Happy coding! 🎉

## Fun Facts

- The app supports dad jokes, programming jokes, and general humor
- It handles both setup-punchline jokes and single-liner jokes
- The share feature uses native platform capabilities when available

Enjoy the laughs! 😂
