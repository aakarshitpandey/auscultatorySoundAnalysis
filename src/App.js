import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grommet, Anchor, Footer, Text } from 'grommet';
import NavBar from './components/Navigation';
import Social from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './components/Register';
import Landing from './components/Landing';

const theme = {
  global: {
    colors: {
      "custom-dark": "#282c34"
    },
    font: {
      family: 'Raleway',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar />
          </header>
          <main>
            <Route exact path={`/`} component={Landing} />
            <Route exact path={`/registration`} component={Registration} />
          </main>
          <Social />
        </Router>
      </div>
    </Grommet>
  );
}

export default App;