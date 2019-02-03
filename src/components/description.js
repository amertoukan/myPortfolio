import React from 'react';

class Description extends React.Component {
    render(){ 
        return (
            <div>
            {this.props.line1 != null && <p style = {{color:'white'}}>{this.props.line1}</p>}
            {this.props.line2 != null && <p style = {{color:'white'}}>{this.props.line2}</p>}
            {this.props.line3 != null && <p style = {{color:'white'}}>{this.props.line3}</p>} 
            </div>
        
        )
    }
}

export default Description