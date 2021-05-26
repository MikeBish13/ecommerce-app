import React from "react";
import {useQuery} from 'react-query';
import { getItems } from "../api/ApiCalls";
import Button from './Button';

export default function RecommendedItem({ item }) {
  const {data} = useQuery("item", getItems);
  const recommendedItem = data && data.filter(dataItem => dataItem.slug === item.slug);
  return (
    <>
    {recommendedItem &&   
    <div className="recommended-item">
      <picture>
        <source media="(min-width: 1000px)" srcSet={`.${item.image.desktop}`}></source>
        <source media="(min-width: 600px)" srcSet={`.${item.image.tablet}`}></source>
        <img src={`.${item.image.mobile}`} alt="product"></img>
      </picture>
      <h5>{item.name}</h5>
      <Button url={`/${recommendedItem[0].category}/${item.slug}`} type={"one"} text={"See Product"} />
    </div>
    }
    </>
  );
}
