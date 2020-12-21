import React from 'react';
import styled, { css } from 'styled-components';
// import SNSIcon from '../sns-icon/sns-icon.component';

import styles from './custom-button.module.scss';

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-bottom: 5px;
`

const isSNSSignIn = css`
  min-width: 50px;
  width: 30vw;
  padding: 0 10px 0 10px;
  background-color: white;
  color: black;
  border: 1px solid grey;
  margin-left: 10px;
  margin-right: 10px;

  &:nth-child(1) {
    margin-left: 0px;
  }

  &:nth-child(n) {
    margin-right: 0px;
  }

  &:hover {
    border: 1px solid #e88b8b;
  }
`

const StyledButton = styled.button`
  min-width: 80px;
  width: 100vw;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  background-color: #e88b8b;
  color: white;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:hover {
    background-color: #e54848;
    color: white;
    border: 1px solid #e54848;
  }
`

const CustomButton = ({ children, isSNSSignIn, iconType, showpop, ...otherProps }) => (
    <StyledButton {...otherProps}>
      <IconContainer>
        Test
      </IconContainer>
      {children}
    </StyledButton>
);

export default CustomButton;
