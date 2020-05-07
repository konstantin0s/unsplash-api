import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Unsplash from './Unsplash';
import Loading from './Loading';
import HomePC from './HomePC';
import axios from 'axios';
import './css/fresh.css';

 class FreshPhotos extends Component {
constructor(props) {
    super(props);

    this.state = {
        unsplashlist: [],
        isLoading: true,
        searchText: [],
        term: [],
        pagination: {
            total: 0,
            page: 1,
            itemsPerPage: 25
          }
    }
}


freshPhotos = (page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios.get(`/photos`, {
        params: {
            page: page
        }
    })
    .then(res => {
        const unsplash = res.data;
        console.log(unsplash);
        console.log(res);
        this.setState({
            unsplashlist: unsplash,
            isLoading: false,
            pagination: {
                currentPage: res.data.page,
                itemsPerPage: this.state.pagination.itemsPerPage,
                total: res.data.total
            }
        })
    })
    .catch(err => console.log(err))
}

componentDidMount = () => {
    this.freshPhotos();
}

    render() {
    let {unsplashlist, isLoading } = this.state;
  
        return (

        <React.Fragment>
                  <HomePC />

                  <div className="contain-form">
                      
                  <Link className="to-photos"  to={`/unsplash/`}>
                 Explore photos
            </Link>
</div>
              <div className="unsplash-list">
                <div className="unsplash-map">

                                        {

                                            
                        (isLoading) ? <Loading /> : 


                        unsplashlist.map((unsplash) => (

                                <Unsplash key={unsplash.id} unsplash={unsplash} />
                            ))   } 

                </div>
            </div>
        </React.Fragment>
        )
    }
}


export default FreshPhotos;