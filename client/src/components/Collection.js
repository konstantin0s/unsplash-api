import React from 'react';
import './css/unsplash.css';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import Moment from "moment";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 160
  }
});

const Unsplash = (props) => {
  const classes = useStyles();

  const {collection} = props;

  return (
    <div className="child-splash">
      <Card className={classes.root}>
        <CardActionArea>
          <ReactFancyBox
            className={classes.media}
            thumbnail={collection.urls.regular
            ? collection.urls.regular
            : ''}
            image={collection.urls.regular
            ? collection.urls.regular
            : ''}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {collection.user.name
                ? collection.user.name
                : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {collection.user.location
                ? collection.user.location
                : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Twitter user: {collection.user.twitter_username
                ? collection.user.twitter_username
                : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Bio: {collection.user.bio
                ? collection.user.bio
                : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Created: {Moment(collection.created_at.dateFrom).format('YYYY-MM-DD')}
            </Typography>
          </CardContent>: ''
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
           <Sharing id={props.gif.id}/>
          </Button> */}

        </CardActions>
      </Card>
    </div>
  );
}

Unsplash.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  twitter_username: PropTypes.string,
  bio: PropTypes.string,
  dateFrom: PropTypes.string
}

export default Unsplash;