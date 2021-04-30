import React, { Component,useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Homepage } from "./containers/homepage";
import { Footer } from "./components/Footer/Footer";
import { Marginer } from "./components/marginer";
import { Navbar } from "./components/navbar";
import { TopSection } from "./containers/homepage/topSection";
import { BrowserRouter as Router , Switch,Route,withRouter, useLocation} from 'react-router-dom';
import { Bachelor  } from "./containers/Scholarshippage/bachelor";
import { Master } from "./containers/Scholarshippage/master";
import { Phd } from "./containers/Scholarshippage/phd";
import { Blog } from "./containers/Blog/blog";
import { Internship } from "./containers/internship/Internship";
import { Spain  } from "./containers/bachelorPagesPost/spain";
import { Usa } from "./containers/bachelorPagesPost/usa";
import { Pakistan } from "./containers/phdPagesPost/examplephd";
const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
function _ScrollToTop(props) {
  const { pathname } = useLocation();
        useEffect(() => {
         window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
export default class App extends Component {
  
  render() {
    return (
  <Router>
    <PageContainer>
      <ScrollToTop>
      <Navbar/>
      <TopSection />
      <Switch>
         <Route path="/" exact component= {Homepage} /> 
         <Route path="/bachelor" exact component= {Bachelor} /> 
         <Route path="/master" exact component= { Master } />  
         <Route path="/phd" exact component= { Phd } />  
         <Route path="/blog" exact component= { Blog } />  
         <Route path="/internship" exact component= { Internship } />  
         <Route path="/spain" exact component= { Spain } />  
         <Route path="/usa" exact component= { Usa } />  
         <Route path="/examplephd" exact component= { Pakistan } />  
      </Switch>
    <Marginer direction="vertical" margin="4rem" />
      <Footer/>
      </ScrollToTop>
    </PageContainer>
    </Router>
  );
}
}
