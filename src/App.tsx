import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Twitter ReactJs</h1>

      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
