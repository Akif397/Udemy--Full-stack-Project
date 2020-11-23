import React, { Component } from 'react';

class Footer extends Component {
    state = {
        name: 'Akif'
    }

    changed = evt => {
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }

    render() {
        return (
            <React.Fragment>
                <h2 onClick={this.props.myAlert}>{this.props.trademark}</h2>
                <input value={ this.state.name } onChange={this.changed} type="Text"/>
            </React.Fragment>
        )
    }
}

export default Footer;