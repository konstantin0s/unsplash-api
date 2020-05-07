import React, { Component } from 'react';
import Collection from './Collection';
import Loading from './Loading';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import './css/collections.css'

 class UnsplashList extends Component {
constructor(props) {
    super(props);

    this.state = {
        collections: [],
        isLoading: true,
        searchText: [],
        term: []
    }
}


collections = (page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios.get(`/collections`, {
        params: {
            page: page
        }
    })
    .then(res => {
        const collections = res.data;
        console.log(collections);
        console.log(res);
        this.setState({
            collections: collections,
            isLoading: false
        })
    })
    .catch(err => console.log(err))
}

componentDidMount = () => {
    this.collections();
}

handleSubmit = e => {
    e.preventDefault();
    this.collections(this.query.value);
    e.currentTarget.reset();
    this.setState({
        searchText: [],
        term: []
    })
}

onSearchChange = e => {
    this.collections(this.query.value);
    this.setState({
        searchText: e.target.value,
        term: e.target.value
    });
    console.log(e.target.value);
}

    render() {
    let {collections, isLoading, term, searchText } = this.state;
    console.log( collections);
    console.log( term);
    console.log( searchText);
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


                        collections.map((collection) => (

                                <Collection key={collection.id} collection={collection} />
                            ))   } 

                </div>
            </div>
        </React.Fragment>
        )
    }
}


export default UnsplashList;