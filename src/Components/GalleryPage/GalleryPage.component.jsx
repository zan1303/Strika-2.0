// GalleryPage.js
import React from 'react';
import './GalleryPage.css'; // Add styles for your Gallery Page
import Gallery from '../Gallery/Gallery.component';
import { useTranslation } from 'react-i18next';

function GalleryPage() {
  const {t} = useTranslation();
  return (
    <div className="gallery-page">
      <h1 className="Gallery-header">{t("naslov galerija")}</h1>
      <Gallery />
      {/* Add more content if needed */}
    </div>
  );
}

export default GalleryPage;
