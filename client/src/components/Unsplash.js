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

    const {unsplash } = props;

    return (
        <div className="child-splash">
      <Card className={classes.root}>
        <CardActionArea>
               <ReactFancyBox className={classes.media} thumbnail={unsplash.urls.regular}
                image={unsplash.urls.regular} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {unsplash.user.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {unsplash.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {unsplash.likes} likes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           Created: {unsplash.created_at} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* <Sharing id={props.gif.id}/> */}
          </Button>
       
          {/* <Link className="linkx" id={props.gif.id} to={`/unsplash/${props.gif.id}`}>
                  See More..
        </Link> */}
        
        </CardActions>
      </Card>
      </div>
    );
}


export default Unsplash;