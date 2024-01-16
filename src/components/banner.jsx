import React, { useState, useEffect } from "react";
import "../styles/banner.css";

const Banner = ({ image, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const splitTitle = (title) => {
    const words = title.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word, index) => {
      const proposedLine = currentLine + (currentLine ? " " : "") + word;

      if (proposedLine.length <= 15) {
        currentLine = proposedLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }

      if (index === words.length - 1) {
        lines.push(currentLine);
      }
    });

    if (lines.length > 2) {
      const firstLine = lines.slice(0, 2).join(" ");
      const secondLine = lines.slice(2).join(" ");
      return [firstLine, secondLine];
    }

    return lines;
  };

  return (
    <div className={`banner_container ${isMobile ? "mobile" : ""}`}>
      <img className="banner-img" src={image} alt="banner" />
      <h1 className="banner-title">
        {isMobile
          ? splitTitle(title).map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < splitTitle(title).length - 1 && <br />}
              </React.Fragment>
            ))
          : title}
      </h1>
    </div>
  );
};

export default Banner;
