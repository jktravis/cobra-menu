import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import styled from "react-emotion";

const PageWrapper = styled("div")`
  display: flex;
`;

const MainContent = styled(`div`)`
  position: relative;
  left: 65px;
  top: 65px;
  z-index: -1;
  padding: 1rem;
`;

const ContentPlaceholder = styled("div")`
  font-size: 24px;
  color: #9f9d9d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Menu />
        <div>
          <Header />
          <MainContent>
            <ContentPlaceholder>
              <div>Content Goes Here</div>
            </ContentPlaceholder>
          </MainContent>
        </div>
      </PageWrapper>
    );
  }
}

export default App;
