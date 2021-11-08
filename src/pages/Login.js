import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import UIkit from "uikit";

export const Login = (props) => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loginErrors, setLoginErrors] = useState("")

  const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()

		axios.post("http://localhost:3001/sessions", {
			user: {
				email: email,
				password: password
			}
		},
		{ withCredentials: true })
		.then(res => {
			console.log("res from login", res)
			if (res?.data?.logged_in) {
				props.setHandleLogin(res?.data)
		    props.setUser(res?.data?.user)
		    history.replace("/dashboard")
		    UIkit.notification({
				    message: '<span uk-icon=\'icon: check\'></span> Login successful',
				    status: 'success',
				    pos: 'top-right',
				    timeout: 3000
				});
			}
		})
		.catch((err) => {
			console.log("Login Unsuccessful", err)
			UIkit.notification({
		    message: '<span uk-icon=\'icon: close\'></span> Error logging in',
		    status: 'danger',
		    pos: 'top-right',
		    timeout: 3000
			})
		})
	}

	return (
		<div className="login">
			<div className="uk-container uk-padding uk-flex uk-flex-center" uk-grid>
				<div className="uk-width-1-2@s">
					<div className="uk-padding">
						<h2 className="uk-text-center uk-margin-large-bottom">Sign in to your dashboard</h2>
						<form className="uk-text-center" onSubmit={handleSubmit}>
							<div className="uk-margin">
								<input type="email" className="uk-input uk-form-width-large" value={email} placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
							</div>
							<div className="uk-margin">
								<input type="password" className="uk-input uk-form-width-large" value={password} placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
							</div>
							<button type="submit" className="uk-button uk-button-secondary">Log in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}