import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home = React.createClass({
  render() {
    return (<h3>Message</h3>);
  }
});

const What = React.createClass({
  render() {
    return (<h3>Test</h3>);
  }
});

ReactDOM.render((

    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>


), document.getElementById('content'));
