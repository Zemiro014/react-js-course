import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <h2>Let's get started!</h2>
        <Route path='/welcome' >
          <Welcome />
        </Route>
        <Route path='/products' >
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
