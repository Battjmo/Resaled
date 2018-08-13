import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingsIndexItem = (props) => {
  return (
    <li className="index-listing" id={props.id}>
      <Link className="listing-link" to={`/api/listings/${props.id}`}>
      <img className="listing-index-image" src={props.photo}/>
      <div className="listing-item-top-row">
        <h3 className="listing-item-brand">{props.listing.brand}</h3>
        <div>{props.listing.size}</div>
        </div>
        <div className="listing-item-title">{props.listing.title}</div>
        <div className="listing-item-price">$ {props.listing.price}</div>
      </Link>
    </li>
  );
};

export default withRouter(ListingsIndexItem);
