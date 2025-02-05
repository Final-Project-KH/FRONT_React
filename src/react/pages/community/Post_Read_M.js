import { useLocation, useNavigate, useParams } from "react-router-dom";

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
} from "../../styles/community/Post_M";
import Post_ReplyArea from "./components/common/Post_ReplyArea";
import Post_UserProfile from "./components/common/Post_UserProfile";
import { PathLink } from "../../styles/community/Community";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import Post_MainContents from "./components/common/Post_MainContents";
import { useState } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import Post_MainContents_M from "./components/common/Post_MainContents_M";

const Post_Read_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  // TopBox firstpath
  const handleCommunity = () => {
    console.log(boardType);
    navigate("/community");
  };

  // TopBox secondpath
  const handleCommunityBoard = () => {
    console.log(boardType);
    navigate(`/community/${boardType}`);
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    console.log(boardType);
    navigate(`/community/${boardType}/post/${boardId}`);
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleCommunity()}>
              <TopBoxText>community</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleCommunityBoard()}>
              <TopBoxText>{boardType}</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <TopBoxWide2>
          <TopBox2>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText2>게시글 상세보기</TopBoxText2>
            </TopBoxLink>
          </TopBox2>
        </TopBoxWide2>
        <Container>
          <Post_MainContents_M boardType={boardType} />
          <Post_UserProfile />
          <Post_ReplyArea
            boardType={boardType}
            page={page}
            size={size}
            sortBy={sortBy}
            order={order}
          />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Post_Read_M;
