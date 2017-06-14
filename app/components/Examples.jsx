var React = require('react');

import {Link} from 'react-router';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples Component</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Shanghai">上海</Link>
        </li>
        <li>
          <Link to="/?location=Wuhan">武汉</Link>
        </li>
      </ol>
    </div>

  );
};

export default Examples;