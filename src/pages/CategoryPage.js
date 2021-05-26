import React from "react";
import Header from "../components/Header";
import { useQuery } from "react-query";
import CardLinks from "../components/CardLinks";
import StaticDetails from "../components/StaticDetails";
import { getItems } from "../api/ApiCalls";
import ItemListing from "../components/ItemListing";

export default function CategoryPage({ categoryName }) {
  const { data } = useQuery("items", getItems);
  return (
    <div>
      <Header />
      <div className="category-page">
        <div className="category-page-head">
          <h2>{categoryName}</h2>
        </div>
        <div className="category-page-products container">
          <ul className="product-listing">
            {data &&
              data.sort((a,b) => a.new ? -1 : 1).map(
                (item) =>
                  item.category === categoryName && (
                    <ItemListing key={item.id} item={item} />
                  )
              )}
          </ul>
        </div>
      </div>
      <CardLinks position={"category-page"} />
      <StaticDetails />
    </div>
  );
}
