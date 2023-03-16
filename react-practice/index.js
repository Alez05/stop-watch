import React from 'react';
import ReactDOM from 'react-dom';

function Page() {
  return (
    <div>
      <img
        src='./react-logo.png'
        width='40px'
      />
      <h1>Fun facts about React</h1>
      <ul>
        <li>e bulangiu</li>
        <li>mere os</li>
        <li>de boss</li>
        <li>de boss</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Page />, document.querySelector('#root'));

// document.getElementById('root').append(JSON.stringify(page));
