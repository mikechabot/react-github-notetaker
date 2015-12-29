import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'; // Get me Router from React-Router
import routes from './config/routes';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
// Which component to render based on which path/route we're at
