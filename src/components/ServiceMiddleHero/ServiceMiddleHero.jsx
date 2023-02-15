import { useTranslation } from "react-i18next";
import "./ServiceMiddleHero.scss";
import Logo from "../../assets/images/footer-lightLogo.svg";

export default function ServiceMiddleHero() {
  const { t } = useTranslation();

  return (
    <div className='service-middle-hero'>
      <div className="service-middle-hero-dark">
        <div className="container">
          <div className="service-middle-hero-wrapper">
            <div className="service-middle-hero-logo">
              <img src={Logo} alt="error" />
            </div>
            <div className="service-middle-hero-title">
              <h3>{window.innerWidth < 681 ? t("service.middle_hero.title_mobile") : t("service.middle_hero.title")}</h3>
              <div className="service-middle-hero-title-border"></div>
              <p>{window.innerWidth < 681 ? t("service.middle_hero.desc_mobile") : t("service.middle_hero.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
