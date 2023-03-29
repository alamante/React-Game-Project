import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Hangman.css";

function Time() {
    const [city, setCity] = useState('london');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    useEffect(() => {
      axios.get('https://api.api-ninjas.com/v1/worldtime', {
        params: { city: city },
        headers: { 'X-Api-Key': 'JxPA8Uruwc07nDliOv9j1g==Yf9kxgp1GM8VuwhB' },
        responseType: 'json'
      })
      .then(response => {
        setDate(response.data.date);
        setTime(`${response.data.hour}:${response.data.minute}`);
      })
      .catch(error => {
        console.error(error);
      });
    }, [city]);
  
    return (
      <div className='time'>
        {/*<h1>City:{city}</h1>*/}
        {/*<h3><p>Date: {date}</p></h3>*/}
        <h2><p>Time: {time}</p></h2>
      </div>
    );
  }
  
  export default Time;
  