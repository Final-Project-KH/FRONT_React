import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitlePathLink,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
  NavigatePath,
  PathLink,
} from "../../../styles/study/Class_Main";
import { PythonStudyChapter } from "../../../../util/study/PythonStudyChapter";
import Python_Title from "./Python_Title";

const Python_01 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {firstpath, secondpath, thirdpath} = location.state || {};
  
    const handleStudy = () => {
      navigate("/study", {
        state: {
          firstpath: firstpath,
        },
      });
    };
    const handleStudyPython = () => {
      navigate("/study/python", {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
        },
      });
    };
    const handleRefresh = () => {
      navigate("/study/python/01", {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
          thirdpath: thirdpath,
        },
      });
      window.location.reload();
    };
  
    const handleNext = (cls) => {
      navigate(`/study/python/${cls.id}`, {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
          thirdpath: cls.title,
        },
      });
    };
  
    // 챕터리스트 토글링 및 간소화
    const handleNavigation = (navigatepath, data) => {
      navigate(navigatepath, {state: data});
    };
  
    const [isToggleOpenId, setIsToggleOpenId] = useState([]);
  
    const toggleVisibility = (id) => {
      setIsToggleOpenId((prevId) =>
        prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
      );
    };
  
    const updatedPythonStudyChapter = PythonStudyChapter.map((menu) => ({
      ...menu,
      contents: menu.contents.map((content) => ({
        ...content,
        label: content.label,
        navigatepath: content.navigatepath,
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: content.thirdpath,
      })),
    }));
  
    // 우측 스터디 영역 컴포넌트로 분리
    const EachClassComponent = ({cls, isOpen, onToggle}) => (
      <EachClass key={cls.id}>
        <ClassHeader isOpen={isOpen}>
          <ClassHeaderTitle onClick={() => handleNext(cls)}>
            {cls.title}
          </ClassHeaderTitle>
          <ClassHeaderTitleButton
            isOpen={isOpen}
            onClick={() => onToggle(cls.id)}
          />
        </ClassHeader>
        <ClassContents isOpen={isOpen}>
          {cls.contents.map((content, index) => (
            <ClassSet key={index}>
              <ClassName
                onClick={() =>
                  handleNavigation(content.navigatepath, {
                    firstpath: firstpath,
                    secondpath: secondpath,
                    thirdpath: content.thirdpath,
                    fourthpath: content.label,
                  })
                }
              >
                {content.label}
              </ClassName>
            </ClassSet>
          ))}
        </ClassContents>
      </EachClass>
    );
  
    const filteredPythonStudyChapter = PythonStudyChapter.filter(
      (chapter) => chapter.id === "01"
    );
  
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>{firstpath}</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyPython()}>
            {secondpath}
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>{thirdpath}</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Python_Title />
        </LeftContainer>
        <RightContainer>
        {filteredPythonStudyChapter.map((cls) => (
            <EachClassComponent
              key={cls.id}
              cls={cls}
              isOpen={isToggleOpenId.includes(cls.id)}
              onToggle={toggleVisibility}
            />
          ))}
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Python_01;
