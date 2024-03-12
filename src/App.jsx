import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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
