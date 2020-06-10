import React from 'react';
import Home from './components/Home/Home'
import './App.css';
import { ROUTES } from "./consts";
import { Switch, Route } from "react-router-dom";
import PageHeader from './components/PageHeader/PageHeader';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <div className="App">
        <PageHeader />
        <Switch>
          <Route path={ROUTES.addAuthor}>
            {/* <AddAuthor /> */}
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.contact}>
            <Contact />
          </Route>
          <Route path={ROUTES.portfolio}>
            <Portfolio />
          </Route>
          <Route path={ROUTES.projectDetail.path}>
            <ProjectDetail />

            {/* <AuthorDetail /> */}
          </Route>
          <Route path={ROUTES.addProject}>
            {/* <AddBook /> */}
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
