import Banner from "../components/banner";
import banner from "../assets/banner-home.png";
import Card from "../components/card";
import accomodations from "../datas/data.json";

export default function Accueil() {
  return (
    <>
      <Banner image={banner} title="Chez vous, partout et ailleurs" />
      <section className="card-container">
        {accomodations.map((apart) => (
          <Card key={apart.id} data={apart} />
        ))}
      </section>
    </>
  );
}
