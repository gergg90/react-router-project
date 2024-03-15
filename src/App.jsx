import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Router from "./components/Router";
import Products from "./components/Products";
import Page404 from "./components/Page404";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/search/:query",
    component: () => {
      return <p>Search Query</p>;
    },
  },
];

function App() {
  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={Page404} />
      </main>
    </>
  );
}

export default App;
