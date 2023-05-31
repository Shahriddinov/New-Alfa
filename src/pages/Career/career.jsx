import "./career.scss";
import miniLogo from "../../assets/images/mini-light-logo.svg";
import miniBluefrom from "../../assets/images/mini-blue-logo.svg";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();
  return (
    <div className="career">
      <div className="container">
        <div className="career-hero">
          <div className="career-hero-wrapper">
            <img src={miniLogo} alt="error" />
            <h2 className="career-hero-title" >{t("header.carery")}</h2>
          </div>
        </div>

        <div className="career-main">
          <div className="career-main-title">
            <img src={miniBluefrom} alt="error" />
            <h1>{t("career.title")}</h1>
          </div>
          <div className="career-main-desc">
            <div className="career-main-desc-text">
              <p>{t("career.text")}</p>
            </div>
            <div className="career-main-desc-vacancies">
              <p>{t("career.vacancies")}</p>
              <a href="https://tashkent.hh.uz/employer/9252213">https://tashkent.hh.uz/employer/9252213</a>
            </div>
            <div className="career-main-desc-parmanent-vacancies">
              <p>{t("career.permanent_vacancies")}</p>
              <p>{t("career.requirment")}</p>
            </div>
            <div className="career-main-desc-texnogies">
              <div className="career-main-desc-texnogies-item">
                <div className="career-main-desc-texnogies-item-title">
                  <h4>01</h4>
                </div>
                <div className="career-main-desc-texnogies-item-desc">
                  <strong>{t("career.production")}</strong>
                  <p>{t("career.experience")}</p>
                </div>
              </div>
              <div className="career-main-desc-texnogies-item-border"></div>
              <div className="career-main-desc-texnogies-item">
                <div className="career-main-desc-texnogies-item-title">
                  <h4>02</h4>
                </div>
                <div className="career-main-desc-texnogies-item-desc">
                  <strong>{t("career.cook")}</strong>
                  <p>{t("career.type_of_food")}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career;
