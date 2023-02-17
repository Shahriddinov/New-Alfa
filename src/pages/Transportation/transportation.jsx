import { useTranslation } from "react-i18next";
import miniLogo from "../../assets/images/mini-light-logo.svg";
import miniBlueIcon from "../../assets/images/mini-blue-logo.svg";
import tracedVektor from "../../assets/images/traced-vektor.svg";
import "./transportation.scss";
import "../../assets/style/service.scss";
import { ServiceMiddleHero } from "../../components";
import PhotoGallery from "../../components/Layout/photoGallery/photoGallery";

const Transportation = () => {
  const { t } = useTranslation();

  return (
    <div className="transportation">
      <div className="transportation-top">
        <div className="container">
          <div className="transportation-top-wrapper">
            <div className="transportation-top-hero">
              <div className="transportation-top-hero-wrapper">
                <img src={miniLogo} alt="error" />
                <h2>{t("transportation.title")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-top">
            <div className="container">
              <div className="service-top-title">
                <h4>{t("transportation.title")}</h4>
                <p>{t("transportation.title_text")}</p>
              </div>
              <div className="service-top-products">
                <div className="service-top-products-title">
                  <h4>{t("transportation.top.product_title")}</h4>
                </div>
                <div className="service-top-products-wrapper">
                  <div className="service-top-products-item">
                    <img src={tracedVektor} alt="error" />
                    <p>{t("transportation.top.product_1")}</p>
                  </div>
                  <div className="service-top-products-item">
                    <img src={tracedVektor} alt="error" />
                    <p>{t("transportation.top.product_2")}</p>
                  </div>
                  <div className="service-top-products-item">
                    <img src={tracedVektor} alt="error" />
                    <p>{t("transportation.top.product_3")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServiceMiddleHero />
          <div className="service-bottom">
            <div className="container">
              <div className="service-bottom-title">
                <img src={miniBlueIcon} alt="error" />
                <h3>{t("service.bottom.title")}</h3>
              </div>
              <div className="service-bottom-products">
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("transportation.bottom.product_1")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("transportation.bottom.product_2")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("transportation.bottom.product_3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PhotoGallery/>
      </div>
    </div>
  )
}

export default Transportation