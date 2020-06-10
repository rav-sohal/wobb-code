import React, { Component } from 'react';
import '../home/home.css';

class Home extends Component {

    state = {
        intro: "Nothing Better in the Market",
        welcome: 'Welcome to Brown-Forman',
        title: 'Way of <br /> Brand Building ',
        body: 'Scroll down to explore the content, then select a chapter to start your journey. <br /> <br />If this is your first visit, we recommend you start at the begining and work your way through.',
    }

    render() {
        return (
            <div className="home">
                    <div className="pt-5 main-contain">
                        <h1>{this.state.intro}</h1>
                        <div className='text-box'>
                              <h2>{this.state.welcome}</h2>
                              <p className="large-text" dangerouslySetInnerHTML={{ __html: this.state.title }} />
                              <p className="home-body" dangerouslySetInnerHTML={{ __html: this.state.body }} />
                        </div>
                    </div>
            </div>
        )
    }
}
export default Home;
