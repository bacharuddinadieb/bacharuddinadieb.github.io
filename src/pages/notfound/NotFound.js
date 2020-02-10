import React from 'react';
import { Button, Toast, WhiteSpace } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import logo from '../../logo.svg';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WhiteSpace />
        <p>Oops, Sepertinya anda tersesat.</p>
        <WhiteSpace />
        <Button
          type="ghost"
          size={'large'}
          style={{ width: 200, height: 50 }}
          onClick={() => {
            Toast.loading('Loading...', 1, () => {
              window.location.replace('/home');
            });
          }}
        >
          Kembali
        </Button>
      </header>
    </div>
  );
}

export default App;
