import React from "react";
import ThemeSwitcher from "./ThemeSwitch";
import "./Header.css";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo
        }
    }
    
    componentWillReceiveProps({logo}) {
        this.setState({...this.state,logo})
    }

    render() {
        return(
            <header>
                <div className="row">
                    <div className="logo">
                        <img src={this.state.logo} alt="This is an alternative"/>
                    </div>
                    <div className="search-bar">
                        <i className="icon icon-moonsearch"></i>
                        <input type="text" name="search" id="search" placeholder="Search brands" autoComplete="off"/>
                    </div>
                    <ThemeSwitcher />
                </div>
            </header>
        )
    }
}

export default Header;