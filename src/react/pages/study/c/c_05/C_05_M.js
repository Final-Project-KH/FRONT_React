import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBoxWide2,
  TopBox,
  TopBox2,
  TopBoxText,
  TopBoxText2,
  TopBoxArrow,
  TopBoxArrow2,
  TopBoxLink,
  Container,
} from "../../../../styles/study/Language_00_M";

import C_Title_M from "../c_components/C_Title_M";
import C_ClassList_Filtered_M from "../c_components/C_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const C_05_M = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

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
  const handleStudyC = () => {
    navigate("/study/c");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/c/05");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>study</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleStudyC()}>
            <TopBoxText>C</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>05. 함수 및 자료 처리</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        <C_Title_M />
        <C_ClassList_Filtered_M chapter="05" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default C_05_M;
