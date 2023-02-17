import { useTranslation } from "react-i18next";
import miniLogo from "../../assets/images/mini-light-logo.svg";
import product_item_img1 from "../../assets/images/corporate-product-img1.svg";
import product_item_img2 from "../../assets/images/corporate-product-img2.svg";
import product_item_img3 from "../../assets/images/corporate-product-img3.svg";
import product_item_img4 from "../../assets/images/corporate-product-img4.svg";
import product_item_img5 from "../../assets/images/corporate-product-img5.svg";
import Vector from '../../assets/images/contacts-address-vector.svg';
import miniBlueIcon from "../../assets/images/mini-blue-logo.svg";
import tracedVektor from "../../assets/images/traced-vektor.svg";
import "./corporate.scss";
import "../../assets/style/service.scss";
import { ServiceMiddleHero } from "../../components";
import PhotoGallery from '../../components/Layout/photoGallery/photoGallery';

const Corporate = () => {
  const { t } = useTranslation();

  return (
    <div className="corporatePage">
      <div className="corporatePage-top">
        <div className="container">
          <div className="corporatePage-top-wrapper">
            <div className="corporatePage-top-hero">
              <div className="corporatePage-top-hero-wrapper">
                <img src={miniLogo} alt="error" />
                <h2>{t("header.corporate")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-top">
            <div className="container">
              <div className="service-top-title">
                <h4>{t("header.corporate")}</h4>
                <p>{t("corporatePage.title_text")}</p>
              </div>
              <div className="service-top-products">
                <img src={Vector} alt="error" className="service-top-products-vektor" />
                <div className="service-top-products-item">
                  <img src={product_item_img1} alt="error" />
                  <p>{t("corporatePage.top.product_1")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img2} alt="error" />
                  <p>{t("corporatePage.top.product_2")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img3} alt="error" />
                  <p>{t("corporatePage.top.product_3")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img4} alt="error" />
                  <p>{t("corporatePage.top.product_4")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img5} alt="error" />
                  <p>{t("corporatePage.top.product_5")}</p>
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
                  <p>{t("corporatePage.bottom.product_1")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_2")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_3")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_4")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_5")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_6")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("corporatePage.bottom.product_7")}</p>
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

export default Corporate