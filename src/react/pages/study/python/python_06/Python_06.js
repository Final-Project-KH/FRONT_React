import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
} from "../../../../styles/study/Language_00";

import Python_Title from "../python_components/Python_Title";
import Python_ClassList_Filtered from "../python_components/Python_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Python_06_M from "./Python_06_M";

const Python_06 = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleStudy = () => {
    navigate("/study");
  };

  // TopBox secondpath
  const handleStudyPython = () => {
    navigate("/study/python");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/python/06");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <Python_06_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyPython()}>
                Python
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              06. 데이터 분석을 위한 패키지
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Python_Title />
            </LeftContainer>
            <RightContainer>
              <Python_ClassList_Filtered chapter="06" />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Python_06;
