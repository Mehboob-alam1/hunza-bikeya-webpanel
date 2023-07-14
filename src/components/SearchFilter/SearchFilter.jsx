import React, { useState } from 'react';

const SearchFilter = ({ passengers, setFilteredPassengers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query); // Update the searchQuery state with the current input value
    const filteredPassengers = passengers.filter(
      passenger =>
        passenger.name.toLowerCase().includes(query) ||
        passenger.location.toLowerCase().includes(query)
    );
    setFilteredPassengers(filteredPassengers);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search passengers..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
