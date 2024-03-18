import { useEffect } from "react";

function ProductsQuery({ routeParams }) {
  useEffect(() => {
    document.title = routeParams.query;
  }, []);

  return (
    <>
      <h1>Products Number Query: {routeParams.query}</h1>
    </>
  );
}

export default ProductsQuery;
