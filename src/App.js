import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            'stars' : [
                    { 
                        id: 'su',
                        name: 'Sharif Uddin',
                        email: '',
                    },
                    { 
                        id: 'zb',
                        name: 'Zahura Begum',
                        email: '',
                    },
                    { 
                        id: 'hmt1',
                        name: 'Hasan Tareque',
                        email: '',
                    },
                    { 
                        id: 'ea',
                        name: 'Eliza Ahmed',
                        email: '',
                    },
                    { 
                        id: 'hmt2',
                        name: 'Hussain Taher',
                        email: '',
                    },
                    { 
                        id: 'ms',
                        name: 'Mariam Sikkia',
                        email: '',
                    },
                    { 
                        id: 'hmt3',
                        name: 'Hussain Tawhid',
                        email: '',
                    },
                    { 
                        id: 'hmt4',
                        name: 'Hussain Taimim',
                        email: '',
                    },
                ]
        };
    }
    render() {
        return (
            <div className="App">
              { 
              this.state.stars.map( stars => 
              <div>{ stars.name }</div> 
              )
              }
            </div>
          );
    }
}

export default App;
