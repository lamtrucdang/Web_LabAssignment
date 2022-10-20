import * as React from 'react';

class MySection extends React.Component{
    render() {
        return(
            <section>
                <h2>MySection</h2>
                {this.props.children}
            </section>
        );
    }
}

export default MySection;