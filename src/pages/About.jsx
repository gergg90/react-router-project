import Link from "../Link.jsx";

console.log("Hello DESDE ABOUT");

function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

      <img
        src="https://storage.googleapis.com/pod_public/1300/177057.jpg"
        alt="imagencita"
      />
    </>
  );
}

export default About;
