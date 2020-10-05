import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function tick() {
  const element = <div>
    <h3>Hello the time is</h3>
    <h4> It is {new Date().toLocaleTimeString()}.</h4>
  </div>

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000)