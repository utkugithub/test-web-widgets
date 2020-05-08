import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
    componentDidMount () {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="2b617e32-969e-4b91-9e68-dc1a981724e3";
    (function(){d=document;s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
    })(); 
  
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming (very) soon ! :)
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
