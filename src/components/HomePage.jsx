import { useNavigation } from "../hooks/useNavigation";

function HomePage() {
  const { navigate } = useNavigation();

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")}>About</button>
    </>
  );
}

export default HomePage;
