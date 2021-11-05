import React from "react";

export const Footer = () => {
	function getYear() {
  	return new Date().getFullYear();
  }
	return (
		<footer className="uk-container uk-container-expanded uk-padding uk-text-center uk-text-bold">
			<p>Copyright &copy; {getYear()} E-Shop</p>
		</footer>
	)
}