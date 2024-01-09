import Banner from "../components/banner.jsx";
import Collapse from "../components/collapse.jsx";
import banner from "../assets/banner-about.png";
import aboutData from "../datas/aproposdata.json";

export default function About() {
  return (
    <>
      <Banner image={banner} />
      <main className="about">
        {aboutData.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            description={collapse.description}
          />
        ))}
      </main>
    </>
  );
}
