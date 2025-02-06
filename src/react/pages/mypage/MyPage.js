import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
  CenterAccountRightContainer,
  CenterAccountLeftContainer,
  CenterAccountContainer,
} from "../../styles/mypage/MyPage";
import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import AccountManager_Account from "./Components/AccountManager_Account";
import AccountManager_Alert from "./Components/AccountManager_Alert";
import AccountManager_SNS from "./Components/AccountManager_SNS";
import AccountManager_ProfileIMG from "./Components/AccountManager_ProfileIMG";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect } from "react";
import MyPage_M from "./MyPage_M";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleRefresh = () => {
    navigate("/mypage/accountmanager");
  };

  const isAccountManagerPage = location.pathname === "/mypage/accountmanager";

  return (
    <>
      {isMobile ? (
        <MyPage_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => navigate("/mypage")}>
                <TopBoxText>my page</TopBoxText>
              </TopBoxLink>
              {isAccountManagerPage && (
                <>
                  <TopBoxArrow>{`>`}</TopBoxArrow>
                  <TopBoxLink onClick={handleRefresh}>
                    <TopBoxText>계정 관리</TopBoxText>
                  </TopBoxLink>
                </>
              )}
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <CenterAccountContainer>
                <CenterAccountLeftContainer>
                  <AccountManager_Account />
                </CenterAccountLeftContainer>
                <CenterAccountRightContainer>
                  <AccountManager_ProfileIMG />
                </CenterAccountRightContainer>
              </CenterAccountContainer>
              <AccountManager_Alert />
              <AccountManager_SNS />
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage;
