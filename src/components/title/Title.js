import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Title extends Component {
    render() {
        return (
            <div className="c-title">
                <h3 className="display-5">{this.props.title} {this.props.children}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
