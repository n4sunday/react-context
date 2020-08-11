import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class Button extends Component {
    static contextType = LanguageContext
    render() {
        const submit = this.context === 'english' ? 'Submit' : 'ยอมรับ'
        return (
            <button className="ui primary button">
                {submit}
            </button>
        )
    }
}
