import React, {useState, useEffect} from 'react';
import {Films} from "../components/Films";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const updateSearch = (str, radio) => {
        setLoading(true);
        let typeSearch = (radio === 'movie') ? '&type=movie'
            :  (radio === 'series')
                ? '&type=series' : '';

        if(str.length) {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${typeSearch}`)
                .then(response => response.json())
                .then(data => {
                    setFilms(data.Search);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
        }
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setFilms(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })

    }, [])

    return <main className="container content">
        <Search updateSearch={updateSearch} />
        {
            loading ? ( <Preloader />) : <Films films={films} />
        }
    </main>
}

export {Main}