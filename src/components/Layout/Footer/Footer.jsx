import "../../../assets/style/footer.scss";
import footerDesktopLogo from "../../../assets/images/footer-darkLogo.svg";
import footerMobileLogo from "../../../assets/images/footer-lightLogo.svg";
import napa from "../../../assets/images/napa.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';



const Footer = () => {
  const [activeServicesBar, setactiveServicesBar] = useState(false);

  const { t } = useTranslation();
  return (
    <footer className="footer section-gap">
      <div className="container">
        <div className="footer-main">
          <div className="footer-main-logo">
            <img className="footer-main-logo-desktop" src={footerDesktopLogo} alt="error" />
            <img className="footer-main-logo-mobile" src={footerMobileLogo} alt="error" />
          </div>
          <div className="footer-main-links-wrapper">
            <nav className="footer-main-links-main-list">
              <div className="footer-main-services"
                onClick={() => setactiveServicesBar((e) => e ? false : true)}
                style={activeServicesBar ? { "height": "auto" } : null}>
                <div>
                  <b>{t("header.services")}</b>
                  <div className="footer-main-services-icon-wrapper">
                    {activeServicesBar ? <AiOutlineMinus className="footer-main-services-icon" /> : <AiOutlinePlus className="footer-main-services-icon" />}
                  </div>
                </div>
                <Link to="/enginering">{t("header.enginering")}</Link>
                <Link to="/services">{t("header.service")}</Link>
                <Link to="/corporate">{t("header.corporate")}</Link>
                <Link to="/transportation">{t("header.transportation")}</Link>
              </div>
              <Link to="/aboutus">{t("header.about_company")}</Link>
              <Link to="/carery">{t("header.carery")}</Link>
              <Link to="/shopping">{t("header.shopping")}</Link>
              <Link to="/partners">{t("footer.partners")}</Link>
              <Link to="/cooperation">{t("header.cooperation")}</Link>
              <Link to="/contact">{t("header.contact")}</Link>
            </nav>
            <nav className="footer-main-links-secondary-list">
              <Link to="/enginering">{t("header.enginering")}</Link>
              <Link to="/service">{t("header.service")}</Link>
              <Link to="/corparete">{t("header.corporate")}</Link>
              <Link to="/transportation">{t("header.transportation")}</Link>
            </nav>
          </div>
          <div className="footer-services">
            <div className="footer-services-title"><span>{t("header.follow")}</span></div>
            <div className="footer-services-links-list">
              <a href="https://web.telegram.org/z/"><BsTelegram className="footer-services-links-list-icon" /></a>
              <a href="https://www.instagram.com/?hl=en"><RiInstagramFill className="footer-services-links-list-icon" /></a>
              <a href="https://ru-ru.facebook.com/"><BsFacebook className="footer-services-links-list-icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer-border"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-developed">
            <img src={napa} alt="error" />
          </div>
          <div className="footer-bottom-help">
            <Link to="#">{t("footer.helper")}</Link>
            <Link to="#">{t("footer.part_of_team")}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
