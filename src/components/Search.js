import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.updateSearch(this.state.search, this.state.type);
        }
    }



    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        className="validate search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={() => this.props.updateSearch(this.state.search, this.state.type)}>Search</button>
                </div>
            </div>

            <div className="row">
                <div className="col s4">
                    <label>
                        <input
                            name="radio-type"
                            type="radio"
                            value="all"
                            onChange={(e) => this.setState({type: e.target.value} )}
                            checked = {this.state.type === "all"}
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
                            onChange={(e) => this.setState({type: e.target.value} )}
                            checked = {this.state.type === "movie"}
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
                            onChange={(e) => this.setState({type: e.target.value} )}
                            checked = {this.state.type === "series"}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    }
}

export {Search}