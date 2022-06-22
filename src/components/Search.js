import React, {useState} from "react";

const Search = (props) => {
    const {
        updateSearch = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if(event.key === 'Enter') {
            updateSearch(search, type);
        }
    }

    return <div className="row">
        <div className="col s12">
            <div className="input-field">
                <input
                    placeholder="Search"
                    type="search"
                    className="validate search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button className="btn search-btn" onClick={() => updateSearch(search, type)}>Search</button>
            </div>
        </div>

        <div className="row">
            <div className="col s4">
                <label>
                    <input
                        name="radio-type"
                        type="radio"
                        value="all"
                        onChange={(e) => setType(e.target.value) }
                        checked = {type === "all"}
                    />
                    <span>All</span>
                </label>
            </div>
            <div className="col s4">
                <label>
                    <input
                        name="radio-type"
                        type="radio"
                        value="movie"
                        onChange={(e) => setType(e.target.value) }
                        checked = {type === "movie"}
                    />
                    <span>Movie</span>
                </label>
            </div>
            <div className="col s4">
                <label>
                    <input
                        name="radio-type"
                        type="radio"
                        value="series"
                        onChange={(e) => setType(e.target.value) }
                        checked = {type === "series"}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    </div>
}

export {Search}