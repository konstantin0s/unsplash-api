import React, { Component } from 'react';
import Unsplash from './Unsplash';
import Loading from './Loading';
import axios from 'axios';

 class UnsplashList extends Component {
constructor(props) {
    super(props);

    this.state = {
        unsplashlist: [],
        isLoading: true
    }
}

abracadabra = () => {
    axios.get('/unsplash')
    .then(res => {
        const unsplash = res.data;
        this.setState({
            unsplashlist: unsplash,
            isLoading: false
        })
    })
    .catch(err => console.log(err))
}

componentDidMount = () => {
    this.abracadabra();
}


    render() {
    let {unsplashlist, isLoading } = this.state;
    console.log( unsplashlist);
        return (

            <div className="unsplash-list">
                <div>
                                        {

                                            
                        (isLoading) ? <Loading /> : 


                        unsplashlist.map((unsplash) => (

                                <Unsplash key={unsplash.id} unsplash={unsplash} />
                            ))   } 

                </div>
            </div>
        )
    }
}


export default UnsplashList;