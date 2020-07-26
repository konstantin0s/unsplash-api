import React, {Component} from 'react';
import Unsplash from './Unsplash';
import Loading from './Loading';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import './css/unsplashlist.css'

class UnsplashList extends Component {
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

  abracadabra = (query = 'office', page) => {
    this.setState(state => ({
      ...state,
      isLoading: true
    }));

    axios
      .get(`?&query=${query}`, {
      params: {
        page: page
      }
    })
      .then(res => {
        const unsplash = res.data.results;
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
    this.abracadabra();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.abracadabra(this.query.value);
    e
      .currentTarget
      .reset();
    this.setState({searchText: [], term: []})
  }

  onSearchChange = e => {
    this.abracadabra(this.query.value);
    this.setState({searchText: e.target.value, term: e.target.value});
  }

  render() {
    let {unsplashlist, isLoading, searchText} = this.state;
    return (

      <React.Fragment>
        <PhotoContainer/>

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
              aria-label="Search"/> {/* {this.renderSuggestions()} */}

          </form>

        </div>
        <div className="unsplash-list">
          <div className="unsplash-map">

            {(isLoading)
              ? <Loading/>
              : unsplashlist.map((unsplash) => (<Unsplash key={unsplash.id} unsplash={unsplash}/>))}

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UnsplashList;