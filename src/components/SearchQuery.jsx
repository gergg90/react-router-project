import { useEffect } from "react";

function SearchQuery({ routeParams }) {
  useEffect(() => {
    document.title = routeParams.query;
  }, []);

  return (
    <>
      <h1>Search Query {routeParams.query}</h1>
    </>
  );
}

export default SearchQuery;
