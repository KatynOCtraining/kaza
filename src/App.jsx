import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Apartement from "./pages/Appartement";
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
          <Route path="/apartment/:id" element={<Apartement />} />
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
