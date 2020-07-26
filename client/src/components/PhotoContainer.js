import React, {Component} from 'react';
import './css/photo-container.css';

class PhotoContainer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.myRef} className="photo-container">
        {/* image placeholder */}
      </div>
    )
  }
}

export default PhotoContainer;