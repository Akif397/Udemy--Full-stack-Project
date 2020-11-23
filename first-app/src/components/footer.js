import React, { Component } from 'react';

class Footer extends Component {
    state = {
        name: '',
        age: 35,
        isLogin: false
    }

    componentDidMount(){
        this.setState({name: 'MyName'})
    }

    changed = evt => {
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }

    render() {
        const animals = ['cat', 'tiger', 'lion', 'dog',]
        return (   
            <React.Fragment>
                { animals.map( animal => {
                    return(
                        <React.Fragment key={animal}>
                            <h1> { animal } </h1>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>             
                
        )
    }
}

export default Footer;