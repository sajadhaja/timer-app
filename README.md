# React Timer App

This web application, built using React, offers the following functionalities:

- Upon initial load, the screen displays a centrally positioned "Start timer" button.
- Upon clicking the button, a countdown of 10 seconds initiates.
- The button transforms into a countdown display, indicating the remaining seconds which decrement every second until reaching 0.
- Hovering over the countdown display suspends the countdown, providing feedback to the user by showing "Paused...".
- Clicking on the countdown display stops the timer, returning the application to its initial state with the "Start timer" button.

## Demo

#### Using Mouse
https://github.com/sajadhaja/timer-app/assets/29910473/048204a6-e0a6-4af3-8b5a-42ed74e6fa08


####  Using Keyboard
https://github.com/sajadhaja/timer-app/assets/29910473/b3faed9f-b268-4ea8-9014-4351227bc2e3

## Accessibility Features
#### How is it accessible?
- The buttons and timer display container are accessible via keyboard navigation (use the 'Tab' key to focus and 'Enter' to click).
- Once the timer has started, screen readers can read the timer value.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
