import React from "react";
import Banner from "../components/banner";
import banner from "../assets/banner-home.png";
import Card from "../components/card";
import accomodations from "../datas/data.json";

const Accueil = () => {
  return (
    <>
      <Banner
        image={banner}
        title={
          <div className="banner-title">
            Chez vous,
            <br className="gotoline" /> partout et ailleurs
          </div>
        }
      />
      <section className="card-container">
        {accomodations.map((apart) => (
          <Card key={apart.id} data={apart} />
        ))}
      </section>
    </>
  );
};

export default Accueil;
