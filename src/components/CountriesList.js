import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = props => {
    const links = props.countries.map(country => {
        return (
            <Link
                to={`/countries/${country.alpha3Code}`}
                key={country.alpha3Code}
            >
                {country.name.common}
            </Link>
        )
    })

    return (
        <div>   
            {links}
        </div>
    )
}

export default CountriesList
