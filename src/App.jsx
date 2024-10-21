import React from 'react';

//import Header from './Components/header';
import Body from './Components/body'; // Import the Body component

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Body /> {/* Render the Body component */}

      {/* Blue decorative Bar */}
      <div className="bg-primary py-3 mt-4"></div>
    </div>
  );
}

export default App;
