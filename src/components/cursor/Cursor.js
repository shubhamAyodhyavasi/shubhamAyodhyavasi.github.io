import React from 'react';

class Cursor extends React.Component{
    constructor(){
        super();
        this.state = {
            pos: [0,0],
            posBack: [0, 0]
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
            clientY
        } = e
        this.setState({pos: [clientX, clientY]});
        setTimeout(() => {
            this.setState({posBack: [clientX, clientY]});
        }, 50);
    };
    render(){
        return (
            <>
            <div style={{
                top: this.state.pos[1],
                left: this.state.pos[0],
            }} className="c-cursor" />
            <div style={{
                top: this.state.posBack[1],
                left: this.state.posBack[0],
            }} className="c-cursor c-cursor--back" />
            </>
        )
    }
}

export default Cursor;
