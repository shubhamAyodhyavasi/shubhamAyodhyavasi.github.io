import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Title, TitleList } from '..'
import imgPack from '../../images'

export class AboutMe extends Component {
    render() {
        const listOne = [
            {
                label: "Birthday",
                value: "27th September 1996",
            },
            {
                label: "Age",
                value: "23 Yr",
            },
            {
                label: "Residence",
                value: "India",
            },
            {
                label: "Address",
                value: "Indore, India (452010)",
            },
        ]
        const listTwo = [
            {
                label: "E-mail",
                value: "shubhamgupta279@gmail.com",
                valueLink: "mailto:shubhamgupta279@gmail.com"
            },
            {
                label: "Phone",
                value: "+91 898966776",
                valueLink: "tel:+918982966776"
            },
            {
                label: "Residence",
                value: "India",
            },
            {
                label: "Address",
                value: "Indore, India (452010)",
            },
        ]
        return (
            <div className="c-about-me pt-5">
                <div className="pt-5"></div>
                <div className="c-about-me__inner bg-light py-5">
                    <div className="container">
                        {/* <div className="p-5"></div> */}
                        <Title>About Me</Title>
                        <div className="row flex-row-reverse"> 
                            <div className="col-md-4 c-about-me__img-wrapper">
                                <img className="img-fluid c-about-me__img" src={imgPack.about} alt="about" />
                            </div>
                            <div className="col-md-8">
                                <p className="text-justify">
                                    Hi I am a front-end developer, graduate of <i>Computer Science</i>. I have more than 3 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience.
                                    <br/>
                                    I am also a <span className="text-info">React JS</span> Developer that have been developing front-end Javascript based solutions for over 2 years.
                                    I prefer to develop using ES6 and more newer tools and codes with backward capability. 
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TitleList list={listOne} />
                                    </div>
                                    <div className="col-md-6">
                                        <TitleList list={listTwo} />
                                    </div>
                                    <div className="col-12 text-center pt-4">
                                        <a href="#" className="btn btn-outline-dark">Download CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)
