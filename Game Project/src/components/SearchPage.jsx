import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function SearchPage() {
  const {
    data: games,
    loading,
    error,
  } = useFetchData({
    fetcher: getGames,
    initialData: [],
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (searchTerm) => {
    // Aici puteți adăuga codul pentru a efectua căutarea efectivă
    // și pentru a actualiza starea cu rezultatele
    setSearchResults([
      { id: `${games.id}`, name: `${games.title}` },
      { id: `${games.id}`, name: `${games.title}` },
      { id: `${games.id}`, name: `${games.title}` },
    ]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default SearchPage;
