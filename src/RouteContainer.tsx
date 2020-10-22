import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Board } from "./components/Board/Board";
import { Main } from "./components/Main/Main";
import { AddStory } from "./components/AddStory/AddStory";
import styled from "styled-components";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Wrapper = styled.div`
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export const RouterContainer: FC<RouteComponentProps> = ({ location }) => {
  return (
    <Wrapper>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/board" component={Board} />
            <Route path="/add" component={AddStory} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};

export default withRouter(RouterContainer);
