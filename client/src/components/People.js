import React, {Component} from 'react';
import Collection from './Collection';
import Loading from './Loading';
import PeoplePC from './PeoplePC';
import axios from 'axios';
import './css/collections.css'

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
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

  people = (query = 'people', page) => {
    this.setState(state => ({
      ...state,
      isLoading: true
    }));

    axios
      .get(`/collections?&query=${query}`, {
      params: {
        page: page
      }
    })
      .then(res => {
        const people = res.data.photos;
        this.setState({
          people: people.results,
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
    this.people();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.people(this.query.value);
    e
      .currentTarget
      .reset();
    this.setState({searchText: [], term: []})
  }

  onSearchChange = e => {
    this.people(this.query.value);
    this.setState({searchText: e.target.value, term: e.target.value});
  }

  render() {
    let {people, isLoading, searchText} = this.state;
    
    return (

      <React.Fragment>
        <PeoplePC/>

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
        <div className="collections-list">
          <div className="collection-map">

            {(isLoading)
              ? <Loading/>
              : people.map((collection) => (<Collection key={collection.id} collection={collection}/>))}

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default People;