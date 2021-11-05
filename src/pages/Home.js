import React from "react";
import { CardList } from "../components/CardList"

export const Home = ({products, preventSubmit, searchChange}) => {
	function preventSubmit (e) {
    e.preventDefault()
  }

	return (
		<div className="uk-container uk-container-expand">
			<div className="uk-container uk-padding">
				<div className="uk-flex uk-flex-center uk-margin-bottom">
						<div class="uk-margin">
						    <form class="uk-search uk-search-default" onSubmit={preventSubmit}>
						        <a href="" data-uk-search-icon></a>
						        <input class="uk-search-input" type="search" placeholder="Search" onChange={searchChange}/>
						    </form>
						</div>
				</div>
				<CardList products={products}/>
			</div>
		</div>
	)
}