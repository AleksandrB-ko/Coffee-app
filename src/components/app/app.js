import { Component } from 'react';


import Main from '../main/main';

import './app.scss';



class App extends Component {
    constructor(props) {
        super(props);
        
    };

render() {
    
    return (
      <div className="app">
        <Main/>
        
      </div>
    
    );
  }
}

export default App;
