import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

export class TitleList extends Component {
    render() {
        
        const isDark = this.props.themeMode === "dark"
        return (
            <div className="c-title-list">
                {
                    this.props.list.map(
                        (item, key) => <TitleListItem isDark={isDark} {...item} key={key} />
                    )
                }
                
            </div>
        )
    }
}

const TitleListItem = ({label, value, valueLink, isDark}) => {
    
    return(
        <div className="c-title-list__item">
            <span className={classNames("c-title-list__label", {
                "text-light": isDark
            })}>{label}: </span>
            {
                value && (valueLink ? <a href={valueLink} className="c-title-list__value app-link">{value}</a>: <span className="c-title-list__value">{value}</span>)
            }
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    themeMode: state.theme.mode
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList)
