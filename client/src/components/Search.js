import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';

const Search = (props) => {
    const initialValues = {
       searchInput: ""
      };
    // const handleChanges = (e) => {
    //   setValues({ ...values, [e.target.name]: e.target.value });
    // };
    const [values, handleChanges] = useForm(initialValues);
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    useEffect(() => {

        const results = this.state.plants.name.filter(plants =>
          plants.toLowerCase().includes(values.searchInput.toLowerCase())
        );
        setSearchResults(results);
      }, [values.searchInput]);
  
    return (
      <div className="search-container">
        <button className="search-btn" onSubmit={handleSubmit}> Search </button>
            <input
              name="searchInput" 
              type="text" 
              placeholder="Search plant names here" className="search-text"
              value={values.searchInput}
              onChange={handleChanges} 
            />
            <ul>
                {searchResults.localeCompare(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
      </div>   
    )
};

export default Search;