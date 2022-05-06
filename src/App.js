import React from "react";
import Form from "./Component/Form";
import Edetails from "./Component/Edetails";
import routing from "./routing";
import Project from "./Component/Project";
import Expdetail from "./Component/Expdetail";
import Extradetail from "./Component/Extradetail";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {routing}
    </div>
  );
}

export default App;
