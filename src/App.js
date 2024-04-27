import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Layout from "./Components/Layouts";
import "./App.css";

function App(){
  return (
    <>
      <div className="header-nav d-flex justify-content-center">
        <div className="containers">
          <Navbar />
        </div>
      </div>
      <Layout />
      <Footer />
    </>
  );
}
export default App;
