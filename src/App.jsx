import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { useNavigation } from "./hooks/useNavigation";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { NAVIGATION_EVENT } = useNavigation();

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <>
      <main>
        {currentPath === "/" && <HomePage />}
        {currentPath === "/about" && <About />}
      </main>
    </>
  );
}

export default App;
