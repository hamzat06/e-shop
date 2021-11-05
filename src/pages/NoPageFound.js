import React from "react"
import { Link } from "react-router-dom"

export const NoPageFound = () => {
	return (
		<div className="uk-container uk-container-expanded" data-uk-height-viewport>
			<h1 className="uk-text-center uk-margin-large-top uk-text-danger">Ooops Page not found</h1>
			<p className="uk-text-center uk-h5"><Link to="/" className="uk-button uk-button-text uk-text-primary uk-text-bold">Go to Homepage</Link></p>
		</div>
	)
}