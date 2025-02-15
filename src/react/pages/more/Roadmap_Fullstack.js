import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import {
  CenterContainer,
  LeftContainer,
  Container,
  ImageBox,
  TopBox,
  TopBoxArrow,
  TopBoxText,
  TopBoxWide,
  Wrap,
} from "../../styles/more/Roadmap";

import LeftMenus from "./components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import Roadmap_Fullstack_M from "./Roadmap_Fullstack_M";

const Roadmap_Fullstack = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleRefresh = () => {
    navigate("/roadmap/fullstack");
  };

  return (
    <>
      {isMobile ? (
        <Roadmap_Fullstack_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleRefresh()}>more</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                개발자 로드맵
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>📚 풀스택</TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <ImageBox src="/images/more/roadmap_fs_p.png" />
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Roadmap_Fullstack;
