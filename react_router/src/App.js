import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Route path='/welcome' >
        <Welcome />
      </Route>
      <Route path='/products' >
        <Products />
      </Route>
    </div>
  );
}

export default App;
