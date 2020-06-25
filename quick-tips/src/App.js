import React from "react";
import Form from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Reviews from './components/Reviews';

const Container = styled.body`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <Reviews/>
        <Form />
        <Footer />
      </div>
    </Container>

  );
}

export default App;
