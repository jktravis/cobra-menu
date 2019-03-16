import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";

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
  color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93vw;
  height: 88vh;
`;

const theme = {
  white: "#f7f7f7",
  lightGray: "#9f9d9d",
  darkGray: "#343A40",
  black: "#2d2d2d",
  accentColor: "#d83326",
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Menu/>
          <div>
            <Header/>
            <MainContent>
              <ContentPlaceholder>
                <div>Content Goes Here</div>
              </ContentPlaceholder>
            </MainContent>
          </div>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
