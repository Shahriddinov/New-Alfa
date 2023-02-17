import "./contacts.scss";
import Vector from '../../assets/images/contacts-address-vector.svg';
import closeVector from '../../assets/images/contacts_popup_closeIcon.svg';
import popupImg from '../../assets/images/contacts_popup_Img.svg';
import backImg from '../../assets/images/contacts-img.jpg';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [activePopUp, setactivePopUp] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    activePopUp ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  }, [activePopUp]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const { full_name, tell_number } = e.target;
      const data = {
        "full_name": full_name.value,
        "phone": tell_number.value
      };
      const res = await axios.post("https://alfabest.napaautomotive.uz/api/contact", data);
      if (res?.data?.status === true) {
        full_name.value = "";
        tell_number.value = "";
        return setactivePopUp(true);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="main-contacts">
            <div className="main-contacts-title">
              <h1>{t("header.contact")}</h1>
              <p>{t("contacts.text1")}</p>
              <p>{t("contacts.text2")}</p>
            </div>
            <form action="" className="main-contacts-form"
              onSubmit={onSubmit}>
              <label htmlFor="" className="main-contacts-form-item">
                <span>{t("cooperation.form.full_name")}</span>
                <input required name="full_name" type="text" placeholder={t("cooperation.form.name")} maxLength={100} minLength={3} />
              </label>
              <label htmlFor="" className="main-contacts-form-item">
                <span>{t("cooperation.form.tell")}</span>
                <input name="tell_number" required pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" type="tel" maxLength={50} minLength={3} placeholder="+998" />
              </label>
              <button className="main-contacts-form-btn">{t("send")}</button>
            </form>
            <div className="main-contacts-address">
              <img src={Vector} alt="error" className="main-contacts-address-backImg" />
              <div className="main-contacts-address-item">
                <span>{t("telephone")}</span>
                <div className="main-contacts-address-item-numbers-list">
                  <a href="tel:+998 99 002 22 23">+998 99 002 22 23</a>
                  <a href="tel:+998 93 222 12 32">+998 93 222 12 32</a>
                </div>
              </div>
              <div className="main-contacts-address-item">
                <span>{t("address")}</span>
                <p>{t("address_text")}</p>
              </div>
            </div>
          </div>
          <img src={backImg} alt="" className="main-background" />
        </div>
      </div>
      {
        activePopUp ?
          <>
            <div className="overlay" onClick={() => setactivePopUp(false)}></div>
            <div className="popup">
              <div className="popup_closeIcon" onClick={() => setactivePopUp(false)}><img src={closeVector} alt="error" /></div>
              <div className="popup_top">
                <div className="popup_top_title">
                  <strong className="popup_top_title_text">{t("contacts.popup.title")}</strong>
                  <strong className="popup_top_title_desc">{t("contacts.popup.desc")}</strong>
                </div>
              </div>
              <img className="popup_img" src={popupImg} alt="error" />
            </div>
          </>
          : null
      }
    </div>
  )
}

export default Contacts;
