import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for restaurants"
        className="px-4 py-2 border border-gray-300 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
