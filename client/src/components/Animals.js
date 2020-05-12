import React, { Component } from 'react';
import Collection from './Collection';
import Loading from './Loading';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import './css/collections.css'

 class Animals extends Component {
constructor(props) {
    super(props);

    this.state = {
        animals: [],
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


animals = (query = 'animals', page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios.get(`/collections?&query=${query}`, {
        params: {
            page: page
        }
    })
    .then(res => {
        const animals = res.data.photos;
        // console.log(collections);
        // console.log(res);
        this.setState({
            animals: animals.results,
            isLoading: false,
            pagination: {
                currentPage: res.data.page,
                itemsPerPage: this.state.pagination.itemsPerPage,
                total: res.data.photos.total_pages
            }
        })
    })
    .catch(err => console.log(err))
}

componentDidMount = () => {
    this.animals();
}

handleSubmit = e => {
    e.preventDefault();
    this.animals(this.query.value);
    e.currentTarget.reset();
    this.setState({
        searchText: [],
        term: []
    })
}

onSearchChange = e => {
    this.animals(this.query.value);
    this.setState({
        searchText: e.target.value,
        term: e.target.value
    });
    // console.log(e.target.value);
}

    render() {
    let {animals, isLoading, searchText } = this.state;
    // console.log( collections);
    // console.log( term);
    // console.log( searchText);
        return (

        <React.Fragment>
                  <PhotoContainer />

                  <div className="contain-form">

<form className="search-form" onSubmit={this.handleSubmit}>

<input
onChange={this.onSearchChange}
id="searchField"
type="text"
value={searchText}
autoComplete="true"
ref={input => (this.query = input)}
placeholder="Search Free Images"
aria-label="Search"/>
{/* {this.renderSuggestions()} */}

</form>

</div>
              <div className="collections-list">
                <div className="collection-map">

                                        {

                                            
                        (isLoading) ? <Loading /> : 


                        animals.map((collection) => (

                                <Collection key={collection.id} collection={collection} />
                            ))   } 

                </div>
            </div>
        </React.Fragment>
        )
    }
}


export default Animals;