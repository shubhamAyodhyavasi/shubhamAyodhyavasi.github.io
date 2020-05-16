import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames';


const Item = ({ position, children, title }) => {
    const positionClass = position && `c-timeline__item--${position}`
    const innerPosClass = position && `c-timeline__item-inner--${position}`
    return (
        <div className={classNames("c-timeline__item", positionClass)}>
            <div className={classNames("c-timeline__item-inner", innerPosClass,)}>
                <div className="c-timeline__item-box">
                    <h3 className="c-timeline__item-title">{title}</h3>
                    {children}
                </div>
            </div>
        </div>
    )
}
const StarterItem = ({title, children}) => {
    return (
        <Item position="start">
            {title && <p className="display-5">{title}</p>}
            {children}
        </Item>
    )
}
const EndItem = ({title, children}) => {
    return (
        <Item title={title} position="end">
            {children}
        </Item>
    )
}
export class TimeLine extends Component {
    render() {
        const {
            data
        } = this.props
        return (
            <div className="c-timeline py-3">
                <div className="container">
                    <div className="c-timeline__item-holder">
                        <div className="c-timeline__line"></div>
                        {data && <>
                        {data.start && <StarterItem title={data.start.title} />}
                        {
                            (data.items || []).map((item, key) => {
                                return <Item key={key} title={item.title} position={key % 2 === 0 ? "left" : "right"} >
                                    {item.content}
                                </Item>
                            })
                        }
                        {data.end && <EndItem title={data.end.title} />}
                        </>}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
