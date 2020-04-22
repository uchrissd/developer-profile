import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          style={{ backgroundColor: "#000000", fontFamily: "Space Mono" }}
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Chris Underwood
            </Link>
          }
          scroll
        >
          <Navigation style={{ fontFamily: "Space Mono" }}>
            <Link to="/About">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Chris Underwood
            </Link>
          }
        >
          <Navigation style={{ fontFamily: "Space Mono" }}>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
