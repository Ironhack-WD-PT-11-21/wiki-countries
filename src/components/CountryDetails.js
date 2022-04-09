import React from 'react'
import axios from 'axios'

// get alpha3Code from props.param.match
// match API call using this alpha3Code 
// to get get specified country

class CountryDetails extends React.Component {
    state = {
        country: '',
        loading: true
    }

    componentDidMount() {
        const { alpha3Code } = this.props.match.params

        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then(response => {
            this.setState({
                country: response.data,
                loading: false
            })
        })
    }

    render() {
        if (this.state.loading) {
            return <p>loading...</p>
        }

        return (
            <div>
                {this.state.country.name.common}
            </div>
        )
    }
}

// const CountryDetails = ({ match }) => {
//     const selectedCountry = countries.find(country => country.alpha3Code === match.params.alpha3Code)
    
//     return (
//         <div>
//             {selectedCountry.name.common}
//         </div>
//     )
// }

export default CountryDetails
