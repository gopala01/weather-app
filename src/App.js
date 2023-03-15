import React, {UseState} from "react";
import InformationCard from "./Card";
import TextField from "@mui/material/TextField";
import List from "./Components/List"


 
 


function App() {
  return (
    <div className="App">

      <div class="header">
          <h1>Location</h1>
      </div>

      return (
      <div className="searchBar">
        <h1>React Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <List />
      </div>
    );


      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="searchBar">
        const
      </div>
      <div>
      <InformationCard className = "locationCards"
        title="Location 1"
        description="Weather for location is."
        imageUrl="https://example.com/image1.jpg"
      />
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div>
      <InformationCard className = "locationCards"
        title="Location 2"
        description="Weather for location is."
        imageUrl="https://example.com/image1.jpg"
      />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div>
      <InformationCard className = "locationCards"
        title="Location 3"
        description="Weather for location is."
        imageUrl="https://example.com/image1.jpg"
      />
      </div>

      
    </div>
  );
}

export default App;
