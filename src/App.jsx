import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Router from "./components/Router";
import Products from "./components/Products";
import Page404 from "./components/Page404";
import SearchQuery from "./components/SearchQuery";
import Route from "./components/Route";

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
    component: SearchQuery,
  },
];

function App() {
  return (
    <main>
      <Router defaultComponent={Page404}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/search/:query" component={SearchQuery} />
      </Router>
    </main>
  );
}

export default App;
