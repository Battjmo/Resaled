import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  componentWillMount() {
    this.props.fetchListing(this.props.match.params.id);
  }
  // 
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.listing.id !== nextProps.match.params.id) {
  //     this.props.fetchListing(nextProps.match.params.id);
  //   }
  // }

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{listing.title}</h3>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default ListingShow;
