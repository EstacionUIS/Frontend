import React from 'react';

import Header from './components/header';
import Contact from './components/header/contact';
import Information from './components/header/information';
import Body from './components/body';

function App() {
  return(
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Information />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
