import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { DIP } from "./principles/DIP";
import { LSP } from "./principles/LSP";
import { OCP } from "./principles/OCP";
import { SRP } from "./principles/SRP";
import { ISP } from "./principles/ISP";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/srp">SRP</Link>
        </li>
        <li>
          <Link to="/ocp">OCP</Link>
        </li>
        <li>
          <Link to="/lsp">LSP</Link>
        </li>
        <li>
          <Link to="/isp">ISP</Link>
        </li>
        <li>
          <Link to="/dip">DIP</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Home</h1>
            <Navbar />
          </>
        }
      />
      <Route
        path="/srp"
        element={
          <>
            <h1>Single Responsiblity</h1>
            <Navbar />
            <SRP />
          </>
        }
      />
      <Route
        path="/ocp"
        element={
          <>
            <h1>Open Closed</h1>
            <Navbar />
            <OCP />
          </>
        }
      />
      <Route
        path="/lsp"
        element={
          <>
            <h1>Liskov Substitution</h1>
            <Navbar />
            <LSP />
          </>
        }
      />
      <Route
        path="/isp"
        element={
          <>
            <h1>Interface Segregation</h1>
            <Navbar />
            <ISP />
          </>
        }
      />
      <Route
        path="/dip"
        element={
          <>
            <h1>Dependency Inversion</h1>
            <Navbar />
            <DIP />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <h1>Not found</h1>
            <Link to="/">Go back home</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
