import {
  InputSearch,
  InputSearchBox,
  InputSearchButton,
  InputSearchContainer,
  TagSearch,
  TagSearchBox,
  TagSearchContainer,
  SearchContainer,
  ResetButtonBox,
  ResetButtonText,
  ResetButtonIcon,
} from "../../../../styles/community/Board";

const Board_Study_Search = ({
  boardType,
  onSearchChange,
  onEnumFilterRefresh,
}) => {
  const enumFilterRefresh = () => {
    onEnumFilterRefresh();
  };

  return (
    <>
      <SearchContainer>
        <InputSearchContainer>
          <InputSearchBox>
            <InputSearch
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="관심 스터디를 검색해보세요!"
            />
          </InputSearchBox>
          <InputSearchButton>검색</InputSearchButton>
        </InputSearchContainer>
        <TagSearchContainer>
          <TagSearchBox>
            <TagSearch placeholder="태그로 검색해보세요!" />
          </TagSearchBox>
          <ResetButtonBox onClick={() => enumFilterRefresh()}>
            <ResetButtonIcon />
            <ResetButtonText>초기화</ResetButtonText>
          </ResetButtonBox>
        </TagSearchContainer>
      </SearchContainer>
    </>
  );
};

export default Board_Study_Search;
