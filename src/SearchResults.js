import React from 'react'
import './SearchResults.css'

const SearchResults = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {props.headers.map((el) => {
                        return (<th key={el}>{el}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                { props.values.length > 0 ? props.values.map(value => {
                    return (<tr key={value.id}>
                                <td>{value.name}</td>
                                <td>{value.id}</td>
                                <td>{value.nametype}</td>
                                <td>{value.recclass}</td>
                                <td>{value.mass}</td>
                                <td>{value.fall}</td>
                                <td>{value.year ? value.year.substring(0,4) : ''}</td>
                                <td>{value.geolocation ? value.geolocation.latitude : ''}</td>
                                <td>{value.geolocation ? value.geolocation.longitude : ''}</td>
                            </tr>)
                }): 
                <tr>There is no data for the terms you searched</tr>}
            </tbody>
        </table>
    )
}

export default SearchResults