import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Artist from "./Components/Artist";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={(routerProps) => <Home name="Luna Sarmiento" {...routerProps} />}
      />
      <Route
        path="/artist/:name"
        render={(routerProps) => <Artist {...routerProps} />}
      />
      <Route
        path="/search"
        exact
        render={(routerProps) => <Search {...routerProps} />}
      />
    </BrowserRouter>
  );
}

export default App;
