import { Html, Head, Body, Container, Text, Button } from '@react-email/components';
  export default function WelcomeEmail({ userName }) {
    return (
      <Html>
        <Head />
        <Body>
          <Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Text style={{ fontSize: '18px', marginBottom: '20px' }}>
              Hi {userName},
            </Text>
            <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
              Welcome to our platform! We are excited to have you onboard.
            </Text>
            <Button
              pX={10}
              pY={5}
              href="https://your-website.com/dashboard"
              style={{
                backgroundColor: '#007BFF',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                display: 'inline-block',
                marginTop: '20px',
              }}
            >
              Go to Dashboard
            </Button>
          </Container>
        </Body>
      </Html>
    );
  };