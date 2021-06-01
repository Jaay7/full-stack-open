import React from 'react'
import Country from './Country'

const Content = ({countries, setCountries}) => {
  return (
    countries.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    )
    : (countries.length > 2 && countries.length < 10) || countries.length === 0 ? (
      <ul>
        {countries.map((country, i) =>
          <li key={i}> {country.name} <button onClick={() => setCountries([country])}>show</button></li>
        )}
        </ul>
    ) : (
      <Country country={countries[0]}/>
    )
  );
}

export default Content;