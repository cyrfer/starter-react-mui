# Starter
Save time by re-using boiler plate, rather than re-writing it.

## TODO:
- follow steps in MUI that shows how to reduce the bundle size
- debounce for serializing state to localstorage
- css bug: checkout quantity control should hug right edge of itemized rows.
- js bug: checkout quantity controls should add and remove items without error.
- manage account details when clicking on profile icon

## Quick Run

```bash
# Download
## via ssh
git clone git@github.com:cyrfer/starter-react-mui.git your-app-name
## or via https
https://github.com/cyrfer/starter-react-mui.git your-app-name

# Install dependencies
cd your-app-name && npm install

# Run local server
npm start
```

<p>
<img src="./docs/home-signup.png" alt="home page signup" width="200"/>
<img src="./docs/signup.png" alt="sign up" width="200"/>
<img src="./docs/home-dashboard.png" alt="home page dashboard" width="200"/>
<img src="./docs/drawer.png" alt="drawer" width="200"/>
<img src="./docs/home-signin.png" alt="home page signin" width="200"/>
<img src="./docs/signin.png" alt="signin" width="200"/>
</p>

Adds to CRA:
- react router, for nav
- material ui, for styles
- deepdown, simplify working with nested objects


## Recipe To create yourself

Grab dependencies:
- `npm i -S @material-ui/core @material-ui/icons typeface-roboto react-router-dom`
- `npm i -S deepdown`

Make components:
- Home (page)
- Layout
- Header
- SideMenu
- State
- Modify `App` comonent to use Router, Layout, and ThemeProvider

<hr/>

## Credits...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
