import React from 'react';
import Form from './Form';
import List from './List';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";
import "./App.css";


class Suggestionnew extends React.Component {
  state={
    inputValue:'',
    todos:[
      {value: ''}
  ]
}

handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value});
    }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newtodo= {
      value:this.state.inputValue,
    };
    const todos=this.state.todos;
    todos.push(newtodo)
    this.setState({inputValue:'',todos})
  }

 
  
   render () {
    return (
        <div className="figfond">
        <MDBContainer>
  <MDBRow >
  <MDBCol>          
<MDBCard className="my-5 px-5 pt-4" style={{maxWidth:'70%'}}>
<h1 style={{marginBottom:'50px'}}> Any Suggestions ! </h1>        
       <MDBCardBody className="py-0 sugforme">
<Form  handleChange={this.handleChange}
       inputValue={this.state.inputValue}
       handleSubmit={this.handleSubmit}  />            
       
        <List 
        todos={this.state.todos}   />    
         
            <div className="mdb-feed ">
              <div className="news sugfoto">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{marginRight:'20px'}}
                  />
                </div>
                <div className="excerpt sugforme">
                  <div className="brief">
                    <a href="#!" className="name">
                      John Doe
                    </a> added a recipe
                    <div className="date sugforme">1 hour ago</div>
                  </div>
                  <div className="feed-footer sugforme">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>5 likes</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news sugfoto">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{marginRight:'20px'}}
                  />
                </div>
                <div className="excerpt sugforme">
                  <div className="brief ">
                    <a href="#!" className="name">
                      Anna Smith
                    </a> added <a href="#!">2 new recipes</a>
                    
                  </div>
                  <div className="added-images">
                    <img
                      src="//s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18133520/051097050-01-slow-roasted-pork-shoulder-recipe-thumb1x1.jpg"
                      alt=""
                      className="z-depth-1 rounded mb-md-0 mb-2"
                      style={{width:'150px', height:'150px'}}
                    />
                    <img
                      src="//s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/10/27143959/58_MontrealSpicedSteakAndEggs_wide-thumb-1x1.jpg"
                      alt=""
                      className="z-depth-1 rounded"
                      style={{width:'150px', height:'150px'}}
                    />
                    <div className="date sugforme">4 hours ago</div>
                  </div>
                  <div className="feed-footer sugforme">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>18 likes</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news sugfoto">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{marginRight:'20px'}}
                  />
                </div>
                <div className="excerpt sugforme">
                  <div className="brief ">
                    <a href="#!" className="name ">
                      Danny Moore
                    </a> added a recipe
                    <div href="#!" className="date sugforme">
                      7 hours ago
                    </div>
                  </div>
                  <div className="feed-footer sugforme">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>11 likes</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news sugfoto">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{marginRight:'20px'}}
                  />
                </div>
                <div className="excerpt sugforme">
                  <div className="brief sugforme">
                    <a href="#!" className="name">
                      Lili Rose
                    </a> posted on her page
                    
                  </div>
                  <div className="added-text" style={{textAlign:'justify',textAlignLast:'justify', maxWidth:'400px'}}>
                
I've made these over and over, and it doesn't seem to matter how many I make, they disappear! The beans do shrivel considerable, but people also love them, so make far more than you think you'll eat. Huge hit!
                  </div>
                  <div className="date">2 days ago</div>
                  <div className="feed-footer sugforme">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>7 likes</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news sugfoto">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                    style={{marginRight:'20px'}}
                  />
                </div>
                <div className="excerpt sugforme">
                  <div className="brief ">
                    <a href="#!" className="name">
                      Kate Harrison
                    </a> added <a href="#!"> 2 new photos</a> of meals
                    
                  </div>
                  <div className="added-images">
                    <img
                      src="https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2020/03/13140313/turkey_flautas_square-500x500.jpg"
                      alt=""
                      className="z-depth-1 rounded mb-md-0 mb-2"
                      style={{width:'150px', height:'150px'}}
                    />
                    <img
                      src="https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/07/24090543/35_SmashedPotatoesPeas_wide-thumb-16x9-thumb-1x1.jpg"
                      alt=""
                      className="z-depth-1 rounded"
                      style={{width:'150px', height:'150px'}}
                    />
                    <div className="date sugforme">3 days ago</div>
                  </div>
                  <div className="feed-footer sugforme">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>53 likes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>  
            </MDBCardBody>
            </MDBCard>
            </MDBCol>
         </MDBRow>

  </MDBContainer>
  </div>
    );
  }
  }
export default Suggestionnew;
