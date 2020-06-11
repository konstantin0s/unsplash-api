import React from 'react';
import { Link } from "react-router-dom";
import './css/unsplash.css';
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
import PropTypes from 'prop-types';

 const Unsplash = (props) => {

    const {unsplash } = props;

    return (
        <div className="child-splash">
      <Card>
        <CardActionArea>
               <ReactFancyBox className="fancy-box" thumbnail={unsplash.urls.regular}
                image={unsplash.urls.regular} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {unsplash.user.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {unsplash.description ? unsplash.description.slice(0, 10) : ''}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {unsplash.likes} likes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Created: {Moment(unsplash.created_at.dateFrom).format('YYYY-MM-DD')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
           <Sharing id={props.gif.id}/> 
          </Button> */}
       
            <Button size="small" color="primary">
                <Link className="linkx" id={unsplash.id} to={`/unsplash/${unsplash.id}`}>
                      See More..
            </Link>
          </Button>
    
        </CardActions>
      </Card>
      </div>
    );
}


Unsplash.propTypes = {
  regular: PropTypes.string,
  username: PropTypes.string,
  description: PropTypes.string,
  dateFrom: PropTypes.string,
  id: PropTypes.string
}



export default Unsplash;