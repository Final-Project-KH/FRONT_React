import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/CommunityBar";

const CommunityBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleCodingClick = () => {
    navigate("/community/coding", {
      state: {
        firstpath: path,
        secondpath: "코딩 질문",
      },
    });
  };

  const handleCourseClick = () => {
    navigate("/community/course", {
      state: {
        firstpath: path,
        secondpath: "진로 질문",
      },
    });
  };

  const handleStudyClick = () => {
    navigate("/community/study", {
      state: {
        firstpath: path,
        secondpath: "스터디",
      },
    });
  };

  const handleTeamClick = () => {
    navigate("/community/team", {
      state: {
        firstpath: path,
        secondpath: "팀 프로젝트",
      },
    });
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCodingClick()}>💻 코딩 질문</MenuLink>
          </MenuContents>

          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCourseClick()}>🎓 진로 질문</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleStudyClick()}>✏️ 스터디</MenuLink>
          </MenuContents>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleTeamClick()}>📋 팀 프로젝트</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CommunityBar;
