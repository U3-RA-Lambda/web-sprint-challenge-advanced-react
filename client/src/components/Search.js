import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

const Search = (props) => {
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // const [values, setValues] = useState(initialValue);
  
    // const handleChanges = (e) => {
    //   setValues({ ...values, [e.target.name]: e.target.value });
    // };
    const [values, handleChanges] = useForm(initialValue);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    useEffect(() => {
        const results = res.data.plantsData.name.filter(plant =>
          plant.toLowerCase().includes(SearchInput)
        );
        setSearchResults(results);
      }, [SearchInput]);
  
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