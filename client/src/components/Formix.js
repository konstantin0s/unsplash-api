 
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TextField from 'material-ui/TextField';
import { TextareaAutosize } from '@material-ui/core';
// import './css/formix.css';
// import { collections } from './HelperFunction';
// import { handleUpload } from './HelperFunction';
import axios from 'axios';

class Formix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      image: '',
      showtimes: '',
      redirect: false,
      helpertext: '',
      error: false,
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.length <= 2) {
      this.setState({
        helpertext: 'Try Harder',
        error: true,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        helpertext: '',
        error: false,
      });
    }
  }

  // this method handles just the file upload
  handleFileUpload(e) {
    console.log('The file to be uploaded is: ', e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('image', e.target.files[0]);
    // console.log(uploadData);

    this.setState({ image:  e.target.files[0] });

    // this.handleUpload(uploadData)
    //   .then((response) => {
    //     console.log('response is: ', response);
    //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state
    //     this.setState({ image: response.name });
    //   })
    //   .catch((err) => {
    //     console.log('Error while uploading the file: ', err);
    //   });
  }

  validate = () => {
    if (this.state.error === true) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const collection = {
      id: this.props.id,
      title: this.state.title,
      description: this.state.description,
      image: this.state.image.name
    };
    console.log(collection);
    if (isValid) {
        this.collections(collection).then((res) =>  {
          // console.log(res)
          this.props.history.push(`/`)
        }
        );
    }
  };

   collections = newCollection => {

       return axios.post(`/add`, {

        title: newCollection.title,
        description: newCollection.description,
        image: newCollection.image
        })
        .then(res => {
          console.log(res);
      console.log('collection added!');
      console.log(newCollection);
    });
  };
  
  
//   handleUpload = (theFile) => {
  
//     return  axios.post(`/collection/${this.props.id}/add`, theFile)
//         .then(res => {
//             res.data
//         })
//         .catch(err => {
//           console.log(err);
//         });
//   };


  render() {
      console.log(this.props.id);
      console.log(this.state.image.name);
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <Paper elevation={3}>
            <form className="containerX" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  type="text"
                  name="director"
                  placeholder="Director"
                  // eslint-disable-next-line
                  type="text"
                  name="title"
                  // eslint-disable-next-line
                  placeholder="Title"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
                <div className="error" style={{ fontSize: 12, color: 'red' }}>
                  {this.state.helpertext}
                </div>
                <br />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="default"
                  className="upload-button"
                  startIcon={<CloudUploadIcon />}
                >
                  {' '}
                  Up
                  <input
                    type="file"
                    name="image"
                    className="btn btn-warning addPic"
                    onChange={(e) => this.handleFileUpload(e)}
                  />
                </Button>
              </div>

              <div>
                <TextareaAutosize
                  helpertext={this.state.helpertext}
                  aria-label="minimum height"
                  type="text"
                  name="description"
                  rowsMin={3}
                  columns="3"
                  placeholder="Add Description"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  className="save-btn"
                  startIcon={<SaveIcon />}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(Formix);