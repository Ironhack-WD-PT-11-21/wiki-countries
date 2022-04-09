import React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

const API_URL = "https://ih-countries-api.herokuapp.com/countries"

class App extends React.Component {
  state = {
    countries: []
  }

  // Create a new route for countries list
  // Create a route for country details
  // render country details on the page

  componentDidMount() {
    axios.get(API_URL).then(response => {
      this.setState({
        countries: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/countries" element={<CountriesList countries={this.state.countries} />} />
              <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
