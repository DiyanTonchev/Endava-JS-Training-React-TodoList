import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import TodoList from './components/Todo/TodoList';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route exact path='/' component={TodoList} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
