import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import  Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Not-found" component={NotFound} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
