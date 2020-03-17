import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Router} from 'react-router-dom'
import Navbar from "./components/Header/Navbar";
import Main from "./components/Body/Main";
import {I18nextProvider} from 'react-i18next';
import i18next from './i18n';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}
ReactDOM.render(
  <I18nextProvider i18n={i18next}>
  <App/>
</I18nextProvider>
, document.getElementById('root'));
