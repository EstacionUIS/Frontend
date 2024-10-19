import React from 'react';

import Header from './components/header';
import Body from './components/body'; // Import the Body component

function App() {
  // ...

  return (
    <div className="container-fluid">
      <Header />
      <Body /> {/* Render the Body component */}
    </div>
  );
}

export default App;
