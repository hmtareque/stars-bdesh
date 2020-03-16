import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
   
    state = {
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

    handleChange = (e) => {
        this.setState({ searchedField: e.target.value });
    }

    render() {

        const {stars, searchedField} = this.state;
        const filteredStars = stars.filter(star => 
            star.name.toLowerCase().includes(searchedField.toLowerCase())
            );

        return (
            <div className="App">
                <h1>Family Indexo</h1>
                <SearchBox placeholder="Search" handleChange={this.handleChange}/>
                  <CardList stars={filteredStars}/>
            </div>
          );
    }
}

export default App;
