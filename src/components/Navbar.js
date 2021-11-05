import React from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
	return (
		<div className="uk-container uk-container-expand uk-box-shadow-small">
			<div className="uk-container uk-flex uk-flex-between">
				<Link to="/home" className="uk-navbar-item uk-logo uk-navbar-left uk-text-bold">
					E-Shop
				</Link>

				<ul className="uk-navbar-nav">
					<li>
						<Link to="/dashboard" className="uk-button uk-button-text uk-margin-small">Dashboard</Link>
					</li>
				</ul>

				<div class="uk-navbar-item">
					<Link to="/login" className="uk-button uk-button-secondary uk-margin-small">Log in</Link>
				</div>
			</div>
		</div>
	)
}

