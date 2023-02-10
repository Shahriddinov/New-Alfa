import React from "react";
import useNetwork from "./useNetwork";
import WifiIcon from "./wifiIcon";
import "./style.scss";

const NetworkError = () => {
	const isOnline = useNetwork();

	return (
		<div className={`no-connection ${isOnline ? "" : "--visible"}`}>
			<div className="no-connection__overlay" />
			<div className="no-connection__content">
				
				<div className="no-connection__icon">
					<WifiIcon />
				</div>
			</div>
		</div>
	);
};

export default NetworkError;
