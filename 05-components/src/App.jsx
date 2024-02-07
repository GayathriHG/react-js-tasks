import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <HomePage/>
      <CardPage/> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
