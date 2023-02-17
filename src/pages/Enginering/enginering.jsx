import { useTranslation } from "react-i18next";
import miniLogo from "../../assets/images/mini-light-logo.svg";
import product_item_img1 from "../../assets/images/enginering-product-img1.svg";
import product_item_img2 from "../../assets/images/enginering-product-img2.svg";
import product_item_img3 from "../../assets/images/enginering-product-img3.svg";
import product_item_img4 from "../../assets/images/enginering-product-img4.svg";
import product_item_img5 from "../../assets/images/enginering-product-img5.svg";
import product_item_img6 from "../../assets/images/enginering-product-img6.svg";
import Vector from '../../assets/images/contacts-address-vector.svg';
import miniBlueIcon from "../../assets/images/mini-blue-logo.svg";
import tracedVektor from "../../assets/images/traced-vektor.svg";
import "./enginering.scss";
import "../../assets/style/service.scss";
import { ServiceMiddleHero } from "../../components";
import PhotoGallery from "../../components/Layout/photoGallery/photoGallery";

const Enginering = () => {
  const { t } = useTranslation();

  return (
    <div className="enginering">
      <div className="enginering-top">
        <div className="container">
          <div className="enginering-top-wrapper">
            <div className="enginering-top-hero">
              <div className="enginering-top-hero-wrapper">
                <img src={miniLogo} alt="error" />
                <h2>{t("header.enginering")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-top">
            <div className="container">
              <div className="service-top-title">
                <h4>{t("header.enginering")}</h4>
                <p>{t("service.text")}</p>
              </div>
              <div className="service-top-products">
                <img src={Vector} alt="error" className="service-top-products-vektor" />
                <div className="service-top-products-item">
                  <img src={product_item_img1} alt="error" />
                  <p>{t("enginering.top.product_1")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img2} alt="error" />
                  <p>{t("enginering.top.product_2")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img3} alt="error" />
                  <p>{t("enginering.top.product_3")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img4} alt="error" />
                  <p>{t("enginering.top.product_4")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img5} alt="error" />
                  <p>{t("enginering.top.product_5")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img6} alt="error" />
                  <p>{t("enginering.top.product_6")}</p>
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
                  <p>{t("enginering.bottom.product_1")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_2")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_3")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_4")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_5")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_6")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_7")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_8")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("enginering.bottom.product_9")}</p>
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

export default Enginering