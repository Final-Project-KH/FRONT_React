import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

import {
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  Wrap,
  LeftContainer,
  CenterContainer,
  RightContainer,
  PathLink,
  BoardContainer,
} from "../../styles/community/Community";

import BoardList from "./components/common/Side_BoardList";
import PopularTags from "./components/common/Side_PopularTags";
import TopWriters from "./components/common/Side_TopWriters";
import WeeklyBest from "./components/common/Side_WeeklyBest";
import Board_Team_Search from "./components/team/Board_Team_Search";
import Board_PostList from "./components/common/Board_PostList";
import Board_TopSort from "./components/common/Board_TopSort";
import Board_Order from "./components/common/Board_Order";
import ScrollToTopButton from "../ScrollToTopButton";
import Community_Team_M from "./Community_Team_M";

const Community_Team = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};
  const queryParams = new URLSearchParams(location.search);
  const { isMobile } = useOutletContext();

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");

  const boardType = "team";

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community", {
      state: {
        firstpath: firstpath,
      },
    });
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/${boardType}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
      },
    });
  };

  // Update sorting parameters
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <>
      {isMobile ? (
        <Community_Team_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <PathLink onClick={() => handleCommunity()}>
                <TopBoxText>{firstpath}</TopBoxText>
              </PathLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <PathLink onClick={() => handleRefresh()}>
                <TopBoxText>{secondpath}</TopBoxText>
              </PathLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <BoardList firstpath={firstpath} />
              <PopularTags />
              <WeeklyBest />
            </LeftContainer>
            <CenterContainer>
              <BoardContainer>
                <Board_TopSort
                  onSortChange={handleSortChange}
                  boardType={boardType}
                />
                <Board_Team_Search />
                <Board_Order boardType={boardType} />
                <Board_PostList
                  boardType={boardType}
                  page={page}
                  size={size}
                  sortBy={sortBy}
                  order={order}
                />
              </BoardContainer>
            </CenterContainer>
            <RightContainer>
              <TopWriters />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Community_Team;
