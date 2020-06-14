import React, { Component } from 'react';
import axios from 'axios';
import './css/onephoto.css';
import Loading from './Loading';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
// import Sharing from './Sharing';
import PropTypes from 'prop-types';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

class OneSplash extends Component {
constructor(props) {
    super(props);
    this.state = {
        unsplash: [],
        isLoading: true
    }
}

matchSplash = () => {
// console.log(this.props.id);
    axios.get(`/unsplash/${this.props.id}`)
        .then(res => {
            // console.log(res.data.data);
          const unsplash = res.data;
          this.setState({ unsplash: unsplash,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}

componentDidMount() {
    this.matchSplash();
}

showFancy = () => {
  const  { urls } =  this.state.unsplash;

  return (
    <ReactFancyBox data-fancybox data-caption="This image has a simple caption"
      thumbnail={urls.regular}
    image={urls.regular} />
  )
}


delayRender = () => {
    const { user, likes, description,  created_at, exif, id } = this.state.unsplash;
    console.log(this.state.unsplash);
    const { isLoading} = this.state;
    if (!isLoading) {
    
          return (
    
            <React.Fragment>
            <Card>
  <CardActionArea>
<CardContent>
              {this.showFancy()}
</CardContent>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {user.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
     {description}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
     Created at: {created_at}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
     {likes} likes
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
     {user.bio} 
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      Instragram: {user.instagram_username}  
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
          Shooting model: {exif.model}  
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
  <Button size="small" color="primary">
                <Link className="linkx" id={id} to={`/users/${id}`}>
                      See user..
            </Link>
          </Button>
  </CardActions>
</Card>
      </React.Fragment>
)
    } else {
        return (
            <React.Fragment>
                     <Loading />
            </React.Fragment>
        )
    }
}


    render() {
        return (
            <div className="onephoto">
              {

                  this.delayRender()
    
              }
            </div>
        )
    }
}

OneSplash.propTypes = {
  regular: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  likes: PropTypes.number,
  model: PropTypes.string,
  bio: PropTypes.string,
  instagram_username: PropTypes.string
}


export default OneSplash;