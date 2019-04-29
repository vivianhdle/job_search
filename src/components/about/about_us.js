import React, { Component, Fragment } from 'react';
import AboutMe from './about_me';

class AboutUs extends Component {
    state = {
        developers: [
            {
                name: 'Jun Giang',
                image: 'handsome_image.png',
                bio: 'i did stuff'
            },
            {
                name: 'Kenneth Li',
                image: 'even_more_handsome_image.png',
                bio: 'i did more stuff'
            },
            {
                name: 'Vivian Le',
                image: 'princess_vivian.png',
                bio: 'i did the most stuff, peasants'
            }
        ]
    }
    componentDidMount() {
        this.props.handlePageRender('About Us');
    }
    buildBios(dev) {
        return (
            <div key={dev.name} className="about_me">
                <AboutMe {...dev}/>
            </div>
        )
    }
    render() {
        const { developers } = this.state;
        let devBios = developers.map(this.buildBios);
        return (
            <Fragment>
                {devBios}
            </Fragment>
        )
    }
}

export default AboutUs;