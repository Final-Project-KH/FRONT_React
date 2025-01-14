import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
} from "../../../styles/study/Class_Main";
import { PythonStudyChapter } from "../../../../util/study/PythonStudyChapter";

// 특정 챕터 진입시 해당 챕터의 클래스 리스트만 출력
// 토글 없이
const Python_ClassList_Filtered = ({ chapter }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  // 클래스 이름 클릭시 진입
  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  // 각 챕터/클래스 리스트 생성
  const EachClassComponent = ({ cls, isOpen, onToggle }) => (
    <EachClass key={cls.id}>
      <ClassHeader isOpen={isOpen}>
        <ClassHeaderTitle onClick={() => window.location.reload()}>
          {cls.title}
        </ClassHeaderTitle>
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

  // chapter에 맞게 필터링
  const filteredPythonStudyChapter = PythonStudyChapter.filter(
    (menu) => menu.id === chapter
  ).map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
      firstpath: firstpath,
      secondpath: secondpath,
      thirdpath: content.thirdpath,
      fourthpath: content.fourthpath,
    })),
  }));

  return (
    <>
      {filteredPythonStudyChapter.map((cls) => (
        <EachClassComponent
          key={cls.id}
          cls={cls}
        />
      ))}
    </>
  );
};

export default Python_ClassList_Filtered;
