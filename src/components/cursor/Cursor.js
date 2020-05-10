import React from 'react';
import classNames from 'classnames';

class Cursor extends React.Component{
    constructor(){
        super();
        this.state = {
            pos: [0,0],
            posBack: [0, 0],
            isClickable: false,
        }
    }
    componentDidMount(){
        document.addEventListener("mousemove", this.handleMouseMove);
    }
    componentWillMount(){
        document.removeEventListener("mousemove", this.handleMouseMove);
    }
    handleMouseMove = e => {
        const {
            clientX,
            clientY,
            target
        } = e
        const hoverClassList = [
            "nav-link",
            "app-link",
            "btn"
        ]
        const classList = (target?.className || "").split(" ");
        const isClickable = classList.some(cls => hoverClassList.includes(cls) )
        
        this.setState({
            pos: [clientX, clientY],
            isClickable
        });
        setTimeout(() => {
            this.setState({posBack: [clientX, clientY]});
        }, 50);
    };
    render(){
        const {
            pos,
            posBack,
            isClickable
        } = this.state
        return (
            <>
            <div style={{
                top: pos[1],
                left: pos[0],
            }} className={classNames("c-cursor", {
                "c-cursor--hovered": isClickable
            })} />
            <div style={{
                top: posBack[1],
                left: posBack[0],
            }} className={classNames("c-cursor c-cursor--back", {
                "c-cursor--hovered": isClickable
            })} />
            </>
        )
    }
}

export default Cursor;
