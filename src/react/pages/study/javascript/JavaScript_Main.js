import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  PathLink,
} from "../../../styles/study/Study";
import JavaScript_ChapterList from "./JavaScript_ChapterList";
import JavaScript_SubjectTitle from "./JavaScript_SubjectTitle";
import JavaScript_ClassListFull from "./JavaScript_ClassListFull";
import {useLocation, useNavigate} from "react-router-dom";

const JavaScript_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath, secondpath} = location.state || {};

  const handleStudy = () => {
    navigate("/study", {
      state: {
        firstpath: firstpath,
      },
    });
  };
  const handleJavaScriptMain = () => {
    navigate("/study/javascript/main", {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <PathLink onClick={() => handleStudy()}>
            <TopBoxText>{firstpath}</TopBoxText>
          </PathLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <PathLink onClick={() => handleJavaScriptMain()}>
            <TopBoxText>{secondpath}</TopBoxText>
          </PathLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <JavaScript_SubjectTitle />
          <JavaScript_ChapterList />
        </LeftContainer>
        <RightContainer>
          <JavaScript_ClassListFull />
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default JavaScript_Main;
