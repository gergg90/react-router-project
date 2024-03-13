import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { EVENTS } from "./consts";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
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
