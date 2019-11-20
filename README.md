# What is a Router?
A router gives you the ability to swicth between "pages" on a website where the code basically runs from a single page. I.e a React app. More often than not, you will need some form of menu or "subpages" - this is where React Router comes to the rescue. This is a very basic exmple of how to use the React Router package. 

To play up a basic example, let´s create an app from the terminal using create-react-app:

````Javascript
npx create-react-app react-router
````

In order for this to work, you will need a newer installation of node.js. I wont go in detail with that here, but if the command doesn´t work for you, search the web for "node.js npx" and follow the steps. 

When the scripts are done, you will have a fresh React app in the folder you ran the script. Open this folder in vs code - open up the terminal from here, and install the React Router library:


````javascript 
npm install react-router-dom --save
````

Now head in to the App.js file in the ./src folder of the project, and code a very basic router structure. First we will need to import a whole lot of modules from the Router package:

````javascript
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'
````

We will get back to these functions when we see them in action. We have to observe however, that it does feel a little tedious that we need all these instances in order to do something that comes ever so basic out of a standard html project. Yup. 

Basically, what we want our app to do, is to deliver different content from three components - like a webpage with three sections. Also we will need some form of menu - we will do the menu in a component we call Header. 

To make it quick,we can start off by defining these functions directly in the main App. Go somewhere outside the App function code and set up three components:

````javascript
const Home = () => {
  return(
    <h2>Home</h2>
  )
}
const About = () => {
  return(
    <h2>About</h2>
  )
}
const Profile = () => {
  return(
    <h2>Profile</h2>
  )
}
````
Obviously these components are dull, but they symbolize sections in a real world application.

The Header function uses a bit of logic from the Router package, namely something called "Link". To return a menu with three clickable links, we do it this way:

````javascript
const Header = () => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/profile'>Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
````
You may be wondering why we don´t just use usual HTML anchors? Well, they tend to reload the page, and we don´t need that. Remark that the "to=" property asctually creates a new path in your app. If you make a misspelling or a name that you don´t use later on after the slash, your Router wont be able to match the link. 

Also notice the activeClassName property - at least we are given a little something for free this way: NavLink automatically adds a class='is-active' to the active link. Check index.css to see it adressed.  

In the main App function, we now want to Route these menu items to the subcomponents. We do that by using the Switch module from Router, in this way:

````javascript  
const App = () => {
  return (
    <Router>
      <Header />
      <main>
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>      
      </Router>
    )
}
````
As you can see the whole App returns a < Router >. The Router includes the < Header > as well as a < Switch > with three < Route > components inside. The way this works, is that the Router will look for the first < NavLink > that matches it´s "path" and then return the component inside.

Try it out! 
 
<a href="https://simmoe.github.io/react-router">Watch a demo here</a>

------

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
