import React from "react";
import styled from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <ContentsContainer>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </ContentsContainer>
    </>
  );
}

export default App;
