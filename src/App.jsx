// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Woods from "./routes/Woods/pages";
import Home from "./routes/Home";
import Header from "./components/compound/Header";
import Footer from "./components/compound/Footer";
import CMS from "./routes/cms";
import Login from "./routes/login";
import SplashScreen from "./components/compound/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/woods" element={<Woods />} />
        {/* <Route path="/about" element={<Aboutus />} /> */}
          <Route path="/cms" element={<CMS />} />
            <Route path="login" element={<Login />} />
      </Routes>
      <hr />
      <Footer />


    </>
  );
}


export default App;