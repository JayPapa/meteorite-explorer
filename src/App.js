import React from 'react';
// components
import SearchPanel from './SearchPanel'
import SearchResults from './SearchResults'
// assets
import './App.css';

class App extends React.Component {
  state = {
    data: [],
    searchTerm: ''
  }
  componentDidMount() {
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=40&$q=${this.state.searchTerm}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({data})
      })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this is ' + e.target.value);
    fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=10&$q=${this.state.searchTerm}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.setState({data})
    })
  }
  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            Meteorite-Explorer
          </header>
          {/* Search Panel */}
          <SearchPanel handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        searchTerm={this.state.searchTerm} />
          {/* Search Results */}
          <SearchResults headers={["Name", "ID", "Name Type", "Rec Class", "Mass (g)", "Fall", "Year", "Latitude", "Longitude"]}
                          values={this.state.data}/>
        </div>
      );
  }
}

export default App;
