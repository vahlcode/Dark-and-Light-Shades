import React from "react";
import "./footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.author,
        }
    }

    render() {
        return(
            <section className="footer">
                <p>Built with excess <span className="icon icon-moonheart"></span> in Onitsha, Nigeria by {this.state.author}</p>
                <ul>
                    <li><a href="https://twitter.com/Vahlcode"><span className="icon icon-moontwitter"></span></a></li>
                    <li><a href="https://github.com/vahlcode"><span className="icon icon-moongithub"></span></a></li>
                    <li><a href="https://desyn.com.ng"><span className="icon icon-moonwordpress"></span></a></li>
                </ul>
            </section>
        )
    }
}

export default Footer;