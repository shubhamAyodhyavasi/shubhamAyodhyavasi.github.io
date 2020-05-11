import React from 'react';
import imgPack from '../../images';
import { connect } from 'react-redux';
import classNames from 'classnames';

const Banner = (props) => {
    const isDark = props.themeMode === "dark";
    return (
        <div className={`c-banner py-5 `}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img className="img-fluid" src={imgPack.banner} alt="shubham"/>
                    </div>
                    <div className={classNames("col-md-7", {
                        "text-light": isDark,
                    })}>
                        <div className="p-5">
                            <h1 className="display-1">Hi!</h1>
                            <h3 className="display-4">I am a <i>Front-end</i> Developer, graduate of <i>Computer Science</i>.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    themeMode: state.theme.mode
})
export default connect(mapStateToProps)(Banner);
