import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  CenterAccountContainer,
  MobileEachTitle,
} from "../../styles/mypage/MyPage_M";
import LeftTopProfile from "./Components/LeftTopProfile";
import AccountManager_Account_M from "./Components/AccountManager_Account_M";
import AccountManager_Alert_M from "./Components/AccountManager_Alert_M";
import AccountManager_SNS from "./Components/AccountManager_SNS";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect } from "react";

const MyPage_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mainContentRef } = useOutletContext();

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
        <MobileEachTitle>계정 관리</MobileEachTitle>
        <AccountManager_Account_M />
        <MobileEachTitle>이메일 알림 설정</MobileEachTitle>
        <AccountManager_Alert_M />
        <MobileEachTitle>SNS 계정 연동</MobileEachTitle>
        <AccountManager_SNS />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default MyPage_M;
