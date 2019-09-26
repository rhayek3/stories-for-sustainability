import React from 'react';
import logo from '../../logo2.png';
import { compose } from 'recompose';
import cover from '../../images/cover.jpg';

import { withAuthorization, withEmailVerification } from '../Session';

const HomePage = () => (
  <div className="Landing-header">
    <h2>Welcome!</h2>
    <img src = {cover} className="book-cover"></img>
    <img src = {cover} className="book-cover"></img>
  </div>
);
const condition = authUser => !!authUser;
export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
