import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
