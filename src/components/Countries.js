import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = function () {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState ([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa','America','Asia','Europe','Oceania'];
    
    useEffect (() => {
        if(playOnce) {
            axios
            .get(
                'https://restcountries.com/v2/all'
            )
            .then(res => {
            setData(res.data);
            setPlayOnce(false);
            })
        }

        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        };
        sortedCountry();

    }, [data, rangeValue, playOnce, selectedRadio])
    
    return (
        <div className='countries'>
            <ul className='radio-container'>
                {radios.map((radio) => {
                    return (
                        <li key={radio}>
                            <input 
                                type='radio' 
                                value={radio} 
                                id={radio} 
                                checked={radio === selectedRadio}
                                onChange={(e) => setSelectedRadio(e.target.value)}
                            />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                        );
                    })}  
                    <input 
                        type='range' 
                        min='1' 
                        max='250' 
                        value={rangeValue} 
                        onChange={(e) => setRangeValue(e.target.value)}
                    />
            </ul>
            <div className='cancel'>
                {selectedRadio && <button onClick={(e) => setSelectedRadio('')} >Annuler recherche</button>}
            </div>
            <ul className='countries-list'> 
                {sortedData
                .filter((country) => country.region.includes(selectedRadio))
                .map((country, index) => 
                    <Card country={country} key={country.name} />
                )}
            </ul>
        </div>
    );
};

export default Countries;