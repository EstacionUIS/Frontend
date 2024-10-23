import React from "react";

import Station from "./Home/station";
import Explanation from "./Home/explanation";
import Facts from "./Home/facts";

function Home() {
  return (
    <div className="container"> {/* Add a container for better structure */}
      <div className="row"> {/* Use Bootstrap's grid system */}
        <div className="col-md-12 text-center"> {/* Center content horizontally */}
          <Station />
        </div>
        <div className="col-md-12 text-center my-4"> {/* Add vertical margin */}
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
