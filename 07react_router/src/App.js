import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router className="App">
        <h1>React Router</h1>
        <Header />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="**" component={NotFound} />

      </Switch>
        <Footer />
    </Router>
  );
}

export default App;
