import React from 'react';
import './App.css';
import zq from '../src/sub1.jpg';
function Shows()
{
    return(
        <div className='col-md-1' >
<img  width="100px" src={zq}/>
<br/> <a href="https://www.google.co.in/"><b className='hs'>Please Subscribe My Channel</b></a>
</div>
    );
}
export default Shows;