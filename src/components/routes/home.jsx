import React from "react";

import Station from "./Home/station";
import Explanation from "./Home/explanation";
import Facts from "./Home/facts";

function Home() {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-12 text-center"> 
          <Station />
        </div>
        <div className="col-md-12 text-center my-4"> 
          <Explanation />
        </div>
        <div className="col-md-12 text-center">
          <Facts />
        </div>
      </div>
    </div>
  );
}

export default Home;
