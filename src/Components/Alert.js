import React from "react";
import "./Alert.css";

class Alert extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            type: props.type,
            message: props.message
        }
    }

    componentDidMount() {
        const closeButton = document.querySelector('close-alert');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.setState({...this.state, alert: false});
            })
        }
    }

    
    componentWillMount(){
        const closeButton = document.querySelector('close-alert');
        if (closeButton) {
            closeButton.removeEventListener('click', () => {
                this.setState({...this.state, alert: false});
            })
        }
    }

    componentWillReceiveProps({alert}) {
        this.setState({...this.state,alert})
    }

    render() {
        return(
            <div className={`alert ${this.state.type}`} style={{display: (this.state.alert) ? "flex" : "none"}}>
                <button className="close-alert">
                    <span className="icon icon-mooncancel-circle"></span>
                </button>
                <div className="animated rubberBand alert-message">
                    {this.state.message}
                </div>
            </div>
        )
    }
}

export default Alert;