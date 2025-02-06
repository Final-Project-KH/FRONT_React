import {
  LeftSubjectContainer,
  SubjectImgContainerJavaScript,
  SubjectTitle,
  SubjectContents,
  SubjectRateContainer,
  SubjectRateBox,
  SubjectRateWhite,
  SubjectRateBlack,
  SubjectRateContents,
} from "../../../../styles/study/Language_Title_M";

const JavaScript_Title_M = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerJavaScript />
       <SubjectTitle>JavaScript</SubjectTitle>
       {/*  <SubjectContents>학습전</SubjectContents>
        <SubjectRateContainer>
          <SubjectRateBox>
            <SubjectRateWhite />
          </SubjectRateBox>
          <SubjectRateContents>0%</SubjectRateContents>
        </SubjectRateContainer> */}
      </LeftSubjectContainer>
    </>
  );
};

export default JavaScript_Title_M;
