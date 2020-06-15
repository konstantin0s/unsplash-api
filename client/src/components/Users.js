import React, { Component } from 'react';
import axios from 'axios';
import './css/oneuser.css';
import Loading from './Loading';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
require('dotenv');

 class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unsplash: [],
            userphotos: [],
            photos: [],
            isLoading: true
        }
    }
    
    matchSplash = () => {
    // console.log(this.props.id);
        axios.get(`/users/${this.props.id}`)
            .then(res => {
                // console.log(res.data.data);
              const unsplash = res.data;
              this.setState({ unsplash: unsplash,
                isLoading: false
            })
            return  this.secondCall();  
            })
            .catch(err => console.log(err));
    }
    
    componentDidMount() {
        this.matchSplash();
    }

    secondCall = () => {
                const { user} = this.state.unsplash;
                    axios.get(`https://api.unsplash.com/users/${user.username}/?client_id=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                console.log(res.data);
              const userphotos = res.data;
              const photos = res.data.photos;
                    // console.log(photos);
              this.setState({ userphotos: userphotos,
                photos:photos,
                isLoading: false
            });   
            })
            .catch(err => console.log(err));
    }
    
    showFancy = () => {
        const  { user } =  this.state.unsplash;
      
        return (
          <ReactFancyBox data-fancybox data-caption="This image has a simple caption"
            thumbnail={user.profile_image.medium}
          image={user.profile_image.medium} />
        )
      }



      listPhotos = () => {

        const  { isLoading,  userphotos} =  this.state;
        // console.log(this.state.userphotos);
        // console.log(photos);

        if (!isLoading) {

          if (userphotos) {
            return (
              <div className="user-photos">
<p>{userphotos.first_name} Photos:</p>

<div className="container-photos">
  {
   
   this.state.photos.map((onep) => (
    <div className="list-photos" key={onep.id}>
                 <ReactFancyBox key={onep.id} data-fancybox data-caption="This image has a simple caption"
                 thumbnail={onep.urls.regular}
             image={onep.urls.regular} />
             </div>
                 ))

}
</div>
              </div>
          )

          }

                        } else {
                            return (
                                <React.Fragment>
                                         <Loading />
                                </React.Fragment>
                            )
                        }
      }
      

    delayRender = () => {
        const { user } = this.state.unsplash;
        const { isLoading} = this.state;
        if (!isLoading) {


              return (
        
                <div className="delay">
                <Card key={user.id}>
      <CardActionArea>
    <CardContent>
                  {this.showFancy()}
    </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {user.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {/* Created at: {created_at} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {user.total_likes} likes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {user.total_photos} photos 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Instragram: {user.instagram_username}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="body2" color="textSecondary" component="p">
                 <a className="bisc" href={user.portfolio_url} target="_blank" >  Portfolio: </a>
          </Button>
      <CardActions>
   
      </CardActions>
    </Card>
          </div>
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
          const { userphotos } = this.state.userphotos;
                      return (
                <div className="oneuser">
                  <h1>Profile page</h1>
                  {this.delayRender()}
            {this.listPhotos()}
                </div>
            )
        }
    }

export default Users;
