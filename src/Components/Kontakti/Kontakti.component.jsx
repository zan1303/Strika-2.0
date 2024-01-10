import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Kontakti.styles.css"
import { ReactComponent as Logo } from "../../Pictures/logotipfullkoloralt.svg";
function Kontakti() {
const {t} = useTranslation ();

  return (
    <div className= "Kontakti">
        <Logo className="Gl-logo-kont" />
        <div className="content">
          <h2>{t("za više info")}</h2>
          <p>{t("z mob")}</p>
          <p>{t("a mob")}</p>
          <p>{t("z e")}</p>
          <p>{t("a e")}</p>
        </div>
                  
        
        <p>{t("info app")}</p><br></br>
        <div className='buttons'>
        <a className="Ampelea" href="https://ampelea-apartment-rovinj.business.site">Ampelea</a>
        <a className="Lemme" href="https://villa-lemme.business.site/?fbclid=PAAaZxsoLNWolGnl9koOr0ThPPxva0kCsLGSHIYGPmf2ZUluM_yg8CRuqvzM8">Villa Lemme</a>
        </div>
    </div>
  );
}

export default Kontakti;