import React from 'react';
import { Banner, AboutMe, TimeLine, Carousel } from '../components';

const HomePage = () => {
    const timelineData = {
        start: {
            title: "My Journey"
        },
        items: [
            {
                title: "Engineering",
                content: <>
                    <p>Bachelor In  Computer Science
                        <br />
                       completed my bachelor form <i>Sagar Institute of research and technology,</i> Indore.
                    </p>
                </>,
            },
            {
                title: "More on Front-end",
                content: <>
                    <p>
                        learn advance technology <>React.js</>, <i>React Native</i>, 
                        <i>REST Api</i> and more.
                    </p>
                </>
            },
            {
                title: "Front-end",
                content: <>
                    <p>
                        learn <>jQuery</> and <i>Java script</i>.
                        <br />
                        and more front-end tools like fabric.js etc.
                    </p>
                </>
            },
            {
                title: "Next job",
                content: <>
                    <p>
                        Switch to <i>thirdEssential IT Solution</i> as a web designer.
                    </p>
                </>
            },
            {
                title: "Web Designing",
                content: <>
                    <p>
                        learn web design.
                    </p>
                </>
            },
            {
                title: "First Professional Job",
                content: <>
                    <p>
                        Start first job as a graphic designer in <i>WebOnlyWeb IT Solution</i>, new palasia, Indore.
                    </p>
                </>
            },
            {
                title: "Polytechnic",
                content: <>
                    <p>Completed Diploma In  Computer Science
                        <br />
                        form <i>Dhar Polytechnic Collage, Dhar</i>.
                    </p>
                </>,
            },
            {
                title: "Matriculate",
                content: <>
                    <p>Pass Matric from <i>Divya Convent H.S. school</i>, vijay nagar, Indore.</p>
                </>,
            },
            {
                title: "DTP",
                content: <>
                    <p>Learn Desktop Publishing from <i>Maa Kankeshwari Infotech</i>, Indore.</p>
                </>,
            },
        ]
    }
    return(
        <div className="p-home">
            <Banner />
            <AboutMe />
            <TimeLine data={timelineData} />
            <Carousel />
        </div>
    )
}

export default HomePage