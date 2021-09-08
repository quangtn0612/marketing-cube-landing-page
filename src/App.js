import "./App.css";

import ContactForm from "./Components/ContactForm";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App container">
      <div id="head"></div>
      <NavBar />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
