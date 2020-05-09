import React from 'react';
import imgPack from '../../images';

const Banner = () => {

    return (
        <div className="c-banner bg-white py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img className="img-fluid" src={imgPack.banner} alt="shubham"/>
                    </div>
                    <div className="col-md-7">
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

export default Banner;
