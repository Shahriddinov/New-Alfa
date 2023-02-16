import { useTranslation } from "react-i18next";
import miniLogo from "../../assets/images/mini-light-logo.svg";
import product_item_img1 from "../../assets/images/service-product-img1.svg";
import product_item_img2 from "../../assets/images/service-product-img2.svg";
import product_item_img3 from "../../assets/images/service-product-img3.svg";
import product_item_img4 from "../../assets/images/service-product-img4.svg";
import product_item_img5 from "../../assets/images/service-product-img5.svg";
import product_item_img6 from "../../assets/images/service-product-img6.svg";
import product_item_img7 from "../../assets/images/service-product-img7.svg";
import product_item_img8 from "../../assets/images/service-product-img8.svg";
import product_item_img9 from "../../assets/images/service-product-img9.svg";
import product_item_img10 from "../../assets/images/service-product-img10.svg";
import product_item_img11 from "../../assets/images/service-product-img11.svg";
import Vector from '../../assets/images/contacts-address-vector.svg';
import miniBlueIcon from "../../assets/images/mini-blue-logo.svg";
import tracedVektor from "../../assets/images/traced-vektor.svg";
import "./service.scss";
import "../../assets/style/service.scss";
import { ServiceMiddleHero } from "../../components";

const Service = () => {
  const { t } = useTranslation();

  return (
    <div className="servicePage">
      <div className="servicePage-top">
        <div className="container">
          <div className="servicePage-top-wrapper">
            <div className="servicePage-top-hero">
              <div className="servicePage-top-hero-wrapper">
                <img src={miniLogo} alt="error" />
                <h2>{t("header.service")}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-top">
            <div className="container">
              <div className="service-top-title">
                <h4>{t("header.service")}</h4>
                <p>{t("service.text")}</p>
              </div>
              <div className="service-top-products">
                <img src={Vector} alt="error" className="service-top-products-vektor" />
                <div className="service-top-products-item">
                  <img src={product_item_img1} alt="error" />
                  <p>{t("servicePage.top.product_1")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img2} alt="error" />
                  <p>{t("servicePage.top.product_2")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img3} alt="error" />
                  <p>{t("servicePage.top.product_3")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img4} alt="error" />
                  <p>{t("servicePage.top.product_4")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img5} alt="error" />
                  <p>{t("servicePage.top.product_5")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img6} alt="error" />
                  <p>{t("servicePage.top.product_6")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img7} alt="error" />
                  <p>{t("servicePage.top.product_7")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img8} alt="error" />
                  <p>{t("servicePage.top.product_8")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img9} alt="error" />
                  <p>{t("servicePage.top.product_9")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img10} alt="error" />
                  <p>{t("servicePage.top.product_10")}</p>
                </div>
                <div className="service-top-products-item">
                  <img src={product_item_img11} alt="error" />
                  <p>{t("servicePage.top.product_11")}</p>
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
                  <p>{t("servicePage.bottom.product_1")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("servicePage.bottom.product_2")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("servicePage.bottom.product_3")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("servicePage.bottom.product_4")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("servicePage.bottom.product_5")}</p>
                </div>
                <div className="service-bottom-products-item">
                  <img src={tracedVektor} alt="error" />
                  <p>{t("servicePage.bottom.product_6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service