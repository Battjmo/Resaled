import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingsIndexItem = (props) => {
  console.log(props.id);
  return (
    <li className="index-listing" id={props.id}>
      <Link to={`/api/listings/${props.id}`}>
      <img className="listing-index-image" src={props.photo}/>
      <div>{props.listing.brand}</div>
      <div>{props.listing.title}</div>
      <div>{props.listing.size}</div>
      <div>{props.listing.price}</div>
      </Link>
    </li>
  );
};

export default withRouter(ListingsIndexItem);
