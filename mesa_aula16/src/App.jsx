import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
      <Outlet />
    </div>
  )
}

export default App;