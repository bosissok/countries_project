import React from 'react';


const Card = (props) => {
    const { country } = props
    // console.log(country)
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (
        <li className='card'>
        <img src={country.flag } alt='flag' />
        <div>
            <ul className='infos'>
                <li className='card'>{country.name}</li>
                <li className='card'>{country.capital}</li>
                <li className='card'>{country.region}</li>
                <li className='card'>{numberFormat(country.population)}</li>
            </ul>
        </div>
        </li>
    );
};

export default Card;