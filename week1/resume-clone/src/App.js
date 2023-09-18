import Header from "./components/Header";
import Section from "./components/Section";
import Table from "./components/Table";

function App() {
  return (
    <div className="flex-col justify-center items-center">
      <Header />
      <Section
        title="Summary"
        content={
          <>
            React.js를 사용해서 웹페이지의 레이아웃을 구성하고, 페이지에 필요한
            컴포넌트들을 구현할 수 있습니다.
            <br />
            데이터 시각화에 관심이 많고, D3.js, Highcharts를 활용한 데이터
            시각화 경험이 있습니다.
            <br />
            프론트엔드 개발 효율을 높이기 위해 항상 고민하며, 프로젝트에 MSW를
            이용해 API Mocking을 적용한 경험이 있습니다.
          </>
        }
      />
      <Section title="Project">
        <Table />
      </Section>
      <Section
        title="Experience"
        content={
          <>
            <div className="flex">
              <p>Good-Night-Hackathon-Frontend 2023.08.26 / </p>
              <a
                className="underline text-gray-500 ml-1"
                href="https://github.com/Yujin-Baek/Good-Night-2nd-Hackathon-Frontend"
              >
                Github 링크
              </a>
            </div>
            [디캠프 x 테커] 실리콘밸리 SW 부트캠프 2023.06 - 2023.08
          </>
        }
      />
      <Section
        title="Education"
        content={
          <>
            충남대학교 컴퓨터융합학부
            <br />
            2021.03-2025.02 졸업예정
          </>
        }
      />
      <Section
        title="Blog"
        content={
          <ul className="ml-4">
            <li className="pl-4">
              <div className="flex">
                <p>D3.js를 이용해서 Network 그래프 만들기 -</p>
                <a
                  className="underline text-gray-500 ml-1"
                  href="https://medium.com/@yujin.px/d3%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-network-%EA%B7%B8%EB%9E%98%ED%94%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-30a5850c5e86"
                >
                  링크
                </a>
              </div>
            </li>
            <li className="pl-4">
              <div className="flex">
                <p>React에서 Highcharts 사용해보기 -</p>
                <a
                  className="underline text-gray-500 ml-1"
                  href="https://medium.com/@yujin.px/react%EC%97%90%EC%84%9C-highcharts-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0-b22c74ef0002"
                >
                  링크
                </a>
              </div>
            </li>
          </ul>
        }
      />
      <Section
        title="Skill"
        content={
          <ul className="ml-4">
            <li className="pl-4">Language : TypeScript, JavaScript</li>
            <li className="pl-4">Framework & Library : React.js, D3.js</li>
            <li className="pl-4">CSS Framework : Tailwind CSS</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;
