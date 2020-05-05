import React, { Component } from 'react';
import axios from 'axios';
import './css/onephoto.css';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

class OneSplash extends Component {
constructor(props) {
    super(props);
    this.state = {
        unsplash: [],
        isLoading: true
    }
}

matchSplash = () => {
console.log(this.props.id);
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


delayRender = () => {
    const { user, id, urls, likes, description,  created_at, exif } = this.state.unsplash;
    console.log(this.state.unsplash);
    const { isLoading} = this.state;
    if (!isLoading) {

    return (
    <Card className={useStyles.root}>
    <CardActionArea>

      <ReactFancyBox
      defaultThumbnailWidth='700'
          thumbnail={urls.regular}
          image={urls.regular} />
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
{/* <Sharing id={ id } /> */}
      </Button>
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
            <div className="onephoto">
         {this.delayRender()}
            </div>
        )
    }
}

export default OneSplash;