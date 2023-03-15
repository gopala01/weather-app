import React from "react";
import { useState } from "react";

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    
    const cities = [
     { name: "London", country: "UK" },
     { name: "Hyderabad", country: "India" },
     { name: "Brighton", country: "UK" },
    ];
   
   const handleChange = (e) => {
     e.preventDefault();
     setSearchInput(e.target.value);
   };
   
   if (searchInput.length > 0) {
       cities.filter((city) => {
       return city.name.match(searchInput);
   });
   }
   
   return <div>
   
   <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
   
   <table>
   
   {cities.map((city, index) => {
   
   <div>
     <tr>
       <td>{city.name}</td>
       <td>{city.country}</td>
     </tr>
   </div>
   
   })}
   </table>
   
   </div>
   
   
};

export default SearchBar;