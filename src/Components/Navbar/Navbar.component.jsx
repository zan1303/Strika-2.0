import React, { useState, useEffect, useRef, Fragment } from 'react';
import './navbar.styles.css';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import navbarBackground from "../../Pictures/znakkoloralt.svg";


function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  /*const handleGalleryClick = () => {
    navigate('/Gallery', { replace: true });
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/Home');
    setIsOpen(false);
  };

  const handleKontaktiClick = () => {
    navigate('/Kontakti');
    setIsOpen(false);
  };
*/
  const toggleNavi = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeNavbarOnPageClick = () => {
      if (isOpen && navbarRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeNavbarOnPageClick);

    return () => {
      document.removeEventListener('click', closeNavbarOnPageClick);
    };
  }, [isOpen]);

  const { t } = useTranslation();

  return (
    <Fragment>
      <button id="toggleButton" onClick={(e) => toggleNavi(e)}>
        <img className="Logo-navi" src={navbarBackground} alt="Logo"></img>
      </button>
      <div className={`Navi ${isOpen ? 'open' : ''}`} ref={navbarRef}>
        <ul id="navbarLinks">
          <Link to='/home'>{t("home butt")}</Link>
          <Link to='/gallery'>{t("gal butt")}</Link>
          <Link to='/kontakti'>{t("kont butt")}</Link>
        </ul>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navi;
