import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img`
         width: 40%;
    `

    return ( 
            <Icon className='icon' src="./image/icons8-sun-smiling-100.png" alt="Weather Icon"/>
     );
}
 
export default Icon;