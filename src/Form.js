import React from 'react';
import "./App.css";
import { IoIosBug } from 'react-icons/io';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";

class Form extends React.Component {

    

    render () {
        return (
            <MDBContainer>
            <MDBRow >
            <MDBCol> 
             
                <form onSubmit={(evt)=> this.props.handleSubmit(evt)}>
                    <input  style={{width:'400px',height:'90px',borderColor:'aqua'}} placeholder="Share your experience...  "  value={this.props.inputValue}
                    
                    onChange={(evt)=> this.props.handleChange(evt)} /> <button type="submit"> <IoIosBug /></button>
                </form>

               
          
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default Form;