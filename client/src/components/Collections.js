import React, {createRef, Component } from 'react';
import ReactDOM from "react-dom";
import Collection from './Collection';
import Loading from './Loading';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import './css/collections.css'

 class Collections extends Component {
constructor(props) {
    super(props);

    this.state = {
        collections: [],
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

collections = (query = 'office', page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios.get(`/collections?&query=${query}`, {
        params: {
            page: page
        }
    })
    .then(res => {
        const collections = res.data.photos;
        // console.log(collections);
        // console.log(res);
        this.setState({
            collections: collections.results,
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
    this.collections();
    const node = ReactDOM.findDOMNode(this);
    console.log(node);
    /* Uses DOM node  */ 

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
    // console.log(e.target.value);
}



wrapper = createRef();

    render() {
    let {collections, isLoading, searchText } = this.state;
    // console.log( collections);
    // console.log( term);
    // console.log( searchText);
        return (

        <React.Fragment>
                  <PhotoContainer />

                  <div className="contain-form" ref={this.wrapper}>

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


export default Collections;