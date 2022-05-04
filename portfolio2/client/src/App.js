import React from 'react';
import Put from './components/Put.js';
import Get from './components/Get.js';
// import Update from './components/Patch.js';
import Delete from './components/Delete.js';

function App() {
  return (
    <div className="App">

      <h1>Movies</h1>

      <Put />

      <Get />

      {/* <Update /> */}

      <Delete />
      
    </div>
  );
}

export default App;

