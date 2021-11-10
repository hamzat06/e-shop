import React from "react";
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import UIkit from "uikit"

export const Navbar = (props) => {
	const history = useHistory()

	const handleLogout = () => {
		axios.delete("http://localhost3001/logout", { withCredentials: true }).then(res => {
			props.setLoggedIn(false)
	    props.setUser({})
	    history.replace("/login")
	    UIkit.notification({
			    message: '<span uk-icon=\'icon: check\'></span> Log out Successful',
			    status: 'success',
			    pos: 'top-right',
			    timeout: 3000
			});
		}).catch(err => {
			console.log("logout error", err)			
		})
  }
	return (
		<div className="uk-container uk-container-expand uk-box-shadow-small">
			<div className="uk-container uk-flex uk-flex-between">
				<Link to="/" className="uk-navbar-item uk-logo uk-navbar-left uk-text-bold">
					E-Shop
				</Link>

				{/* {
					props?.loggedIn ? (
						<ul className="uk-navbar-nav">
							<li>
								<Link to="/dashboard" className="uk-button uk-button-text uk-margin-small">Admin</Link>
							</li>
						</ul>
					):(
						<span></span>
					)
				} */}
				<ul className="uk-navbar-nav">
					<li>
						<Link to="/dashboard" className="uk-button uk-button-text uk-margin-small">Admin</Link>
					</li>
				</ul>
				

				<div class="uk-navbar-item">
					{ props.loggedIn ? (
							<a className="uk-button uk-button-danger uk-margin-small" onClick={() => {
								props.setLoggedIn(false)
						    props.setUser({})
						    history.replace("/")
							}}>Log out</a>
						):
						(
							<Link to="/login" className="uk-button uk-button-secondary uk-margin-small">Log in</Link>
						)
					}
				</div>
			</div>
		</div>
	)
}

