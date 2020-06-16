import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

const Search = (props) => {
    
    // const handleChanges = (e) => {
    //   setValues({ ...values, [e.target.name]: e.target.value });
    // };
    const [handleChanges] = useForm(initialValue);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    useEffect(() => {
        const results = res.data.plantsData.name.filter(plant =>
          plant.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
      }, [searchInput]);
  
    return (
      <div className="search-container">
        <button className="search-btn" onSubmit={handleSubmit}> Search </button>
            <input
              name="searchInput" 
              type="text" 
              placeholder="Search plant names here" className="search-text"
              value={searchInput}
              onChange={handleChanges} 
            />
            <ul>
                {searchResults.localeCompare(item => (
                    <li>{item}</li>
                ))}
            </ul>
      </div>   
    )
};
  
  export default Search;