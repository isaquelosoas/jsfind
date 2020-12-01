import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Routes from './routes.js';
import Main from './pages/main';

class App extends React.Component{
  render(){
    return (<div><Routes /></div>);
  }
}

export default App;
