import React, { Component } from 'react';
import '../part1/part1.css';

class Part1 extends Component {

    state = {
        title: 'Part 1 <br /> B-F Brand Building Principles ',
        body: 'Scroll down to explore the content, then select a chapter to start your journey. <br /> <br />If this is your first visit, we recommend you start at the begining and work your way through.',
        ch1: "Chapter 1 <br /> Brand Foundations",
        ch2: "Chapter 2 <br /> B-F Growth Framework",
        ch3: "Chapter 2.1 <br /> Mental Availability",
        ch4: "Chapter 2.2 <br /> Physical Availability",
        ch5: "Chapter 3 <br /> B-F Brand B"
    }

    render() {
        return (
            <div className="part1">
                    <div className="pt-5 main-contain">
                        <div className='part-text-box'>
                              <p className="large-text" dangerouslySetInnerHTML={{ __html: this.state.title }} />
                              <div className="chapters">
                              <p className="mb-4 focus-ch" dangerouslySetInnerHTML={{ __html: this.state.ch1}} />
                              <p className="mb-4" dangerouslySetInnerHTML={{ __html: this.state.ch2}} />
                              <p className="mb-4" dangerouslySetInnerHTML={{ __html: this.state.ch3}} />
                              <p className="mb-4" dangerouslySetInnerHTML={{ __html: this.state.ch4}} />
                              <p className="mb-4" dangerouslySetInnerHTML={{ __html: this.state.ch5}} />
                              </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Part1;
