## Installation

#### 1. Clone this repo
#### 2. Run per platform via Makefile
```
make run_ios
make run_android
```
## Debugging Tools

In development mode, the `Reactotron` modules has been added so you can use the desktop app for 
inspecting the React Native project.

I've attached to the console object in the ReactotronConfig.js file:
```
console.tron = Reactotron
```
Now, anywhere in your app if you want to log something?
```
console.tron.log('Sweet Freedom!')
```
## Initial Environment Setup (if you don't have react-native installed)

#### Step 0 — Install yarn and node.js
#### Step 1 — Install Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
#### Step 2 — Install Watchman
```
brew install watchman
```
#### Step 3 — Install React Native
```
yarn global add react-native-cli
```
#### Step 4 Android — Install Android Studio
You can install Android studio by following [this](https://developer.android.com/studio/install.html) link.

#### Step 5 IOS — Install XCode
You can install Xcode by following [this](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) link.

#### Step 6 — Create First App
```
cd Desktop
react-native init HelloWorld
```
#### Step 7 — Run React Native Packager
```
cd CryptoGraph
react-native start
```
#### Step 8 — Run the App on IOS simulator
```
react-native run-ios
```
#### Step 9 — Run the App on Android simulator
Make sure and Android emulator is running or device connected via USB.
```
react-native run-android
```
