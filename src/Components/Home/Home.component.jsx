import React from 'react';
import './home.styles.css';
import { ReactComponent as Logo } from "../../Pictures/logotipfullkoloralt.svg";
import { useTranslation } from 'react-i18next';
import background1 from "../../Pictures/IMG_20231014_134658.jpg";
import background2 from "../../Pictures/IMG_20231014_100657.jpg";

function Home() {
   const {t} = useTranslation();
  return (
  <div className="Page">
      <div className="Cov" style={{backgroundImage: `url(${background1})`,backgroundPosition: "center bottom", backgroundSize: "cover"}}>

      </div>   
      <div className= "Home-block">
        <Logo className="Gl-logo" />
        <h2 className="Heading" >{t("h značenje")}</h2>
        <p className= "Tekst">{t("p značenje")}</p>
        <h2 className="Heading">{t("h tamo")}</h2>
        <p className= "Tekst">{t("p tamo")}</p>
        <h2 className="Heading">{t("h we")}</h2>
        <p className= "Tekst">{t("p we")}</p>
        <div className="ulike-pod" style={{backgroundImage: `url(${background2})`,backgroundPosition: "center", backgroundSize: "cover"}}></div>
        <h2 className="Heading">{t("h tim")}</h2>
        <p className= "Tekst">{t("p tim")}
        </p>
        <h2 className="Heading">{t("h bud")}</h2>
        <p className= "Tekst">{t("p bud")}
        </p>
        <footer className="Foot">
            <div className="Foot-container">Copyright &copy; Štrika 2023</div>
        </footer>
      </div>
  </div> 
  );
}

export default Home;