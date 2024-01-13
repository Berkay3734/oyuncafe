import React from "react";
import Store from "./Store";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="politika">
        <p>Gizlilik Politikası</p>
        <p>Kullanım Şartları</p>
      </div>
      <div className="sirket">
        <p>2024 Oyun Cafe Tüm Hakları Saklıdır.</p>
      </div>
      <div className="store">
        <Store name={"App Store"} />
        <Store name={"Google Play"} />
      </div>
    </div>
  );
};

export default Footer;
