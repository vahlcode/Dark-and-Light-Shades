import React from "react";
import "./Preloader.css";

class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: props.show
        }
    }

    render() {
        return(
            <section className="preloader" style={{display: (this.props.hide) ? "none" : "flex"}}>
                <div className="loading-ring"></div>
            </section>
        )
    }
}

export default Preloader;