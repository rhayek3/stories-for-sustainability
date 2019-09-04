import React from 'react';
import logo from './logo4.png';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Button from '@material-ui/core/Button';
import Register from './Register';
import {Router, Route, Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
})); 

function App() {
  const classes = useStyles();
  const link = props=> <Link to ="/register" {...props}/>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Stories for Sustainability
        </p>
        {/* <Router> */}
          <div>
            <Button variant="contained" to="/register" component={Register} className = {classes.button}>Register</Button>
            <Button variant="contained" component ={Register} to="/login" className = {classes.button}>Login</Button>
          </div>


        {/* </Router> */}
      </header>
    </div>
  );
}

export default App;
