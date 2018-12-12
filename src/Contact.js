import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

export const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBBtn size="lg" tag="a" floating social="fb">
        <MDBIcon icon="facebook" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="gplus">
        <MDBIcon icon="google-plus" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="li">
        <MDBIcon icon="linkedin" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon icon="instagram" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="pin">
        <MDBIcon icon="pinterest" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="yt">
        <MDBIcon icon="youtube" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="vk">
        <MDBIcon icon="vk" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="so">
        <MDBIcon icon="stack-overflow" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="slack">
        <MDBIcon icon="slack" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="git">
        <MDBIcon icon="github" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="comm">
        <MDBIcon icon="comments" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="dribbble">
        <MDBIcon icon="dribbble" />
      </MDBBtn>
    </MDBContainer>
  );
}

export default SocialButtonsPage;