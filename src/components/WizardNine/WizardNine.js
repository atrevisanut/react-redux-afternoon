import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardNine extends Component {

    render(){
        return(
            <div>
                What's your address? <br />

                <input type="text" placeholder="Line One" onChange={this.props.updateAddLineOne}/>
                <input type="text" placeholder="Line Two" onChange={this.props.updateAddLineTwo}/>
                <input type="text" placeholder="Line Three" onChange={this.props.updateAddLineThree}/>
               
                
                <Link to="/wTen"><button > Next </button></Link>
            </div>
        )
    }
}

export default WizardNine;