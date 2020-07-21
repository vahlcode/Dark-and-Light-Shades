import React from "react";
import Cards from "./Cards";
import Alert from "./Alert";
import "./Body.css";
import NoColor from "../Assets/no-color.svg";

class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            colors: props.colors,
            alert: null
        }
        this.handleClicks = this.handleClicks.bind(this);
        this.copyColor = this.copyColor.bind(this);
    }

    componentDidMount(){
        document.addEventListener('click', this.handleClicks);
    }

    componentWillMount(){
        document.removeEventListener('click', this.handleClicks);
    }
    
    handleClicks(e) {
        const clickedElement = e.target;
        if (clickedElement.classList.contains('shade')) {
            this.copyColor(clickedElement);
        } else if(clickedElement.classList.contains('icon-mooncancel-circle')){
            this.setState({alert: false});
        }
    }

    copyColor(element){
        if (window.getSelection) {
            if (window.getSelection().empty) { // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) { // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) { // IE?
            document.selection.empty();
        }
    
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select().createTextRange();
            document.execCommand("copy");
            this.setState({alert: true});
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(element);
            window.getSelection().addRange(range);
            document.execCommand("copy");
            this.setState({alert: true});
        }
    }
    
    render() {
        return(
            <section className="colors-section">
                <h1>Colors</h1>
                
                {(this.state.colors) ? 
                <div className="colors">
                    {this.state.colors.map((color, index) => (
                    <Cards key={index} color={color}/> )) 
                    }
                </div> : 
                <div className="no-colors">
                    <img src={NoColor} alt="No colors found"/>
                    <h1>
                        Sorry..
                    </h1>
                    <p>
                        No Colors found!
                    </p>
                </div>}

                <Alert message="Copied!" type="success" alert={this.state.alert}/>
            </section>
            
        )
    }
}
export default Body;