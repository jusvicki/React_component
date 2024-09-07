import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const firstName = "Victoria"; // Change this to test different names
  
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div className="text-center mt-4">
        {firstName ? (
          <>
            <h3>Hello, {firstName}!</h3>
            <img src="https://media.istockphoto.com/id/1169950670/photo/six-year-old-african-american-chinese-ethnicity-girl-posing-for-portrait-in-lush-green.webp?a=1&b=1&s=612x612&w=0&k=20&c=F8DJ1aLfEAf9aBHF6c3sN5FNw44tQDPohW1E8QIbZi4=" alt="Hello Image" />
          </>
        ) : (
          <h3>Hello, there!</h3>
        )}
      </div>
    </Container>
  );
}

export default App;
