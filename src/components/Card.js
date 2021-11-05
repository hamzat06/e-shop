import React from "react";

export const Card = (props) => {
	return (
		<div>
			<div className="uk-card uk-card-hover uk-margin-bottom uk-animation-fade">
				<img src={props.image} alt="" height="100px"/>
				<div className="uk-padding-small">
					<h6>{props.title}</h6>
					<h4 className="uk-text-bold uk-margin-remove-top">$3,000</h4>
				</div>	
			</div>		
		</div>
	)
}