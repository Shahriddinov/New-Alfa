import miniLogo from "../../assets/images/mini-light-logo.svg";
import { useTranslation } from "react-i18next";
import miniBlueIcon from "../../assets/images/mini-blue-logo.svg";
import formImg from "../../assets/images/cooperation-form-img.svg";
import tracedVektor from "../../assets/images/traced-vektor.svg";
import "./cooperation.scss";
import "./cooperation.scss";
import axios from "axios";

const Cooperation = () => {
  const { t } = useTranslation();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const { full_name, tell_number } = e.target;
      const data = {
        "service_id": 0,
        "full_name": full_name.value,
        "phone": tell_number.value
      };
      const res = await axios.post("https://alfabest.napaautomotive.uz/api/service_consumer", data);
      if (res?.data?.status === true) {
        alert("Succes!");
        full_name.value = "";
        tell_number.value = "";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-hero">
          <div className="main-hero-wrapper">
            <img src={miniLogo} alt="error" />
            <h2>{t("header.cooperation")}</h2>
          </div>
        </div>
        <div className="main-desc">
          <p>{t("cooperation.desc")}</p>
        </div>
        <div className="main-outsourcing">
          <div className="main-outsourcing-title">
            <img src={miniBlueIcon} alt="error" />
            <h2>{t("cooperation.outsourcing.text")}</h2>
          </div>
          <div className="main-outsourcing-list">
            <div className="main-outsourcing-list-item">
              <img src={tracedVektor} alt="error" />
              <p>{t("cooperation.outsourcing.1")}</p>
            </div>
            <div className="main-outsourcing-list-item">
              <img src={tracedVektor} alt="error" />
              <p>{t("cooperation.outsourcing.2")}</p>
            </div>
            <div className="main-outsourcing-list-item">
              <img src={tracedVektor} alt="error" />
              <p>{t("cooperation.outsourcing.3")}</p>
            </div>
            <div className="main-outsourcing-list-item">
              <img src={tracedVektor} alt="error" />
              <p>{t("cooperation.outsourcing.4")}</p>
            </div>
          </div>
        </div>
        <div className="main-forming">
          <form action="" className="main-forming-form" onSubmit={onSubmit}>
            <label htmlFor="" className="main-forming-form-item" >
              <span>{t("cooperation.form.service")}</span>
              <select placeholder="Корпоративное питание" name="" id="" className="main-forming-form-item-select">
                <option value="">Корпоративное питание</option>
              </select>
            </label>
            <label htmlFor="" className="main-forming-form-item">
              <span>{t("cooperation.form.full_name")}</span>
              <input name="full_name" placeholder={t("cooperation.form.name")} type="text" required maxLength={50} minLength={3} />
            </label>
            <label htmlFor="" className="main-forming-form-item">
              <span>{t("cooperation.form.tell")}</span>
              <input name="tell_number" required pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" type="tel" maxLength={50} minLength={3} placeholder="+998" />
            </label>
            <button className="main-forming-btn" type="submit">{t("send")}</button>
          </form>
          <img className="main-forming-img" src={formImg} alt="error" />
        </div>
      </div>
    </div>
  )
}

export default Cooperation;