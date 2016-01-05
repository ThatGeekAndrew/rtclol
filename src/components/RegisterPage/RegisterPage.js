/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './RegisterPage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'New User Registration';

@withStyles(s)
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          Username:<br />
          <input type="text" />
          <br /><br />

          Email:<br />
          <input type="text" />
          <br /><br />

          Password:<br />
          <input type="password" />
          <br /><br />

          Confirm Password:<br />
          <input type="password" />
          <br /><br />

          Age:<br />
          <input type="number" min="0" max="120" />
          <br /><br />

          Email:<br />
          <input type="text" />
          <br /><br />
          
          <button>Sign Me Up!</button>
        </div>
      </div>
    );
  }

}

export default RegisterPage;
