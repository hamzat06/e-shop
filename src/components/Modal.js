import React from "react";

export const Modal = ({product}) => {

	console.log(product, "product33")
	return (
		<div>
				<div id="modal-full" class="uk-modal-full uk-modal" data-uk-modal>
				    <div class="uk-modal-dialog" data-uk-height-viewport>
				        <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
				        <div className="uk-container uk-padding uk-flex uk-flex-center">
					        <div class="uk-width-2-3@s uk-margin-large-top">
					        	<h1 className="uk-text-center uk-text-bold">Product</h1>
					        	<form className="uk-margin-large uk-form-stacked uk-grid-small" data-uk-grid>
					        		<div class="uk-width-1-1">
					        				<label class="uk-form-label" for="form-stacked-text">Product Title</label>
									        <input class="uk-input" type="text" value={product?.title} placeholder="product name"/>
									    </div>
									    <div class="uk-width-1-2@s">
									    		<label class="uk-form-label" for="form-stacked-text">Price</label>
									        <input class="uk-input" type="text" placeholder="199"/>
									    </div>
									    <div class="uk-width-1-2@s">
									    	<label class="uk-form-label" for="form-stacked-text">Thumbnail [image/video]</label>
									    	<div uk-form-custom="target: true">
								            <input type="file"/>
								            <input class="uk-input uk-form-width-large" type="text" placeholder="Select file" disabled/>
								        </div>
									    </div>
									    <div class="uk-width-1-1">
									    		<label class="uk-form-label" for="form-stacked-text">Description</label>
									        <textarea className="uk-textarea" placeholder="Sumarized Description"></textarea>
									    </div>
									    <div class="uk-width-1-1">
									    		<label class="uk-form-label" for="form-stacked-text">Full Desciption</label>
									        <textarea className="uk-textarea" rows="5" placeholder="Full Description"></textarea>
									    </div>
									    <div className="uk-margin-top uk-text-center uk-width-1-1">
									    	<button type="submit" className="uk-button uk-button-secondary">Add Product</button>
									    </div>
					        	</form>
					        </div>
				        </div>
				    </div>
				</div>
		</div>
	)
}