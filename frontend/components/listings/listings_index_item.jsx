import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingsIndexItem = (props) => {
  console.log(props.id);
  return (
    <li className="index-listing" id={props.id}>
      <Link to={`/api/listings/${props.id}`}>{props.listing.title}</Link>
      <Link to="#">{props.listing.brand}</Link>
      <Link to="#">{props.listing.price}</Link>
      <Link to="#">{props.listing.size}</Link>
      <img className="listing-index-image" src={props.photo}/>
    </li>
  );
};

export default withRouter(ListingsIndexItem);
