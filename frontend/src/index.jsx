import _ from 'lodash'
import React from 'react';
import ReactDOM from 'react-dom/client';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

//document.body.appendChild(component());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    {component}
  </React>
)