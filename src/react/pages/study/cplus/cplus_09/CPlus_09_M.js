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

import CPlus_Title_M from "../cplus_components/CPlus_Title_M";
import CPlus_ClassList_Filtered_M from "../cplus_components/CPlus_ClassList_Filtered_M";
import ScrollToTopButton from "../../../ScrollToTopButton";

const CPlus_09_M = () => {
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
  const handleStudyCPlus = () => {
    navigate("/study/cplus");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/cplus/09");
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
          <TopBoxLink onClick={() => handleStudyCPlus()}>
            <TopBoxText>C++</TopBoxText>
          </TopBoxLink>
          </TopBox>
          </TopBoxWide>
          <TopBoxWide2>
          <TopBox2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>09. 모던 C++</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
          <CPlus_Title_M />
          <CPlus_ClassList_Filtered_M chapter="09" />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default CPlus_09_M;
