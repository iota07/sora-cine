import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3200/series");

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();

        if (
          Array.isArray(data) &&
          data.every((item) => item.name && item.popularity)
        ) {
          setAllData(data);
          setDataFetched(true);
        } else {
          throw new Error("Invalid data structure");
        }
      } catch (error) {
        setError(error.message);
        setDataFetched(false);
      }
    };

    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      // Filter the data based on the search term
      const filteredData = allData.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      // Sort the filtered data by popularity
      const sortedData = filteredData.sort(
        (a, b) => b.popularity - a.popularity
      );

      // Limit the results to a maximum of 5
      const limitedResults = sortedData.slice(
        0,
        Math.min(5, sortedData.length)
      );

      // Set the filtered results
      setResults(limitedResults);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [searchTerm, allData]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search series..."
        className="search-input text-sm text-black focus:outline-none px-1"
      />

      {error && <p className="error-message">Error: {error}</p>}

      {showResults && (
        <div className="results-container absolute bg-gradient-to-b from-gray-900 p-5 text-white rounded-2xl">
          {results.map((result) => (
            <div key={result.id} className="result-item flex">
              <img
                src={result.poster_path}
                alt={result.name}
                className={`result-image pb-3 ${dataFetched ? "w-16" : ""}`}
              />
              <div className="search-detail flex flex-col">
                <p className="text-xl font-bold ml-2">{result.name}</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="pl-2 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <p className="pl-2">{result.vote_average}</p>
                </div>
                <p className="pl-2">popularity: {result.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
