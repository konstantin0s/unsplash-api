import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateIn } from 'react-animations';
import './css/loading.css';

const rotatePin = keyframes`${rotateIn}`;
 
const RotateDiv = styled.div`
  animation: infinite 5s ${rotatePin};
`;


function ShowDetail() {
  return (
    <div className="loader text-center">
     <RotateDiv>
       <h1 className="text">
    Counting Sheeps
       </h1>
     </RotateDiv>
    </div>
  );
}

export default ShowDetail;