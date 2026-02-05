import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Home from "./Home.jsx";
import "./Home.css";
const root = document.querySelector("#mango");
createRoot(mango).render(
  <div>
    <Home />;
    <Home />;
    <Home />;
    <Home />;
    <Home />;
    <Home />;
  </div>,
);

// react에서 대문자로 시작하는 식별자는 -> 컴포넌트
// 컴포넌트의 호출은 <컴포넌트/>

// createRoot html의 요소에 리액트 컴포넌트를 그릴 수 있게 지정
