import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Artist from "./Components/Artist";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={(routerProps) => <Home name="Luna" {...routerProps} />}
      />
      <Route
        path="/artist"
        render={(routerProps) => <Artist {...routerProps} />}
      />
    </BrowserRouter>
  );
}

export default App;
