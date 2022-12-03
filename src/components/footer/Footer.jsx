import React from "react";
import "./FooterStyles";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  styleIcon,
} from "./FooterStyles";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <FooterLink href="https://www.instagram.com/" target="_blank">
                <i>
                  <styleIcon>
                    <AiFillInstagram /> Instagram
                  </styleIcon>
                </i>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="https://github.com/AdamFaylo" target="_blank">
                <i>
                  <span>
                    <AiFillGithub /> github
                  </span>
                </i>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              {" "}
              <FooterLink href="https://www.facebook.com/" target="_blank">
                <i>
                  <span>
                    <FaFacebook /> Facebook
                  </span>
                </i>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <Heading>
                <FooterLink href="https://web.whatsapp.com/" target="_blank">
                  <i>
                    <span>
                      <FaFacebook /> WhatspApp
                    </span>
                  </i>
                </FooterLink>
              </Heading>
            </Heading>
            <FooterLink href="#" target="_blank"></FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
