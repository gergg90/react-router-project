import Link from "../Link.jsx";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </>
  );
}

export default HomePage;
