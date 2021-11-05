import React from "react";
import { Link } from "react-router-dom"

export const ProductPage = ({match, history}) => {
	const {state} = history.location
	return (
		<div className="uk-container uk-container-expanded">
			<div className="uk-container uk-padding">
				<div className="uk-child-width-1-2@m uk-grid" uk-grid>
					<div>

						<Link to="/" className="uk-button uk-button-link uk-hidden@m uk-margin"><span data-uk-icon="chevron-left"></span>Back to products listing</Link>
						

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
							<Link to="/" className="uk-button uk-button-link uk-visible@m"><span data-uk-icon="chevron-left"></span>Back to products listing</Link>
							<hr className="uk-divider-icon uk-margin-small-top uk-visible@m"/>
							<div className="uk-margin">
								<h2 className="uk-text-bold">{state.title}</h2>
								<h3 className="uk-margin-remove-top uk-text-bold">$399</h3>
								<p className="uk-margin-remove-top">
									Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex eos suscipit esse commodi exercitationem neque expedita fugiat, fuga, repudiandae quam nostrum id magni inventore perspiciatis animi dolorem nam accusantium illum.
									Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex eos suscipit esse commodi exercitationem neque expedita fugiat, fuga, repudiandae quam nostrum id magni inventore perspiciatis animi dolorem nam accusantium illum.
								</p>
								<a className="uk-button uk-button-secondary">Add to cart</a>
							</div>
						</div>
					</div>
				</div>

				<div className="uk-margin-large-top">
					<ul data-uk-tab="connect: .productpagetab;">
				    <li className="uk-active"><a href="#">Description</a></li>
				    <li><a href="#">Additional Information</a></li>
				    <li><a href="#">Reviews(1)</a></li>
					</ul>

					<ul class="uk-switcher productpagetab uk-margin">
				    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex eos suscipit esse commodi exercitationem neque expedita fugiat, fuga, repudiandae quam nostrum id magni inventore perspiciatis animi dolorem nam accusantium illum.
				    <br/> <br/>
				    	Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex eos suscipit esse commodi exercitationem neque expedita fugiat, fuga, repudiandae quam nostrum id magni inventore perspiciatis animi dolorem nam accusantium illum.
				    	Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex eos suscipit esse commodi exercitationem neque expedita fugiat, fuga, repudiandae quam nostrum id magni inventore perspiciatis animi dolorem nam accusantium illum.
				    </li>
				    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
					</ul>
				</div>				
			</div>
		</div>
	)
}