/* eslint-disable max-len */

import React from 'react';
import Formsy from 'formsy-react-2';
import { FormsyText } from 'formsy-mui';
import { browserHistory, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-flexbox-grid';
import handleLogin from '../../modules/login';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./Login.styl"

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      canSubmit: false,
    };
  }

  handleSubmitLogin() {
    handleLogin({ component: this });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render() {
    const errorMessages = {
      emailError: 'Is this email address valid?',
      passwordError: 'Please provide at least 6 characters.',
    };
    return (
      <Col id={this.props.id} className={classNames(this.props.className, "Login")}>
        <header>
          <Link className="back" onClick={browserHistory.goBack}>Back</Link>
          <h3 className="page-header">Welcome back</h3>
        </header>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.handleSubmitLogin.bind(this)}
        >
          <FormsyText
            type="email"
            name="emailAddress"
            fullWidth={true}
            ref="emailAddress"
            validations="isEmail"
            validationError={errorMessages.emailError}
            required
            hintText="Enter a valid email address"
            floatingLabelText="Email Address"
          /><br/>
          <FormsyText
            type="password"
            name="password"
            fullWidth={true}
            ref="password"
            validations={{ minLength: 6 }}
            validationError={errorMessages.passwordError}
            hintText="6 characters minimum"
            floatingLabelText="Password"
          />
          <div className="form-actions">
            <RaisedButton
              type="submit"
              label="Login"
              primary={true}
              disabled={!this.state.canSubmit}
            />
          </div>
          <Link className="recover-password" to="/recover-password">Forgot Password?</Link>
        </Formsy.Form>
        <footer>
					Still without an account?
          {' '}
          <Link to="/signup">Create one</Link>
        </footer>
      </Col>
    );
  }
}
