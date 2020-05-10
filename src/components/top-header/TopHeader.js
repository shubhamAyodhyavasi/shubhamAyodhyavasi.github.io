import React from 'react';
import classNames from 'classnames'
import { connect } from 'react-redux';

const TopHeader = (props) => {
    const textClass = props.themeMode === 'light' ? 'text-dark' : 'text-white'
    return (
        <div className={classNames("c-top-header p-3", {
            "bg-light": props.themeMode === 'light',
            "bg-black": props.themeMode === 'dark',
        })}>
            <div className="container">
                <div className={textClass}>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    themeMode: state.theme.mode
})
export default connect(mapStateToProps)(TopHeader);
