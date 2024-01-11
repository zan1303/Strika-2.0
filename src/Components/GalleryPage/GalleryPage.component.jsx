
import React from 'react';
import './GalleryPage.css'; 
import Gallery from '../Gallery/Gallery.component';
import { useTranslation } from 'react-i18next';

function GalleryPage() {
  const {t} = useTranslation();
  return (
    <div className="gallery-page">
      <h1 className="Gallery-header">{t("naslov galerija")}</h1>
      <Gallery />
    </div>
  );
}

export default GalleryPage;
