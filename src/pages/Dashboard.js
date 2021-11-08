import React, { useState } from "react"
import UIkit from "uikit"
import { Modal } from "../components/Modal"


export const Dashboard = ({products}) => {
	const [selectedIndex, setSelectedIndex] = useState({})
	const [secondForm, setSecondForm] = useState(false)

	function trackProduct(item) {
		setSelectedIndex(item)
	}

	return (
		<div className="uk-container uk-container-expanded">
			<div className="uk-container">

				<div className="uk-margin-large-top uk-block">
					<a data-uk-toggle={"target: #modal-full"} onClick={() => {setSecondForm(false)}} className="uk-button uk-button-secondary">Add New Activity</a>
					<a data-uk-toggle={"target: #modal-full"} className="uk-button uk-button-primary" onClick={() => setSecondForm(true)}>Add New Knowledge</a>
				</div>
				<Modal product={selectedIndex} secondForm={secondForm} />

				<div class="uk-overflow-auto uk-margin-large-top">
						<h2 className="uk-text-center uk-text-bold">Products Listing</h2>
				    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
				        <thead>
				            <tr>
				                <th class="uk-table-shrink"></th>
				                <th class="uk-table-shrink">Image</th>
				                <th class="uk-table-shrink">Title</th>
				                <th class="uk-width-small">Description</th>
				                <th class="uk-table-shrink">Price</th>
				                <th class="uk-table-shrink">Actions</th>
				            </tr>
				        </thead>
				        <tbody>

				        		{
					            products.map((product, i) => {
					              return(
					                <tr key={i}>
							                <td><input class="uk-checkbox" type="checkbox"/></td>
							                <td><img class="uk-preserve-width" src={product?.image} width="40" alt=""/></td>
							                <td class="uk-table-link">
							                    <a class="uk-link-reset" href="">{product?.title}</a>
							                </td>
							                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
							                <td class="uk-text-nowrap">$399</td>
							                <td>
							                	<div>
							                		<a onClick={() => trackProduct(product)} data-uk-icon="pencil" className="uk-margin-small-right uk-text-primary" data-uk-toggle={"target: #modal-full"}></a>
							                		<a data-uk-icon="trash" className="uk-text-danger" onClick={() => {UIkit.modal.confirm('Delete ' + product?.title)}}></a>
							                	</div>
							                </td>
							            </tr>
					              )
					            })
					          }
				        </tbody>
				    </table>
				</div>
			</div>
		</div>
	)
}