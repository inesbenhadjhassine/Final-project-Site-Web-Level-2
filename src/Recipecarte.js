import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer, MDBRow } from 'mdbreact';
import {Link} from 'react-router-dom';

const Recipecarte = ({title,calories,image}) => {
    return (
        <MDBContainer>
<MDBCol>
    <MDBRow>
      <MDBCard style={{ width: "25rem",borderRadius: '10px'}}>
        <MDBCardImage style={{borderRadius: '15%', backgroundPosition:'center', maxWidth:'300px'}} src={image} />
        <MDBCardBody>
          <MDBCardTitle><h3>{title}</h3></MDBCardTitle>
          <MDBCardTitle><h5>{Math.round(calories)}cal</h5></MDBCardTitle>
          <MDBCardText>
          <button> <Link to="/Confinement">View Recipe</Link></button>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBRow>
    </MDBCol>
</MDBContainer>

    );
}

export default Recipecarte;