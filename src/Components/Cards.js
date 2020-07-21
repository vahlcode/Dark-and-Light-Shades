import React from "react";
import "./Card.css";

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }

    render() {
        return(
            <div className="color">
                <div className="shades">
                    {
                        this.state.color.shades.map((shade, index) => (
                            <div key={index} className="shade" style={{color: (shade !== "#fff" || shade !== "#ffffff") ? "#FFFFFF" : "#01152A", background: shade}}>
                                <span className="icon icon-mooncopy"></span>   <span>{shade}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="brand">
                    <img src={this.state.color.logo} alt={this.state.color.brand}/>
                    <span>{this.state.color.brand}</span>
                </div>
            </div>
        )
    }
}

export default Card;