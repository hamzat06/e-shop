import React from "react";

export const Login = () => {
	return (
		<div className="login">
			<div className="uk-container uk-padding uk-flex uk-flex-center" uk-grid>
				<div className="uk-width-1-2@s">
					<div className="uk-padding">
						<h2 className="uk-text-center uk-margin-large-bottom">Sign in to your dashboard</h2>
						<form className="uk-text-center">
							<div className="uk-margin">
								<input type="email" className="uk-input uk-form-width-large" placeholder="email"/>
							</div>
							<div className="uk-margin">
								<input type="password" className="uk-input uk-form-width-large" placeholder="password"/>
							</div>
							<button type="submit" className="uk-button uk-button-secondary">Log in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}