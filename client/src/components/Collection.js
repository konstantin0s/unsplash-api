import React from 'react';
import { Link } from "react-router-dom";
import './css/unsplash.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import Moment from "moment";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
    width: 345
  },
});

 const Unsplash = (props) => {
    const classes = useStyles();

    const {collection } = props;

    return (
        <div className="child-splash">
      <Card className={classes.root}>
        <CardActionArea>
               <ReactFancyBox className={classes.media} thumbnail={collection.preview_photos[0].urls.regular}
                image={collection.preview_photos[0].urls.regular} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {collection.user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {collection.location ? collection.location : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {collection.total_photos} photos
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           Created: {Moment(collection.published_at.dateFrom).format('YYYY-MM-DD')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
           <Sharing id={props.gif.id}/> 
          </Button> */}
       
            <Button size="small" color="primary">
                <Link className="linkx" id={collection.id} to={`/collection/${collection.id}`}>
                      See More..
            </Link>
          </Button>
    
        </CardActions>
      </Card>
      </div>
    );
}


export default Unsplash;