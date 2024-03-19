import "./App.css";
import { Suspense } from "react";
import { lazy } from "react";
import { Route } from "./components/Route.jsx";
import { Router } from "./components/Router.jsx";

const LazyHomePage = lazy(() => import("./pages/HomePage.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazyProductsPage = lazy(() => import("./pages/Products.jsx"));
const LazySearchQueryPage = lazy(() => import("./pages/ProductsQuery.jsx"));
const Lazy404Page = lazy(() => import("./pages/Page404.jsx"));

function App() {
  return (
    <main>
      <Suspense fallback="Cargandoooo...">
        <Router defaultComponent={Lazy404Page}>
          <Route path="/" component={LazyHomePage} />
          <Route path="/about" component={LazyAboutPage} />
          <Route path="/:lang/about" component={LazyAboutPage} />
          <Route path="/products" component={LazyProductsPage} />
          <Route path="/products/:query" component={LazySearchQueryPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
