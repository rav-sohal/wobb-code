import React, { Component } from 'react';
import '../navigation/navigation.css';
import logo from '../../assets/images/logoM1.svg'
import banner from '../../assets/images/nextgenerationblack.svg'
import menu from '../../assets/images/menuClose.png'

class Nav extends Component {
    
    state = {
        title: "Navigation",
        scroll: "Scroll <br />to view contents",
        menu: false,
        menuTitle: "Find Our Way",
        intro: "Introduction",
        items: "Foreword <br />Acknowledgment of Contributions <br />Our Story <br /> Our Brand building convictions"
    }

    openMenu() {
        this.setState({
         menu: !this.state.menu  
        })
    }

    render() {

        return (
        <div className="nav">
                <img src={logo} alt="logo" className="logo" />
                <img src={banner} alt="banner" className="banner" />
                <p className="menu-text">Menu</p>
                <img src={menu} alt="banner" className="menu" onClick={()=>this.openMenu()}/>
                <div className="scroll-view" dangerouslySetInnerHTML={{ __html: this.state.scroll}} ></div>
                {
                    this.state.menu?
                    <div className="menu-div">
                        <h1 className="menu-title">{this.state.menuTitle}</h1>
                        <p className="menu-item">{this.state.intro}</p>
                        <p className="menu-items" dangerouslySetInnerHTML={{ __html: this.state.items}}></p>
                    </div>
                :null
                }
        </div>
        )
    }
}
export default Nav;
