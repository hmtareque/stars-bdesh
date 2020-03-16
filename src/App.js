import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
                ],
                'searchedField': '',
        };
    }

    render() {

        const {stars, searchedField} = this.state;
        const filteredStars = stars.filter(star => 
            star.name.toLowerCase().includes(searchedField.toLowerCase())
            );

        return (
            <div className="App">
                <SearchBox placeholder="Search" handleChange={e => this.setState({ searchedField: e.target.value })}/>
                  <CardList stars={filteredStars}/>
            </div>
          );
    }
}

export default App;
