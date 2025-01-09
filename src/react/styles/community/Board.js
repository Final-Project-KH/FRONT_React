import styled from "styled-components";

export const BoardContainer = styled.div.attrs({
  id: "boardcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const TopSortOuterContiner = styled.div.attrs({
  id: "topsortoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const TopSortInnerContainer = styled.div.attrs({
  id: "topsortinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const TopSortTitleActive = styled.div.attrs({
  id: "topsorttitleactive",
})`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-family: "semibold", sans-serif;
  border-bottom: 2px solid black;
`;
export const TopSortTitleInactive = styled.div.attrs({
  id: "topsorttitleinactive",
})`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 20px;
  font-family: "semibold", sans-serif;
`;

export const SearchContainer = styled.div.attrs({
  id: "searchcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;
`;
export const InputSearchContainer = styled.div.attrs({
  id: "inputsearchcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const InputSearchBox = styled.div.attrs({
  id: "inputsearchbox",
})`
  width: 85%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-position: 20px;
  background-repeat: no-repeat;
  background-size: 15px;
  background-image: url("/images/icon/search.png");
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputSearch = styled.input.attrs({
  id: "inputsearch",
})`
  width: 100%;
  height: 100%;
  margin-left: 55px;
  border: none;
  font-size: 14px;
  font-family: "medium", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const InputSearchButton = styled.button.attrs({
  id: "inputsearchbutton",
})`
  width: 15%;
  border-radius: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;
export const TagSearchContainer = styled.div.attrs({
  id: "tagsearchcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const TagSearchBox = styled.div.attrs({
  id: "tagsearchbox",
})`
  width: 85%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-position: 20px;
  background-repeat: no-repeat;
  background-size: 15px;
  background-image: url("/images/icon/tag.png");
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TagSearch = styled.input.attrs({
  id: "tagsearch",
})`
  width: 100%;
  height: 100%;
  margin-left: 55px;
  border: none;
  font-size: 14px;
  font-family: "medium", sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const ResetButtonBox = styled.div.attrs({
  id: "resetbuttonbox",
})`
  width: 15%;
  height: 100%;
  border-radius: 5px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
export const ResetButtonIcon = styled.div.attrs({
  id: "resetbuttonicon",
})`
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: right;
  background-image: url("/images/icon/reset.png");
  position: relative;
`;
export const ResetButtonText = styled.button.attrs({
  id: "resetbuttontext",
})`
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  text-align: left;
  font-size: 14px;
  font-family: "bold", sans-serif;
  position: relative;
`;

export const MiddleSortOuterContiner = styled.div.attrs({
  id: "middlesortoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const MiddleSortInnerContainer = styled.div.attrs({
  id: "middlesortinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-left: 20px;
  gap: 20px;
`;
export const MiddleSortTitleActiveBox = styled.div.attrs({
  id: "middlesorttitleactivebox",
})`
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const MiddleSortTitleActiveDot = styled.div.attrs({
  id: "middlesorttitleactivedot",
})`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
`;
export const MiddleSortTitleActiveText = styled.div.attrs({
  id: "middlesorttitleactivetext",
})`
  font-size: 16px;
  font-family: "semibold", sans-serif;
  color: black;
`;
export const MiddleSortTitleInactiveBox = styled.div.attrs({
  id: "middlesorttitleinactivebox",
})`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const MiddleSortTitleInactiveDot = styled.div.attrs({
  id: "middlesorttitleinactivedot",
})`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const MiddleSortTitleInactiveText = styled.div.attrs({
  id: "middlesorttitleinactivetext",
})`
  font-size: 16px;
  font-family: "semibold", sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;

export const PostListContainer = styled.div.attrs({
  id: "postlistcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;
export const PostEach = styled.div.attrs({
  id: "posteach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PostTop = styled.div.attrs({
  id: "posttop",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const PostTopUser = styled.div.attrs({
  id: "posttopuser",
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const PostTopUserImg = styled.div.attrs({
  id: "posttopuserimg",
})`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
`;
export const PostTopUserId = styled.div.attrs({
  id: "posttopuserid",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: black;
`;
export const PostTopDays = styled.div.attrs({
  id: "posttopdays",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;
export const PostMiddle = styled.div.attrs({
  id: "postmiddle",
})`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
export const PostMiddleContentsUpper = styled.div.attrs({
  id: "postmiddlecontentsupper",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-start;
`;
export const PostMiddleContentsPending = styled.div.attrs({
  id: "postmiddlecontentspending",
})`
  border-radius: 50px;
  background-color: #f1f1f1;
  font-size: 11px;
  font-family: "semibold", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 5px 14px;
`;
export const PostMiddleContentsSolved = styled.div.attrs({
  id: "postmiddlecontentssolved",
})`
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 11px;
  font-family: "semibold", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5px 14px;
`;
export const PostMiddleContentsTitle = styled.div.attrs({
  id: "postmiddlecontentstitle",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 16px;
  font-family: "medium", sans-serif;
  color: black;
`;
export const PostMiddleContentsText = styled.div.attrs({
  id: "postmiddlecontentstext",
})`
  width: 100%;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
`;
export const PostBottom = styled.div.attrs({
  id: "postbottom",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const PostBottomTagsBox = styled.div.attrs({
  id: "postbottomtagsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const PostBottomTag = styled.div.attrs({
  id: "postbottomtag",
})`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 5px;
  font-size: 11px;
  font-family: "medium", sans-serif;
`;
export const PostBottomDataBox = styled.div.attrs({
  id: "postbottomdatabox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomRepliesBox = styled.div.attrs({
  id: "postbottomrepliesbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomRepliesImg = styled.div.attrs({
  id: "postbottomrepliesimg",
})``;
export const PostBottomRepliesText = styled.div.attrs({
  id: "postbottomrepliestext",
})``;
export const PostBottomDot = styled.div.attrs({
  id: "postbottomdot",
})`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PostBottomViewsBox = styled.div.attrs({
  id: "postbottomviewsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const PostBottomViewsImg = styled.div.attrs({
  id: "postbottomviewsimg",
})``;
export const PostBottomViewsText = styled.div.attrs({
  id: "postbottomviewstext",
})``;
