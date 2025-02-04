import { useNavigate } from "react-router-dom";
import {
  CenterContainer,
  LeftContainer,
  Container,
  FrontendImage_P,
  TopBox,
  TopBoxArrow,
  TopBoxLink,
  TopBoxText,
  TopBoxWide,
  Wrap,
} from "../../styles/more/Roadmap";
import LeftMenus from "./components/LeftMenus";

const Roadmap_Fullstack = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/fullstack");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>more</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>개발자 로드맵</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>📚 풀스택</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <LeftContainer>
            <LeftMenus />
          </LeftContainer>
          <CenterContainer>
            <FrontendImage_P src="/images/more/roadmap_fs_p.png" />
          </CenterContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default Roadmap_Fullstack;
