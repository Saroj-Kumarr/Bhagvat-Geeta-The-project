import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
