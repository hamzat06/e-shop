import React from "react";
import { Card } from "./Card"

export const CardList = ({products}) => {
	return (
				<div className="uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid uk-grid-small" uk-grid>
					{
            products.map((product) => {
              return(
                <Card
                  id={product.id}
                  title={product.title}
                  key={product.id}
                  image={product.image}
                />
              )
            })
          }
				</div>
	)
}