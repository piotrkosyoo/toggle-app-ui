import React, { Component } from 'react';
import AppContainer from './container/AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className="center">
        <MuiThemeProvider>
          <AppContainer/>
        </MuiThemeProvider>
      </div>
    );
  }
}
