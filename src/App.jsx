import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Appartement from "./pages/Appartement";
import Erreur from "./pages/Erreur";
import Accueil from "./pages/Accueil";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/appartement" element={<Appartement />} />
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
