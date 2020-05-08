import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
    componentDidMount () {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp=[];
      window.CRISP_WEBSITE_ID="a19b5940-724e-4892-aa89-545ea5c6958b";
      (function(){d=document;
                  s=d.createElement("script");
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
