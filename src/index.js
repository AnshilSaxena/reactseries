import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import Sdata from './Sdata';


ReactDOM.render(

  <>
    <h1 className="heading_style"> My Favourite Series </h1>
    {Sdata.map((val) => {
      return (

        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />

      );
    })}
  </>

  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
