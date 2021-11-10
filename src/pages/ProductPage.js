import React from "react";
import { Link } from "react-router-dom"

export const ProductPage = ({match, history}) => {
	const {state} = history.location
	return (
		<div className="uk-container uk-container-expanded">
			<div className="uk-container uk-padding">
				<div className="uk-child-width-1-2@m uk-grid" uk-grid>
					<div>

						<Link to="/" className="uk-button uk-button-link uk-hidden@m uk-margin"><span data-uk-icon="chevron-left"></span>Back to activities listing</Link>
						

						<div class="uk-position-relative" uk-slideshow="animation: fade">

						    <ul class="uk-slideshow-items">
						        <li>
						            <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" uk-cover/>
						        </li>
						        <li>
						            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" uk-cover/>
						        </li>
						        <li>
						            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" uk-cover/>
						        </li>
						    </ul>

						    <div class="uk-margin-small-top">
						        <ul class="uk-thumbnav uk-flex-center">
						            <li uk-slideshow-item="0"><a href="#"><img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" width="100" alt=""/></a></li>
						            <li uk-slideshow-item="1"><a href="#"><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" width="100" alt=""/></a></li>
						            <li uk-slideshow-item="2"><a href="#"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" width="100" alt=""/></a></li>
						        </ul>
						    </div>

						</div>

					</div>
					<div>
						<div>
							<Link to="/" className="uk-button uk-button-link uk-visible@m"><span data-uk-icon="chevron-left"></span>Back to activities listing</Link>
							<hr className="uk-divider-icon uk-margin-small-top uk-visible@m"/>
							<div className="uk-margin">
								<h3 className="uk-text-bold">{state.title}</h3>
								<p className="uk-margin-remove-top"><span className="uk-text-bold">Activity Number - </span>11225679801</p>
								<p className="uk-margin-remove-top"><span className="uk-text-bold">Date of Capture - </span>01/05/2021</p>
								<p className="uk-margin-remove-top"><span className="uk-text-bold">Activity Type - </span>Expert Cleaning</p>
								<p className="uk-margin-remove-top"><span className="uk-text-bold">Knowledge criticality code -</span> SC</p>
								
							</div>
						</div>
					</div>
				</div>

				<div className="uk-margin-large-top">
					<div>
						<h3 className="uk-h2 uk-text-bold">More Information</h3>
						<div className="uk-child-width-1-2@s uk-grid" uk-grid>
							<div>
								<p><span className="uk-text-bold">Frequency Value - </span>3</p>
								<p><span className="uk-text-bold">ORI Value - </span>5</p>
								<p><span className="uk-text-bold">IHSE Value - </span>3</p>
								<p><span className="uk-text-bold">Frequency Value - </span>2</p>
								<p><span className="uk-text-bold">MC Value - </span>6</p>
							</div>
							<div>
								<p><span className="uk-text-bold">Source of Labour - </span>Combination</p>
								<p><span className="uk-text-bold">Number of Labour - </span>4 to 9</p>
								<p><span className="uk-text-bold">Duration of Technical Work - </span> 0.1 {"<"} 22.9</p>
								<p><span className="uk-text-bold">Hierarchy of Specialized Labour </span>Supervisor and Site level Coodrinators</p>
								<p><span className="uk-text-bold">Discipline Requirements - </span>MoOST's Coordinator</p>
							</div>
						</div>
					</div>
				</div>				
			</div>
		</div>
	)
}