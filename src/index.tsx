import * as React from "react";
import { render } from "react-dom";
import { Facebook, Instagram } from "react-content-loader";
import IntersectionObserver from "./components/intersectionObserver";
import AsyncComponent from "./components/asyncComponent";
import DynamicModule from "./components/dynamicModule";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DynamicModule
        placeholder={<Facebook />}
        component={() => import("./components/asyncComponent")}
      />
      <DynamicModule
        placeholder={<Instagram />}
        component={() => import("./components/asyncComponent")}
      />
      <IntersectionObserver
        onIntersection={() => console.log("intersection 1")}
      >
        <DynamicModule
          placeholder={<Facebook />}
          component={() => import("./components/asyncComponent")}
        />
      </IntersectionObserver>
      <IntersectionObserver
        onIntersection={() => console.log("intersection 2")}
      >
        <DynamicModule
          placeholder={<Instagram />}
          component={() => import("./components/asyncComponent")}
        />
      </IntersectionObserver>
      <IntersectionObserver
        onIntersection={() => console.log("intersection 3")}
      >
        <DynamicModule
          placeholder={<Facebook />}
          component={() => import("./components/asyncComponent")}
        />
      </IntersectionObserver>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
