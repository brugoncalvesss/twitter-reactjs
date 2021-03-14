import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <div className="app">
        <h1>Twitter ReactJs</h1>
        <Sidebar />

        <Feed />

        <Widgets />
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
