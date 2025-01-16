# True Sheet and New Architecture Issue

This repository demonstrates a layout issue encountered when using [react-native-true-sheet](https://github.com/lodev09/react-native-true-sheet) in an Expo project with the New Architecture enabled.

## Getting Started

1. **Install dependencies**  
   Run the following command to install the required packages:

   ```bash
   npm install
   ```

1. **Start the app**
Launch the app on iOS with:

   ```bash
   npx expo run:ios
   ```

## The Issue

When navigating to a screen in a React Navigation stack that uses TrueSheet components:

* The layout renders correctly on the first visit.
* However, after navigating back and revisiting the screen, the layout begins to break.
* This degradation worsens with each subsequent navigation to the screen.
