import React from 'react';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Colors from "./Colors";
import Preloader from "./Components/Preloader";
import Footer from "./Components/Footer";
import './App.css';
import './Assets/Icons/icon.css';
import './Assets/animate.css';
import Logo from "./Assets/logo.svg";
import LogoDark from "./Assets/logo-dark.svg";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      logo: Logo,
      loaded: null
    }
    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    this.updateTheme();
    const body = document.querySelector('body');
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        this.setState({...this.state, loaded: false});
        body.style.overflow = "hidden";
      } else{
        this.setState({...this.state, loaded: true});
        body.style.overflow = "auto";
      }
    }
  }

  updateTheme() {
    const currentTheme = localStorage.getItem('theme');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            this.setState({...this.state, logo: LogoDark});
        } else{
          this.setState({...this.state, logo: Logo});
        }
    }
  }

  render () {
    return (
      <div className = "App" >
        <Preloader hide={this.state.loaded} />
        <Header logo={this.state.logo} />
        <Body colors={Colors}/>
        <Footer author="Valentine Elum" />
      </div>
    )
  }
}

export default App;