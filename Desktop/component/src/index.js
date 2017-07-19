import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Company from './containers/CompanyProfile';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = () => (
  <MuiThemeProvider>
    <Dashboard />
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
