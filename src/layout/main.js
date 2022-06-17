import React from 'react';
import {Films} from "../components/Films";
import {Preloader} from "../components/  Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        films: [],
        loading: true,
    }

    updateSearch = (str, radio) => {
        let typeSearch = (radio === 'movie') ? '&type=movie'
            :  (radio === 'series')
                ? '&type=series' : '';

        if(str.length) {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${typeSearch}`)
                .then(response => response.json())
                .then(data => this.setState({films: data.Search, loading: false}))
        }
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({films: data.Search, loading: false}))
    }

    render() {
        const {films, loading} = this.state;

        return <main className="container content">
            <Search updateSearch={this.updateSearch} />
            {
                loading ? ( <Preloader />) : <Films films={films} />
            }

        </main>
    }
}

export {Main}