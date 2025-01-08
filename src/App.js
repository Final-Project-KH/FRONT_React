import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
import Signup from "./react/pages/signup/signup";
import GlobalStyle from "././react/styles/GlobalStyle";
import Terms from "./react/pages/legal/Terms";
import Privacy from "./react/pages/legal/Privacy";
import About from "./react/pages/about/About";
import Main from "./react/pages/main/Main";
import Study from "./react/pages/study/Study";
import Java_Main from "./react/pages/study/java/Java_Main";
import Java_01_01 from "./react/pages/study/java/Java_01_01";
import Java_01_02 from "./react/pages/study/java/Java_01_02";
import Java_01_03 from "./react/pages/study/java/Java_01_03";
import Java_02_01 from "./react/pages/study/java/Java_02_01";
import Java_02_02 from "./react/pages/study/java/Java_02_02";
import Java_02_03 from "./react/pages/study/java/Java_02_03";
import Java_02_04 from "./react/pages/study/java/Java_02_04";
import Java_02_05 from "./react/pages/study/java/Java_02_05";
import Python_Main from "./react/pages/study/python/Python_Main";
import C_Main from "./react/pages/study/c/C_Main";
import CPlus_Main from "./react/pages/study/cplus/CPlus_Main";
import JavaScript_Main from "./react/pages/study/javascript/JavaScript_Main";
import CodingTestCommons from "./react/pages/codingtest/CodingTestCommon";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/study" element={<Study />} />
            <Route path="/study/java/main" element={<Java_Main />} />
            <Route path="/study/java/01/01" element={<Java_01_01 />} />
            <Route path="/study/java/01/02" element={<Java_01_02 />} />
            <Route path="/study/java/01/03" element={<Java_01_03 />} />
            <Route path="/study/java/02/01" element={<Java_02_01 />} />
            <Route path="/study/java/02/02" element={<Java_02_02 />} />
            <Route path="/study/java/02/03" element={<Java_02_03 />} />
            <Route path="/study/java/02/04" element={<Java_02_04 />} />
            <Route path="/study/java/02/05" element={<Java_02_05 />} />
            <Route path="/study/java/01_01" element={<Java_01_01 />} />
            <Route path="/study/java/01_02" element={<Java_01_02 />} />
            <Route path="/study/java/01_03" element={<Java_01_03 />} />
            <Route path="/study/python/main" element={<Python_Main />} />
            <Route path="/study/c/main" element={<C_Main />} />
            <Route path="/study/cplus/main" element={<CPlus_Main />} />
            <Route path="/study/javascript/main" element={<JavaScript_Main />} />
            <Route path="/ct_commons" element={<CodingTestCommons />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
