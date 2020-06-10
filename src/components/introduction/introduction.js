import React, { Component } from 'react';
import '../introduction/introduction.css';
import rightIcon from '../../assets/images/right.svg'

class Introduction extends Component {

    state = {
        title: "Introduction",
        read: "read story"
    }

    render() {
        return (
            <div className="intro">
                <div className="pt-5 intro-contain">
                    <div className="pt-5"><div className="intro-text">{this.state.title}</div><br /><br />
                    <a href="/" className="read-link">{this.state.read} <img src={rightIcon} alt="icon" className="right-arrow" /></a>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Introduction;
