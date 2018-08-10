import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.state = this.props.Listing;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   this.props.action(this.state).then(() => this.props.history.push('/'));
  // }

  handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('listing[user_id]', this.state.user_id);
  formData.append('listing[title]', this.state.title);
  formData.append('listing[price]', this.state.price);
  formData.append('listing[size]', this.state.size);
  formData.append('listing[category]', this.state.category);
  formData.append('listing[brand]', this.state.brand);
  formData.append('listing[description]', this.state.description);

  if (this.state.photoFile) {

    formData.append('listing[photo]', this.state.photoFile);
  }
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  }).then(
    (response) => console.log(response.message),
    (response) => {
      console.log(response.responseJSON);
    }
  );
}

  handleFile(e) {
   const file = e.currentTarget.files[0];
   const fileReader = new FileReader();
   fileReader.onloadend = () => {

     this.setState({photoFile: file, photoUrl: fileReader.result});
   };
   if (file) {
     fileReader.readAsDataURL(file);
   }
  }

  render () {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
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

          <input type="file" onChange={this.handleFile} />

          <h4>Image Preview:</h4>
          {preview}

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(ListingForm);
