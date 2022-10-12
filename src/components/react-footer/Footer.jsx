import React from "react";
import './FooterStyles'
import {Box,Container,Row,Column,FooterLink,Heading} from "./FooterStyles";
import { FaFacebook} from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading> Social Media</Heading>
			<FooterLink href="https://www.facebook.com/" target="_blank">
			<i>
				<span style={{ marginLeft: "10px" }}>
				<FaFacebook/> Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://github.com/AdamFaylo" target="_blank">
			<i>
				<span>
				<AiFillGithub/> github
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#" target="_blank">
			<i>
				<span style={{ marginLeft: "10px" }}>
				<AiFillTwitterCircle/> Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
