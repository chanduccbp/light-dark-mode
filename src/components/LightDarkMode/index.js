// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkTheme: true}

  themeStatus = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    let theme
    let themeButton

    if (isDarkTheme) {
      theme = 'dark-mode'
      themeButton = (
        <button onClick={this.themeStatus} type="button">
          Light Mode
        </button>
      )
    } else {
      theme = 'light-mode'
      themeButton = (
        <button onClick={this.themeStatus} type="button">
          Dark Mode
        </button>
      )
    }

    return (
      <div className="bg-container">
        <div className={theme}>
          <h1>Click To Change Mode</h1>
          {themeButton}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
