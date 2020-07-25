import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Links() {
  const [state, setState] = useState(false);

  function handleChecked() {
    setState(false);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.checked);
  };

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" onChange={handleChange} checked={state} />
      <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li><Link to="#" onClick={handleChecked}>Home</Link></li>
              <li><Link to="#" onClick={handleChecked}>About</Link></li>
              <li><Link to='/services' onClick={handleChecked}>Services</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;