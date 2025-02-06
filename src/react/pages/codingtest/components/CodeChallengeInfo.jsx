import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Base64 } from "js-base64";

import JwtDecoding from "../../../../api/JwtDecode";
import AxiosApi from "../../../../api/AxiosApi";

import { CodeChallengeInfoStyles as CssWrapper } from "../../../styles/codingtest/CodeChallengeInfoStyles";

const CodeChallengeInfo = ({ setHeaderTitle, setCodeEditorValue }) => {
  const [challengeDetail, setChallengeDetail] = useState({
    title: "Loading...",
    description: "Loading...",
    cond: "Loading...",
    limits: "Loading...",
  });

  const { questionId } = useParams();

  const accessToken = useSelector((state) => state.auth.accesstoken);
  const userId = accessToken
    ? JwtDecoding.getFieldFromToken(accessToken, "sub")
    : null;

  useEffect(() => {
    const fetchChallengeDetail = async () => {
      const responseData = await AxiosApi.getChallengeDetail(
        questionId,
        userId
      );

      if (responseData["error"]) {
        const errorMessage = responseData["error"];
        alert(errorMessage);
        return;
      }

      setHeaderTitle(responseData["title"]);

      if (responseData["lastSubmittedCode"])
        setCodeEditorValue(Base64.decode(responseData["lastSubmittedCode"]));
      setChallengeDetail((prev) => ({
        ...prev,
        title: responseData["title"],
        description: responseData["description"],
        cond: responseData["cond"],
        limits: `메모리 제한: ${responseData["memoryLimit"]}mb\n실행 시간: ${
          parseInt(responseData["runningTimeLimit"]) / 1000
        }초 이내`,
      }));
    };

    fetchChallengeDetail();
  }, []);

  return (
    <CssWrapper>
      <div className="challenge-title">
        <div>
          <span>문제 이름</span>
        </div>
        <div>
          <p>{challengeDetail.title}</p>
        </div>
      </div>
      <div className="challenge-desc">
        <div>
          <span>설명</span>
        </div>
        <div>
          <span>문제</span>
          <p>{challengeDetail.description}</p>
          <span>조건</span>
          <p>{challengeDetail.cond}</p>
          <span>시스템 제한사항</span>
          <p>{challengeDetail.limits}</p>
        </div>
      </div>
      <div className="challenge-io-example">
        <div>
          <span>문제 정답 예시</span>
        </div>
        <div>{challengeIoExample[questionId]}</div>
      </div>
    </CssWrapper>
  );
};

export default CodeChallengeInfo;

const challengeIoExample = {
  1: (
    <table>
      <colgroup>
        <col style={{ width: "33.33%" }} />
        <col style={{ width: "33.33%" }} />
        <col style={{ width: "33.33%" }} />
      </colgroup>
      <thead>
        <tr>
          <th>x</th>
          <th>y</th>
          <th>answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>7</td>
          <td>12</td>
        </tr>
        <tr>
          <td>-2</td>
          <td>3</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  ),
};
