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
					<h6 class="uk-h5 uk-text-bold">{props?.title}</h6>
				</div>	
			</Link>		
		</div>
	)
}