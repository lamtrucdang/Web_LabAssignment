import * as React from 'react';

class AlertButton extends React.Component {
  render() {
    return <button onClick={() => alert("Alert!!!!!")}>{this.props.children}</button>
  }
}

export default AlertButton;