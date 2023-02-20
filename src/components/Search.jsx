import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Pokemon"
        role="searchbox"
      />
    </form>
  );
};

export default Search;
