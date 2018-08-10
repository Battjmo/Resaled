import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.Listing;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render () {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Category
            <input
              type="text"
              value={this.state.category}
              onChange={this.update('category')} />
          </label>

          <label>Brand
            <input
              type="text"
              value={this.state.brand}
              onChange={this.update('brand')} />
          </label>

          <label>Size
            <input
              type="text"
              value={this.state.size}
              onChange={this.update('size')} />
          </label>

          <label>Price (Greater than 0 please, ya big dingus)
            <input
              type="number"
              value={this.state.price}
              onChange={this.update('price')} />
          </label>
          
          <label>Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(ListingForm);
