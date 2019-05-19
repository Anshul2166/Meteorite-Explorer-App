import React from "react";

export const SearchBox=props=>{
    return(
        <div className="search-box">
            <input type="text" onChange={props.changeSearchTerm} value={props.searchTerm} />
            <button onClick={props.executeSearch}>Search</button>
        </div>
    );
}