import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

export default class App extends Component {
    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        const { language } = this.state
        return (
            <div className="ui container">
                <div>
                    Select language:
                   <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                    <i className="flag th" onClick={() => this.onLanguageChange('thailand')}></i>

                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div >
        )
    }
}
