import React, { Component } from 'react';
import axios from 'axios';
import './css/onecollection.css';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
// import Formix from './Formix';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import Moment from "moment";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    widthit: {
      width: 700
    }
  });

class OneCollection extends Component {
constructor(props) {
    super(props);
    this.state = {
        collection: [],
        isLoading: true
    }
}

oneCollection = () => {
// console.log(this.props.id);
    axios.get(`/${this.props.id}`)
        .then(res => {
            // console.log(res.data.data);
          const collection = res.data;
          this.setState({ collection: collection,
            isLoading: false
        });   
        })
        .catch(err => console.log(err));
}

componentDidMount() {
    this.oneCollection();
}


delayRender = () => {
    const { user, description, title,
         preview_photos, published_at } = this.state.collection;
    console.log(this.state.collection);
    const { isLoading} = this.state;
    if (!isLoading) {

    return (
        <Card className={useStyles.root}>
        <CardActionArea>
               <ReactFancyBox className={useStyles.widthit} thumbnail={preview_photos[0].urls.regular}
                image={preview_photos[0].urls.regular} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {title ? title : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {description} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {user.location ? user.location : ''} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           Created: {Moment(published_at.dateFrom).format('YYYY-MM-DD')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
           <Sharing id={props.gif.id}/> 
          </Button> */}
       
            {/* <Button size="small" color="primary">
                <Link className="linkx" id={collection.id} to={`/collection/${collection.id}`}>
                      See More..
            </Link>
          </Button> */}
    
        </CardActions>
      </Card>
)
    } else {
        return (
           <Loading />
        )
    }
}


    render() {
        // console.log(this.state.gif);

        return (
            <div className="onecollection">
               {/* <Formix id={this.props.id} /> */}
              {this.delayRender()}
            </div>
        )
    }
}

OneCollection.propTypes = {
  regular: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  dateFrom: PropTypes.string,
  description: PropTypes.number,
  location: PropTypes.string,
}

export default OneCollection;