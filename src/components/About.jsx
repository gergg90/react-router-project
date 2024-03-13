import { useNavigation } from "../hooks/useNavigation";

function About() {
  const { navigate } = useNavigation();

  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate("/")}>Home</button>

      <img
        src="https://storage.googleapis.com/pod_public/1300/177057.jpg"
        alt="imagencita"
      />
    </>
  );
}

export default About;
