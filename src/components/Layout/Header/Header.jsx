import { useEffect, useState } from "react";
import "../../../assets/style/header.scss";
import { useTranslation } from 'react-i18next';
import headerDesktopLogo from '../../../assets/images/desktop-headerLogo.svg';
import headerMobileLogo from '../../../assets/images/mobile-headerLogo.svg';
import headerMobileVector from '../../../assets/images/headerMobileVector.svg';
import { Link, NavLink } from "react-router-dom";
import { BiGlobe } from 'react-icons/bi';
import { BsTelegram } from 'react-icons/bs';
import { useLocation } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus, AiFillInstagram } from 'react-icons/ai';

const Header = () => {
	const [isactiveLangBar, setisactiveLangBar] = useState(false);
	const [activeServicesBar, setactiveServicesBar] = useState(false);
	const [isactiveNavBar, setisactiveNavBar] = useState(false);

	const { pathname } = useLocation();
	const { t, i18n } = useTranslation();


	const changeWebsiteLang = (e) => {
		i18n.changeLanguage(e || "ru");
	}

	useEffect(() => {
		setisactiveNavBar(false)
	}, [pathname])

	useEffect(() => {
		isactiveNavBar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
	}, [isactiveNavBar])

	return (
		<header className="header" style={activeServicesBar ? { "overflow": "hidden" } : null}>
			<div className={pathname === "/" ? "header-wrapper" : "header-wrapper header-DarkColor"}>
				<div className="container">
					<div className="header-top">
						<div className="header-img">
							<Link className="header-img-wrapper" to="/">
								{
									pathname === "/" ? <img className="header-img-desktop" src={headerDesktopLogo} alt="" /> : <img className="header-img-desktop" src={headerMobileLogo} alt="" />
								}
								<img className="header-img-mobile" src={headerMobileLogo} alt="" />
							</Link>
						</div>

						<nav className={"header-nav"}>
							<div className="header-nav-list" style={isactiveNavBar ? { "display": "flex" } : null}>
								<div className="header-nav-list-services"
									onClick={() => setactiveServicesBar((e) => e ? false : true)}
									style={activeServicesBar ? { "height": "auto" } : null}>
									<div>
										<b style={activeServicesBar ? { "color": "#28C79E" } : null}>{t("header.services")}</b>
										{
											activeServicesBar ? <AiOutlineMinus className="header-nav-list-services-icon" /> : <AiOutlinePlus className="header-nav-list-services-icon" />
										}
									</div>
									<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/enginering">{t("header.enginering")}</NavLink>
									<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/services">{t("header.service")}</NavLink>
									<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/corporate-catering">{t("header.corporate")}</NavLink>
									<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/transportation">{t("header.transportation")}</NavLink>
								</div>
								<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/aboutus">{t("header.about_company")}</NavLink>
								<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/career">{t("header.carery")}</NavLink>
								<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/shopping">{t("header.shopping")}</NavLink>
								<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/cooperation">{t("header.cooperation")}</NavLink>
								<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/contacts">{t("header.contact")}</NavLink>
								<div className="header-nav-list-services-bottom">
									<div className="header-nav-list-services-bottom-title"><span>{t("header.follow")}</span></div>
									<div className="header-nav-list-services-bottom-links">
										<a href="https://web.telegram.org/z/"><BsTelegram className="header-nav-list-services-bottom-links-icon" /></a>
										<a href="https://www.instagram.com/?hl=en"><AiFillInstagram className="header-nav-list-services-bottom-links-icon" /></a>
										<a href="https://ru-ru.facebook.com/"><FaFacebook className="header-nav-list-services-bottom-links-icon" /></a>
									</div>
								</div>
								<img src={headerMobileVector} className="header-nav-list-vektor" alt="error" />
							</div>
							<div className="header-nav-lang">
								<div className="header-nav-lang-icon" onClick={() => setisactiveLangBar((e) => e ? false : true)}>
									<BiGlobe />
									<div className="header-nav-lang-icon-bar" style={isactiveLangBar ? { "display": "flex" } : null}>
										<span
											onClick={() => changeWebsiteLang("ru")}
											style={window.localStorage.getItem('lang') === "ru" ? { "color": "#FFFFFF" } : null}>Ru</span>
										<span
											onClick={() => changeWebsiteLang("uz")}
											style={window.localStorage.getItem('lang') === "uz" ? { "color": "#FFFFFF" } : null}>Uz</span>
									</div>
								</div>
								<div className="header-nav-lang-wrapper">
									<span
										onClick={() => changeWebsiteLang("ru")}
										style={window.localStorage.getItem('lang') === "ru" ? { "color": "#989CA2" } : null}>Ru</span>
									<div style={pathname === "/" ? { "background": "#FFFFFF" } : { "background": "black" }}></div>
									<span
										onClick={() => changeWebsiteLang("uz")}
										style={window.localStorage.getItem('lang') === "uz" ? { "color": "#989CA2" } : null}>Uz</span>
								</div>
							</div>
							<div className="header-navBar-button" onClick={() => setisactiveNavBar((e) => e ? false : true)}>
								{
									isactiveNavBar ? <RiCloseFill className="header-navBar-button-icon" /> : <RiMenu3Fill className="header-navBar-button-icon" />
								}
							</div>
						</nav>
					</div>
				</div>
				<div className="header-border" style={pathname === "/" ? { "backgroundColor": "#FFFFFF" } : { "backgroundColor": "#F0F0F0" }}></div>
				<div className="container">
					<nav className="header-bottom">
						<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/enginering">{t("header.enginering")}</NavLink>
						<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/service">{t("header.service")}</NavLink>
						<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/corporate-catering">{t("header.corporate")}</NavLink>
						<NavLink style={({ isActive }) => isActive ? { "color": "#28C79E" } : null} to="/transportation">{t("header.transportation")}</NavLink>
					</nav>
				</div>
				<div className="header-border" style={pathname === "/" ? { "backgroundColor": "#FFFFFF" } : { "backgroundColor": "#F0F0F0" }}></div>
			</div>
		</header>
	);
};

export default Header;
