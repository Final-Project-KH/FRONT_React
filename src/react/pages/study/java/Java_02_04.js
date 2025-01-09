import {
  Wrap,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  StickyClassBox,
  ClassContentsCodeBox,
  ClassContentsCode,
  ClassContentsImage,
  ArrowContainer,
  LeftArrow,
  RightArrow,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
} from "../../../styles/study/Study";

import { Java_ClassListSmall_02 } from "./Java_ClassListSmall";
import Java_SubjectTitle from "./Java_SubjectTitle";

const Java_02_04 = () => {
  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <a href="/study" className="menu-link">
            <TopBoxText>study</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/main" className="menu-link">
            <TopBoxText>Java</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/02" className="menu-link">
            <TopBoxText>02. 기본 지료형과 연산자 / 제어문</TopBoxText>
          </a>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <a href="/study/java/02/04" className="menu-link">
            <TopBoxText>조건문</TopBoxText>
          </a>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LeftContainer>
          <Java_SubjectTitle />
          <StickyClassBox>
            <Java_ClassListSmall_02 />
          </StickyClassBox>
        </LeftContainer>

        <RightContainer>
          <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>조건문</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer>
              <ClassContentsTitle1>제어문이란?</ClassContentsTitle1>
              <ClassContentsText>
                프로그램이 원하는 결과를 얻기 위해서는 프로그램의 순차적인
                흐름을 제어해야만 할 경우가 생깁니다.
                <br />
                이때, 사용하는 명령문을 제어문이라고 하며, 이러한 제어문에는{" "}
                <b>조건문, 반복문</b> 등이 있습니다.
                <br />
                이러한 제어문에 속하는 명령문들은 중괄호{}로 둘러싸여 있으며,
                이러한 중괄호 영역을 블록(block)이라고 합니다.
                <br />
                <br />
                <ClassContentsTextTab>
                  - <i>순차 구조 : 명령이 순차적으로 수행되는 구조</i>
                  <br />-{" "}
                  <i>
                    선택 구조 : 입력 받은 값에 따라 선택하여 실행되는 구조
                    (조건문)
                  </i>
                  <br />-{" "}
                  <i>반복 구조 : 입력 값에 따라 반복 실행되는 구조 (반복문)</i>
                  <br />
                </ClassContentsTextTab>
              </ClassContentsText>
              <ClassContentsTitle2>조건문</ClassContentsTitle2>
              <ClassContentsText>
                조건문은 주어진 조건식의 결과에 따라 별도의 명령을 수행하도록
                제어하는 명령문입니다. <br />
                조건문 중에서도 가장 기본이 되는 명령문은 바로 if 문입니다.
                <br />
                자바에서 사용하는 대표적인 조건문의 형태는 다음과 같습니다.
              </ClassContentsText>
              <ClassContentsTitle3>if ~ else 문</ClassContentsTitle3>
              <ClassContentsText>
                if 문은 조건식의 결과가 참(true)이면 주어진 명령문을 실행하며,
                거짓(false)이면 아무것도 실행하지 않습니다.
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`if (조건식) { `}
                    <br />
                    {`    조건식의 결과가 참일 때 실행하고자 하는 명령문;`}
                    <br />
                    {`}`}
                    <br />
                    {`이 부분은 조건식을 만족하거나 만족하거나 공통으로 수행 됩니다.`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`System.out.print("정수를 입력 하세요 : ");`}
                    <br />
                    {`Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`int a = sc.nextInt()`}
                    <br />
                    {`if (a >= 0) {`}
                    <br />
                    {`	System.out.println("양수 입니다.");`}
                    <br />
                    {`} else {`}
                    <br />
                    {`	System.out.println("음수 입니다.");`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>if ~ else if ~ else 문</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`if (조건식) {`}
                    <br />
                    {`	조건식이 참일 때 실행될 문장`}
                    <br />
                    {`} else if (조건식) {`}
                    <br />
                    {`	첫번째 조건식이 거짓이고 현재의 조건이 참인 경우 실행 될 문장`}
                    <br />
                    {`} else {`}
                    <br />
                    {`	조건식이 거짓일 때 실행 될 문장`}
                    <br />
                    {`} `} <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <br />
                <b>[예제1]</b>
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`Scanner sc = new Scanner(System.in); // 키 입력 받기 위해 스캐너 객체 생성`}
                    <br />
                    {`  System.out.print("정수를 입력 하세요 : ");`}
                    <br />
                    {`  int number = sc.nextInt(); // 키보드 입력을 정수형 변수에 담음`}
                    <br />
                    {`  if(number > 100) {`}
                    <br />
                    {`      System.out.println(number + "는 100보다 커요");`}
                    <br />
                    {`  } else if(number < 100) {`}
                    <br />
                    {`      System.out.println(number + "는 100보다 작아요.");`}
                    <br />
                    {`  } else {`}
                    <br />
                    {`      System.out.println(number + "는 100과 같아요.");`}
                    <br />
                    {`  }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <br />
                <b>[예제2]</b>
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`import java.util.Scanner;`}
                    <br />
                    <br />
                    {`public class condition {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`        System.out.print("문자를 입력 하세요 : ");`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        char ch = sc.next().charAt(0);`}
                    <br />
                    {`        if (ch >= 'a' && ch <= 'z') {`}
                    <br />
                    {`            System.out.println("알파벳 소문자 입니다.");`}
                    <br />
                    {`        } else if(ch >= 'A' && ch <= 'Z') {`}
                    <br />
                    {`            System.out.println("알파벳 대문자 입니다.");`}
                    <br />
                    {`        } else {`}
                    <br />
                    {`            System.out.println("알파벳이 아닙니다.");`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle2>switch문</ClassContentsTitle2>
              <ClassContentsText>
                switch문은 if문과 마찬가지로 조건 제어문 입니다. switch문의 if문
                처럼 조건식이 true일 때 블록 내부의 실행문을 실행하는 것이
                아니라, 변수가 어떤 값을 갖는냐에 따라 실행문이 선택 됩니다.
                <br />
                <br />
                <ClassContentsTextTab>
                  - if문에 비해 코드의 가독성을 높여주며 코드가 간결해 집니다.
                  <br />
                  - if문과 달리 조건식을 넣을수가 없고 값만 올 수 있다는 부분에
                  유의해야 합니다. (실수형은 안됨)
                  <br />
                  <br />
                </ClassContentsTextTab>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`switch(변수) {`}
                    <br />
                    {`	case 값 :`}
                    <br />
                    {`		실행문`}
                    <br />
                    {`		....}`}
                    <br />
                    {`		break;  // switch문을 탈출 합니다.`}
                    <br />
                    {`	case 값 :`}
                    <br />
                    {`		....`}
                    <br />
                    {`		break;`}
                    <br />
                    {`	default:`}
                    <br />
                    {`		나머지 조건에 해당`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>스위치문 기본</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`  public class SwitchEx1 {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        System.out.print("계절을 입력 하세요 : ");`}
                    <br />
                    {`        String season = sc.next();`}
                    <br />
                    {`        switch(season) {`}
                    <br />
                    {`            case "spring" : // 해당 조건이 실행 됨`}
                    <br />
                    {`                System.out.println("꽃이 피는 봄이 왔어요^^");`}
                    <br />
                    {`                break; // 해당 조건을 종료`}
                    <br />
                    {`            case "summer" :`}
                    <br />
                    {`                System.out.println("무더운 여름 입니다.");`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            case "fall":`}
                    <br />
                    {`            case "autumn" :`}
                    <br />
                    {`                System.out.println("쓸쓸한 가을 입니다.");`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            case "winter":`}
                    <br />
                    {`                System.out.println("아직 겨울이네요ㅠㅠㅠㅠㅠㅠ");`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            default :`}
                    <br />
                    {`                System.out.println("계절을 잘못 입력 했습니다.");`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>계산기 만들기</ClassContentsTitle3>
              <ClassContentsText>
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class Main {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`        int x, y;`}
                    <br />
                    {`        char op;`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        x = sc.nextInt();`}
                    <br />
                    {`        op = sc.next().charAt(0);`}
                    <br />
                    {`        y = sc.nextInt();`}
                    <br />
                    {`        switch(op) {`}
                    <br />
                    {`            case '+' :`}
                    <br />
                    {`                System.out.printf("SUM : %d\n", x + y);`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            case '-' :`}
                    <br />
                    {`                System.out.printf("SUB : %d\n", x - y);`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            case '*' :`}
                    <br />
                    {`                System.out.printf("MUL : %d\n", x * y);`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            case '/' :`}
                    <br />
                    {`                System.out.printf("DIV : %d\n", x / y);`}
                    <br />
                    {`                break;`}
                    <br />
                    {`            default :`}
                    <br />
                    {`                System.out.println("조건식이 없습니다.");`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(1)</ClassContentsTitle3>
              <ClassContentsText>
                · 시험 성적을 입력 받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~
                79점은 C, 60 ~ 69점은 D, 나머지는 F를 출력하는 프로그램
                <br />
                · 0 ~ 100 사이가 아니면 성적이 잘못 입력 되었다고 출력
                <br />
                <br />
                <b>[선택사항]</b> 성적이 잘못 입력된 경우 다시 입력 받도록 수정
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class ScoreEx1 {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`        // 입력을 위한 스캐너 생성`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        // 입력을 받아서 정수형 변수에 대입`}
                    <br />
                    {`        // 조건문을 만드는데 우선, 0 ~ 100 사이의 정상 적인 입력 인지 확인`}
                    <br />
                    {`        while(true) {`}
                    <br />
                    {`            System.out.print("성적을 입력 하세요 : ");`}
                    <br />
                    {`            int score = sc.nextInt();`}
                    <br />
                    {`            if(score < 0 || score > 100) continue;`}
                    <br />
                    {`            if(score >= 90) System.out.println("A");`}
                    <br />
                    {`            else if(score >= 80) System.out.println("B");`}
                    <br />
                    {`            else if(score >= 70) System.out.println("C");`}
                    <br />
                    {`            else if(score >= 60) System.out.println("D");`}
                    <br />
                    {`            else System.out.println("F");`}
                    <br />
                    {`            break;`}
                    <br />
                    {`        }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(2)</ClassContentsTitle3>
              <ClassContentsText>
                · 세자리의 정수를 입력 받아 가장 큰 수 출력
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`public class Main {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`       int num;`}
                    <br />
                    {`       int a, b, c;`}
                    <br />
                    {`       System.out.print("세자리 정수 입력 : ");`}
                    <br />
                    {`       Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`       num = sc.nextInt();`}
                    <br />
                    {`       a = num / 100;`}
                    <br />
                    {`       b = (num % 100) / 10;`}
                    <br />
                    {`       c = num % 10;`}
                    <br />
                    <br />
                    {`       if (a > b) {`}
                    <br />
                    {`           System.out.println(Math.max(a, c));`}
                    <br />
                    {`       } else {`}
                    <br />
                    {`           System.out.println(Math.max(b,c));`}
                    <br />
                    {`       }`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
              <ClassContentsTitle3>연습문제(3)</ClassContentsTitle3>
              <ClassContentsText>
                · 행사 안내 메일 발송하기
                <br />
                <br />
                <hr />
                <br />
                <ClassContentsTextTab>
                  1. 사용자로부터 이름, 제목, 날짜(20230817), 시간(17) 정보를
                  입력받습니다.
                  <br />
                  2. 입력된 날짜의 월을 추출하여 해당하는 계절을 판단합니다.
                  <br />
                  3. 계절에 따라 적절한 인사말과 입력된 일정 정보를 출력합니다.
                  <br />
                  <br />
                </ClassContentsTextTab>
                <hr />
                <br />
                · 프로그램은 다음과 같은 방식으로 동작해야 합니다.
                <br />
                · 1월부터 12월까지의 월 정보를 입력 받습니다.
                <br />
                · 입력된 월에 따라 다음과 같은 계절에 맞는 인사말을 출력합니다.
                <br />
                <ClassContentsTextTab>
                  - 12월, 1월, 2월 → "한파의 연속인 1월 입니다."
                  <br />
                  - 3월 → "봄의 기운이 느껴지는 3월 입니다."
                  <br />
                  - 4월 → "새싹이 피어나는 4월 입니다."
                  <br />
                  - 5월 → "계절의 여왕 5월 입니다."
                  <br />
                  - 6월 → "활동하기 좋은 6월 입니다."
                  <br />
                  - 7월 → "휴가가 기다려지는 7월 입니다."
                  <br />
                  - 8월 → "무더운 8월 입니다."
                  <br />
                  - 9월 → "선선한 9월 입니다."
                  <br />
                  - 10월 → "천고마비의 계절 10월 입니다."
                  <br />
                  - 11월 → "쓸쓸한 늦가을 11월 입니다."
                  <br />
                </ClassContentsTextTab>
                · 입력된 이름, 제목, 날짜, 시간 정보와 계절 정보를 이용하여
                다음과 같은 형식으로 일정 정보를 출력합니다.
                <br />
                <br />
                <b>[힌트]</b>
                <br />
                · 문자열의 substring을 이용하면 원하는 문자를 추출 할 수 있음
                <br />
                <ClassContentsTextTab>
                  - date = “20230817”;
                  <br />
                  - month = date.substring(4, 6); // 인덱스는 0부터 시작, 그리고
                  두번째 인덱스는 미만 개념
                  <br />
                  <br />
                </ClassContentsTextTab>
                <b>[출력 형식]</b>
                <br />
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    [이름]님.
                    <br />
                    [계절에 맞는 인사말]
                    <br />
                    아래와 일정으로 [제목]를 진행하고자 하오니 오셔서 자리를
                    빛내 주시기 바랍니다.
                    <br />
                    <br />
                    ===== 행사 안내 =====
                    <br />
                    행사 안내 : [제목]
                    <br />
                    일시 : [년]년 [월]월 [일]일
                    <br />
                    시간 : [시간]시
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
                <ClassContentsCodeBox>
                  <ClassContentsCode>
                    {`package 행사안내메일;`}
                    <br />
                    {`import java.util.Scanner;`}
                    <br />
                    {`// 사용자로부터 이름, 제목, 날짜(20230817), 시간(17) 정보를 입력 받습니다.`}
                    <br />
                    {`public class GreetingEx {`}
                    <br />
                    {`    public static void main(String[] args) {`}
                    <br />
                    {`        Scanner sc = new Scanner(System.in);`}
                    <br />
                    {`        System.out.print("이름 : ");`}
                    <br />
                    {`        String name = sc.nextLine();`}
                    <br />
                    {`        System.out.print("제목 : ");`}
                    <br />
                    {`        String title = sc.nextLine();`}
                    <br />
                    {`        System.out.print("날짜 : ");`}
                    <br />
                    {`        String date = sc.nextLine();`}
                    <br />
                    {`        System.out.print("시간 : ");`}
                    <br />
                    {`        String time = sc.nextLine();`}
                    <br />
                    <br />
                    {`        String month = date.substring(4, 6);`}
                    <br />
                    {`        String greeting = "";`}
                    <br />
                    {`        switch (month) {`}
                    <br />
                    {`            case "01" : greeting = "한파의 연속인 1월 입니다."; break;`}
                    <br />
                    {`            case "02" : greeting = "한파의 연속인 2월 입니다."; break;`}
                    <br />
                    {`            case "03" : greeting = "봄의 기운이 느껴지는 3월 입니다."; break;`}
                    <br />
                    {`            case "04" : greeting = "새싹이 피어나는 4월 입니다."; break;`}
                    <br />
                    {`            case "05" : greeting = "계절의 여왕 5월 입니다."; break;`}
                    <br />
                    {`            case "06" : greeting = "활동하기 좋은 6월 입니다."; break;`}
                    <br />
                    {`            case "07" : greeting = "휴가가 기다려지는 7월 입니다."; break;`}
                    <br />
                    {`            case "08" : greeting = "무더운 8월 입니다."; break;`}
                    <br />
                    {`            case "09" : greeting = "선선한 9월 입니다."; break;`}
                    <br />
                    {`            case "10" : greeting = "천고마비의 계절 10월 입니다."; break;`}
                    <br />
                    {`            case "11" : greeting = "쓸쓸한 늦가을 11월 입니다."; break;`}
                    <br />
                    {`            case "12" : greeting = "한파의 연속인 12월 입니다."; break;`}
                    <br />
                    {`            default: System.out.println("알 수 없는 월 입니다.");`}
                    <br />
                    {`        }`}
                    <br />
                    {`        System.out.println(name + "님.");`}
                    <br />
                    {`        System.out.println(greeting);`}
                    <br />
                    {`        System.out.println("아래와 일정으로" + title +"를 진행하고자 하오니 오셔서 자리를 빛내 주시기 바랍니다.\n");`}
                    <br />
                    {`        System.out.println("=".repeat(5) + "행사 안내" + "=".repeat(5));`}
                    <br />
                    {`        System.out.println("날짜 : " + date.substring(0, 4) + "년 " + month + "월 " + date.substring(6,8) + "일");`}
                    <br />
                    {`        System.out.println("시간 : " + time + "시");`}
                    <br />
                    {`    }`}
                    <br />
                    {`}`}
                    <br />
                  </ClassContentsCode>
                </ClassContentsCodeBox>
                <br />
              </ClassContentsText>
            </ClassContentsContainer>
          </EachClass>
          <ArrowContainer>
            <a href="/study/java/02/03" style={{ textDecoration: "none" }}>
              <LeftArrow />
            </a>
            <a href="/study/java/02/05" style={{ textDecoration: "none" }}>
              <RightArrow />
            </a>
          </ArrowContainer>
        </RightContainer>
      </Container>
    </Wrap>
  );
};

export default Java_02_04;
