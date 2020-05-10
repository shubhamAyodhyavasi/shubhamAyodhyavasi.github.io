import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TitleList extends Component {
    render() {
        return (
            <div className="c-title-list">
                {
                    this.props.list.map(
                        (item, key) => <TitleListItem {...item} key={key} />
                    )
                }
                
            </div>
        )
    }
}

const TitleListItem = ({label, value, valueLink}) => {
    
    return(
        <div className="c-title-list__item">
            <span className="c-title-list__label">{label}: </span>
            {
                value && (valueLink ? <a href={valueLink} className="c-title-list__value app-link">{value}</a>: <span className="c-title-list__value">{value}</span>)
            }
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList)
