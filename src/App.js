import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2019',
            newDeadline: ''
        }
    }  
    
    handleChange = (e) => {
        this.setState({
            newDeadline: e.target.value 
        })
    }

    handleClick = () => {
        this.setState({
            deadline: this.state.newDeadline
        })
    }
    render() {
        return(
            <Container>
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
               <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl  style={{margin: 'auto'}}
                    className={"Deadline-input"}
                    onChange={this.handleChange}
                     type="text" 
                    placeholder="ex: December 9, 2019"/>
                    <Button style={{margin: 'auto'}} onClick={this.handleClick}>Submit</Button>
                </Form>
               
            </div>
            </Container>
        )
    }

}
export default App;