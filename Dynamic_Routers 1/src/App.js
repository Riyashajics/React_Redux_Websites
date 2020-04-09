import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import React,{Component} from 'react';
import './App.css';
import { Fragment } from 'react';

const users = [
  {
    name: `a1`,
  },
  {
    name: `RACHIT SHAJI`,
  },
  {
    name: `SHAJI MS`,
  },
];

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};
const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

const UsersPage = () => {
  return (
    <div>
      {
        users.map((user, index) => (
          <h5 key={index}>
            <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
          </h5>
        ))
        }
    </div>
        
  );
};

const UserPage = ({ match, location }) => {
  const { params: {Id } } = match;

  return (
    <Fragment>
      <p>
        <strong>User ID: </strong>
        {Id}
      </p>
      <p>
        <strong>User Name: </strong> 
        {users[Id - 1].name}
      </p>
    </Fragment>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:Id" component={UserPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};
export default App;