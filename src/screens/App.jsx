import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import './App.scss';
import cover from '../assets/images/cover.jpg';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={cover} alt='cover' className='cover' />
        <div className='form'>
          <h1 className='form__title'>Let’s find your ideal car</h1>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
