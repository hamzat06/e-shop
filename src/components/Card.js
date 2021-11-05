import React from "react";
import { Link } from "react-router-dom"

export const Card = (props) => {
	return (
		<div>
			<Link to={{
				pathname: "/product/" + props.id,
				state: props
			}} className="uk-text-decoration-none uk-card uk-card-hover uk-margin-bottom uk-animation-fade">
				<img src={props?.image} alt="" height="100px"/>
				<div className="uk-padding-small">
					<h6>{props?.title}</h6>
					<h4 className="uk-text-bold uk-margin-remove-top">$3,000</h4>
				</div>	
			</Link>		
		</div>
	)
}