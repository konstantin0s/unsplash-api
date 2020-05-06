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

handleSubmit = e => {
    e.preventDefault();
    this.freshPhotos(this.query.value);
    e.currentTarget.reset();
    this.setState({
        searchText: [],
        term: []
    })
}

onSearchChange = e => {
    this.freshPhotos(this.query.value);
    this.setState({
        searchText: e.target.value,
        term: e.target.value
    });
    console.log(e.target.value);
}

    render() {
    let {unsplashlist, isLoading, pagination, term, searchText } = this.state;
    console.log( unsplashlist);
    console.log( pagination);
    console.log( term);
    console.log( searchText);
        return (

        <React.Fragment>
                  <HomePC />

                  <div className="contain-form">
                      
                  <Link className="to-photos"  to={`/unsplash/`}>
                 Search photos
            </Link>

{/* <form className="search-form" onSubmit={this.handleSubmit}>

<input
onChange={this.onSearchChange}
id="searchField"
type="text"
value={searchText}
autoComplete="true"
ref={input => (this.query = input)}
placeholder="Search Free Images"
aria-label="Search"/>

</form> */}

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