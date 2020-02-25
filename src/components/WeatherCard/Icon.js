import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img`
         width: 40%;
    `;

let icon ='';
switch (props.condition) {
      case 'clear-day':
           icon = `./image/icons8-sun-smiling-100.png`
           break;
      case 'rain':
           icon = `./image/icons8-rainy-weather-100-2.png`
           break;    
      case 'sleet':
           icon = `./image/icons8-sleet-100-wh.png`      
           break;
      case 'snow':
           icon = `./image/icons8-snow-64-wh.png`      
           break;                    
      case 'wind':
           icon = `./image/icons8-windy-weather-100.png`      
           break;
      case 'thunderstorm':
           icon = `./image/icons8-stormy-weather-100.png`      
           break;            
      case 'hail':
           icon = `./image/icons8-hail-50.png`      
           break;
      default:
           break;
           
}

    return ( 
            <Icon className='icon' src={icon} alt="Weather Icon"/>
     );
}
 
export default Icon;