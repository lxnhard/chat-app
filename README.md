# Chat App
A chat app for mobile devices using React Native. The app provides users with a chat interface and options to share images and their location. The app is based on React Native, Expo, and Google Firestore Database. 

## Table of contents

- [Key Features](#key-features)
- [Built with](#built-with)
- [Setup instructions](#setup-instructions)
- [What I learned](#what-i-learned)


<img  src="./screenshot.png" width="600" /> 

## Key Features
- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat provides users with two additional communication features: sending images and location data.
- Data gets stored online and offline.
- Anonymous authentication via Google Firebase.

## Built with

- React Native
- React Native asyncStorage API
- Expo
- Google Firebase
- Gifted Chat

## Setup instructions 

### Prerequisites: Expo

- Install [Expo](https://expo.io/): `npm install expo-cli`

- Install Expo app on your mobile device or use an emulator

### Installation

- Install dependencies: `npm i`

- Start the chat app via: `npm start`

- Launch app on physical device: scan QR code in Expo GUI

- Launch app on emulator: Press "Run on Android device/emulator in Expo GUI

### Data storage (Firestore)

- Sign in at [Google Firebase/Firestore](https://firebase.google.com/) 
- Go to console, start in test mode
- Settings/General/Your apps => Click "Firestore for Web" and copy the contents of the `config` object.
- In app file Components/Chat.js, replace Firebase config data with the copied credentials

> Chat.js
>
> ```javascript
> firebase.initializeApp({
>   apiKey: 'your-api-key',
>   authDomain: 'your-authdomain',
>   databaseURL: 'your-database-url',
>   projectId: 'your-project-id',
>   storageBucket: 'your-storage-bucket',
>   messagingSenderId: 'your-messaging-sender-id',
>   appId: 'your-app-id',
> });
> ```

## What I learned

- Principles for programming an android app with React Native and Expo
- Mobile UI design principles
- Using Google Firestore as data storage for real-time applications
- Client-side storage with React Native’s asyncStorage API
- Using device communication features (camera, location)
- Storing media files in Google Cloud Storage