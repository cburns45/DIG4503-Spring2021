/**
App component
Should not have default content
Should import and use Search component
 */
import './App.css';
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
