import React, { Component } from 'react';
import Formix from './Formix';
import './css/addphoto.css';

class AddPhoto extends Component {
  render() {
    return (
      <div className="add-movie">
        <Formix />
      </div>
    );
  }
}

export default AddPhoto;