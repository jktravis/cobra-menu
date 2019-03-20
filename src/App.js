import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";
import * as R from "ramda";

const PageWrapper = styled("div")`
  display: flex;
`;

const MainContent = styled(`div`)`
  position: relative;
  left: 63px;
  top: 65px;
  z-index: -1;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 95px);
`;

const ContentPlaceholder = styled("div")`
  font-size: 24px;
  color: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Content = styled("div")`
  background: ${({ theme }) => theme.white};
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  font-size: 5rem;
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
          <Menu />
          <div>
            <Header />
            <MainContent>
              <ContentPlaceholder>
                <div>Content Goes Here</div>
              </ContentPlaceholder>
              {R.range(1, 100).map(n => (
                <Content>{n}</Content>
              ))}
            </MainContent>
          </div>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
