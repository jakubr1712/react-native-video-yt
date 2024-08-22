
# Video Search and Player App

This React Native project, built with TypeScript, allows users to search for YouTube videos and watch them directly within the app. The project leverages the YouTube API to fetch video data based on user queries and displays the results in a user-friendly interface.


## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:


2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:
   - Create a `.env` file in the root directory of the project.
   - Add your YouTube API key and base URL to the `.env` file:
     \`\`\`
     YOUTUBE_API_KEY=your_youtube_api_key
     YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3/search
     \`\`\`

4. **Run the app**:
   - For Android:
     \`\`\`
     npm run android
     \`\`\`
   - For iOS:
     \`\`\`
     npm run ios
     \`\`\`
   - For Web:
     \`\`\`
     npm run web
     \`\`\`


## Key Dependencies

- **React Native**: The core framework for building native mobile apps.
- **TypeScript**: Provides type safety and improved code quality.
- **Expo**: Streamlines the development process with React Native by handling many configurations and builds.
- **Axios**: For making HTTP requests to the YouTube API.
- **React Navigation**: For managing navigation and routing within the app.
- **React Native Video**: For handling video playback.



