
import {
    Route,Routes
  } from "react-router-dom";
import Datalist from "./Datalist";
import EditPost from "./editpost";

  
  
  
  
  function App() {
    return (
    <div>
    <Routes>
    <Route path="/" element=<Datalist/> />
    <Route path="/:id/edit" element=<EditPost/> />
    </Routes>
    </div>
    );
  }
  
  export default App;
  