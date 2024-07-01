import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface WelcomeEmailProps {
    firstname: string;
    lastname: string;
    tel: string;
    email: string;
    zip: string;
  }
  
  export const ConstactUsUser = ({ firstname, lastname, tel, email, zip }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>Thank you for applying!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome {firstname}! You are in the best place.</Heading>
          <Text style={{ ...text, marginBottom: '24px'}}>
            Thank you for applying to one of our jobs! We will get in touch shortly.
          </Text>
          <Text style={{...text}}>
            Your application contains the following:
          </Text>
            <Text style={{...text}}>
            <b>Name:</b> {firstname} {lastname}<br></br>
            <b>Phone number:</b> {tel}<br></br>
            <b>Email:</b> {email}<br></br>
            <b>Zip:</b> {zip}<br></br>
          </Text>
          
          <Text
            style={{
              ...text,
              color: '#ababab',
              marginTop: '14px',
              marginBottom: '16px',
              borderTop: '1px solid #d7d7d7' 
            }}
          >
            If you didn&apos;t try to contact us in our webpage, you can safely ignore this email.
          </Text>
          <Img
            src="http://admin.acceptrec.co.uk/wp-content/uploads/2024/01/Accept-Stacked-Logo-with-Strapline-RGB300.png"
            width="auto"
            height="50"
            alt="Acceptrec's logo"
          />
          <Text style={footer}>
            <Link
              href="https://acceptrec.co.uk"
              target="_blank"
              style={{ ...link, color: '#898989' }}
            >
              Acceptrec.co.uk
            </Link>
            , the highest rated recruitment agency in the UK.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default ConstactUsUser;
  
  const main = {
    backgroundColor: '#ffffff',
  };
  
  const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
  };
  
  const h1 = {
    color: '#312252',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
  };
  
  const link = {
    color: '#2754C5',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
  };
  
  const text = {
    color: '#333',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
  };
  
  const footer = {
    color: '#898989',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
  };
  
  const code = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
  };
  