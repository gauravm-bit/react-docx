import React from 'react';
import './Warn.css';

class Warn extends React.Component {
    render(props) {
        console.log(this.props);

        const element = <div className="warning" >
            <h2 className="text">Warning</h2>
        </div>
        return <div>
                {this.props.status ? element : "click on the button to see warning"}
        </div>
    }
}

export default Warn;