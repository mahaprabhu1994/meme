import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navigation from './Navigation';
import Form from './DataEntry';
import Jokesdata from './JokesData';

function Property (){
  return (
    <Form 
      
    />
  )

}



ReactDOM.render(
<div>
    <Navigation />,
    <Property />
</div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
