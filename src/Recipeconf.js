import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBContainer, MDBRow } from 'mdbreact';



const Recipeconf = ({title,image,calories,ingredients}) => {
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
    <ul>
        {ingredients.map(ingredient=> (
            <li style={{listStyle:'none'}}>{ingredient.text}</li>
        ))}
    </ul>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  </MDBRow>
</MDBCol>
</MDBContainer>

);
}
export default Recipeconf;