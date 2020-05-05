import React, { Component } from 'react'

 class UnsplashList extends Component {
constructor(props) {
    super(props);

    this.state = {
        unsplashlist: [],
        isLoading: false
    }
}

    render() {
        return (
            <div>
                <p>unsplashlist</p>
            </div>
        )
    }
}


export default UnsplashList;