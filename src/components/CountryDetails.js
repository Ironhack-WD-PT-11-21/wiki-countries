import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

// get alpha3Code from props.param.match
// match API call using this alpha3Code 
// to get get specified country

// class CountryDetails extends React.Component {
//     state = {
//         country: '',
//         loading: true
//     }

//     componentDidMount() {
//         const { alpha3Code } = this.props.match.params

//         axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then(response => {
//             this.setState({
//                 country: response.data,
//                 loading: false
//             })
//         })
//     }

//     render() {
//         if (this.state.loading) {
//             return <p>loading...</p>
//         }

//         return (
//             <div>
//                 {this.state.country.name.common}
//             </div>
//         )
//     }
// }



// export default CountryDetails


const CountryDetails = () => {

    const [country, setCountry] = React.useState(null);
    const [loading, setLoading] = React.useState(true);


    const { alpha3Code } = useParams();


    React.useEffect(() => {
        // axios.get...
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`).then(response => {
            console.log('effect')
            setCountry(response.data);
            setLoading(false)
        })
    }, [alpha3Code]);


    if (loading) {
        return <p>loading...</p>
    }

    return (
        <div>
            {country.name.common}
        </div>
    )
}

export default CountryDetails;