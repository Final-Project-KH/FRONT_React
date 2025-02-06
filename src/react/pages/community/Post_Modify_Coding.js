import React, { useEffect, useState } from "react";
import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";
import Post_ModifySort from "./components/common/Post_ModifySort";
import Post_ModifyEditor_Coding from "./components/coding/Post_ModifyEditor_Coding";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import Post_Modify_Coding_M from "./Post_Modify_Coding_M";

const Post_Modify_Coding = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [boardType, setBoardType] = useState("");
  const [boardId, setBoardId] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기 화면 크기 체크
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize); // 화면 크기 변화에 따른 상태 업데이트
    handleResize(); // 컴포넌트 마운트 시 초기 상태 설정
    return () => {
      window.removeEventListener("resize", handleResize); // 클린업
    };
  }, []);

  useEffect(() => {
    const originTitle = location.state?.boardTitle || "";
    const originContent = location.state?.boardContent || "";
    const originBoardType = location.state?.id || "";
    const originBoardId = location.state?.boardId || "";
    const originSelectedLanguages = location.state?.languages || [];
    const defaultSelectedLanguages = languageOptions
      .filter((option) => originSelectedLanguages.includes(option.value))
      .map((option) => option.value);
    setTitle(originTitle);
    setContent(originContent);
    setBoardType(originBoardType);
    setBoardId(originBoardId);
    setSelectedLanguages(defaultSelectedLanguages);

    if (originTitle === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

  const MAX_SELECTION = 10;
  const languageOptions = [
    { value: "JAVA", label: "Java" },
    { value: "JS", label: "JavaScript" },
    { value: "PYTHON", label: "Python" },
    { value: "C", label: "C" },
    { value: "CPP", label: "C++" },
    { value: "CS", label: "C#" },
    { value: "SPB", label: "Spring Boot" },
    { value: "RE", label: "React" },
    { value: "AN", label: "AngularJS" },
    { value: "EX", label: "ExpressJS" },
    { value: "NO", label: "NodeJS" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    if (selectedOptions.length > MAX_SELECTION) {
      alert(`최대 ${MAX_SELECTION}개까지 선택할 수 있습니다.`);
      selectedOptions.pop();
    }
    setSelectedLanguages(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": { borderColor: "#333333" },
      maxWidth: "1280px",
      border: "1px solid #f1f1f1",
      padding: "5px",
      fontSize: "20px",
      fontFamily: "medium, sans-serif",
      marginLeft: "10px",
      marginRight: "10px",
    }),
    menu: (provided) => ({
      // 토글 메뉴 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      zIndex: "50",
      maxWidth: "1280px",
      padding: "5px 25px",
      fontSize: "15px",
      fontFamily: "medium, sans-serif",
    }),
    option: (provided, { isSelected, isFocused }) => ({
      ...provided,
      backgroundColor: isSelected ? "black" : isFocused ? "#f1f1f1" : "white",
      color: isSelected ? "white" : "black",
      cursor: "pointer",
      zIndex: "50",
      "&:active": {
        backgroundColor: "transparent", // 클릭 순간 색상 (파란 계열 예시)
        fontFamily: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "5px",
      },
    }),
    // 태그 박스
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#333333",
      alignItems: "center",
      borderRadius: "5px",
    }),
    // 태그 텍스트
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
      marginBottom: "1px",
      fontSize: "14px",
      fontFamily: "medium",
    }),
    // 삭제버튼
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      width: "15px",
      height: "15px",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "2px",
      marginRight: "5px",
      padding: "0",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    }),
  };

  return (
    <>
      {isMobile ? (
        <Post_Modify_Coding_M />
      ) : (
        <>
          <WriteWrap>
            <WriteContainer>
              <Post_ModifySort />
              <WriteTitleBox>
                <WriteTitle
                  disabled
                  autoComplete="off"
                  placeholder="제목을 입력하세요."
                  value={title}
                />
              </WriteTitleBox>
              <WriteTagBox>
                <Select
                  options={languageOptions}
                  isMulti
                  value={languageOptions.filter((option) =>
                    selectedLanguages.includes(option.value)
                  )}
                  onChange={handleChange}
                  placeholder="태그를 설정하세요. (최대 10개)"
                  styles={customStyles}
                />
              </WriteTagBox>
              <Post_ModifyEditor_Coding
                boardId={boardId}
                content={content}
                title={title}
                language={selectedLanguages}
              />
            </WriteContainer>
          </WriteWrap>
        </>
      )}
    </>
  );
};

export default Post_Modify_Coding;
