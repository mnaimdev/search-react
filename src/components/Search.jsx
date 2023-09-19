import React, { useEffect, useState } from 'react';

const Search = ({data, onSearch}) => {

    const [search, setSearch] = useState("");
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
       onSearch(search);
    }, [search]);

  return (
    <>
      <input type="search" name='search' placeholder="Search Here" onChange={handleSearch} value={search} />
      {
        data.map((item) => {
            return <li key={item.id}>{item.name}</li>
        })
      }
    </>
  )
}

export default Search;