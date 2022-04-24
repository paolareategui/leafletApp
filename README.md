# 🌱 leaflet App 🌱

Leaflet is a short-form journal app for plant parents developed
using React Native and Expo.

Leaflet allows the user to save journal entries about their
beloved plant babies. Each entry can record one image, a plant
category and up to 240 characters of text. Additionally, leaflet
users can edit and delete their entries. In order to use the app,
leaflet requires an account.

This is a project for COMP3130 Mobile Application Developement
at Macquarie University.

## ⚡ Notes for marker ⚡

### Optimisation

The app is optimised to run on iPhone 13 iOS 15.2

### Dependencies

The following dependencies were installed and used:

- @react-native-picker/picker: ^2.4.1,
- @react-navigation/bottom-tabs: ^6.3.1,
- @react-navigation/native: ^6.0.10,
- @react-navigation/native-stack: ^6.6.1,
- expo-image-picker: ~12.0.1,
- formik: ^2.2.9,
- lottie-ios: ^3.2.3,
- lottie-react-native: 5.0.1,
- react-native-safe-area-context: 3.3.2,
- react-native-screens: ~3.10.1,
- yup: ^0.32.11

### Test user accounts

- User 1: | username: carmen@mail.com | password: 1234
- User 2: | username: tc@mail.com | password: 4321

### Other

- A lottie animation will play for 2 seconds when launching the app. The
  user is taken to the registration screen immediately after.
- Entry images can be added by pressing on the camera icon.
- When updating an entry, the image can be changed by pressing on it.

## Features

- Create an account/login
- Add short-form journal entries
- Filter entries by category
- Edit past entries
- Delete entries
- Tab and stack navigation

## Run Locally

Clone the project

```bash
  git clone https://github.com/paolareategui/leafletApp.git
```

Go to the project directory

```bash
  cd leafletApp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Authors

- [@paolareategui](https://github.com/paolareategui)
