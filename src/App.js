import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  NavLink
} from 'react-router-dom'




const App = () => {
  return (
    <Router>
      <Header />
      <main>
      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/react-router/">
            <Home />
          </Route>
          <Route path="/react-router/about">
            <About />
          </Route>
          <Route path="/react-router/profile">
            <Profile />
          </Route>
        </Switch>
        </main>      
      </Router>
    )
}

export default App;

const Header = () => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/react-router/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/react-router/about'>About</NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName='is-active' to='/react-router/profile'>Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

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