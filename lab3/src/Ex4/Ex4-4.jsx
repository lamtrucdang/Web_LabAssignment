import * as React from "react";

class Card extends React.Component{
    render() {
        const { title, text } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        );
    }
}