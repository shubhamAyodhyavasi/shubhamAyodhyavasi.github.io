import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleThemeMode, setTheme } from '../../services/redux/actions/themeAction'

class ThemeSwitch extends Component {
    themeChange = () => {
        this.props.toggleThemeMode()
        this.props.setTheme({
            isSetByUser: true
        })
    }
    render() {
        const isDark = this.props.themeMode === "dark"
        return (
            <div className="c-theme-switch">
                <input checked={!isDark} onChange={this.themeChange} className="app-link c-theme-switch__checkbox" type="checkbox" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    themeMode: state.theme.mode
})

const mapDispatchToProps = {
    toggleThemeMode,
    setTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
