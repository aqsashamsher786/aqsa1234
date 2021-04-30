import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {  Element } from "react-scroll";

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const AccessibilityContainer = styled.div`
  width: 80%;
  display: flex;
  border-top: 1px solid #cdcdcd;
  padding-top: 12px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 1.5rem;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: red;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 1rem;

  &:not(:last-of-type) {
    margin-right: 11px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;

export function Footer(props) {
  return (
    <Element name="FooterSection" id = "footer">
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo small />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Just view and read content</MotivationalText>
      <MotivationalText>and choose the best plan</MotivationalText>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
        <Link href ='https://www.youtube.com/watch?v=I2UBjN5ER4s'>
        <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon></Link>
          <Link href ='https://www.youtube.com/watch?v=I2UBjN5ER4s'>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon></Link>
          <Link href ='https://www.youtube.com/watch?v=I2UBjN5ER4s'>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon></Link>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; All rights reserved</RightsReserved>
    </FooterContainer></Element>
  );
}
