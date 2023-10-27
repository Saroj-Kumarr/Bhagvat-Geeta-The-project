import Header from "./Header";
import "./App.css";
import Footer from "./Footer";
import Body from "./Body";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
    <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
