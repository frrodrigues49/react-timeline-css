import React from 'react';
import './App.css';

function App() {
  return (

    <div id="content">
      <ul className="timeline">
        <li className="event" data-date="12:30 - 1:00pm">
          <div className="member-infos">
            <h1 className='member-title'>Entrega Realizada</h1>
            <span>Rio de Janeiro</span>
          </div>
        </li>

        <li className="event" data-date="12:30 - 1:00pm">
          <div className="member-infos">
            <h1 className='member-title'>Entrega Realizada</h1>
            <span>Rio de Janeiro</span>
          </div>
        </li>

        <li className="event" data-date="12:30 - 1:00pm">
          <div className="member-infos">
            <h1 className='member-title'>Entrega Realizada</h1>
            <span>Rio de Janeiro</span>
          </div>
        </li>

      </ul>
    </div>



  );
}

export default App;
