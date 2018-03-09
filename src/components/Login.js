import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { updateEmail, updatePassword, loginUser, buildLoginData } from '../actions/loginActions';

function mapStateToProps(state) {
  return {
      login: state.login,
      loggedData: state.loggedData
    }
}

function mapDispatchToProps(dispatch) {
  return {
    updateEmail: (data) => dispatch(updateEmail(data)),
    updatePassword: (data) => dispatch(updatePassword(data)),
    loginUser: (data) => dispatch(loginUser(data))
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        const { login } = this.props;
        this.props.loginUser(buildLoginData(login.email, login.password));
    }

    render() {
        const { login, updateEmail, updatePassword } = this.props;

        return (
            <div>
                <MuiThemeProvider>
                <div className="center">
                    <AppBar title="Login" />
                    <TextField hintText="Enter your Username" floatingLabelText="Username" value={login.email}
                        onChange = {(event) => updateEmail(event.target.value)} />
                    <br/>
                    <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" value={login.password}
                        onChange = {(event) => updatePassword(event.target.value)}/>
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.login()}/>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
 margin: 15,
};

Login.propTypes = {
    login: PropTypes.object,
    updateEmail: PropTypes.func,
    updatePassword: PropTypes.func,
    loginUser:  PropTypes.func
}
export default Login;