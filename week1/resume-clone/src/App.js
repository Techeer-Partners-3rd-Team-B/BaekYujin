import Header from "./components/Header";
import Section from "./components/Section";

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
      <Section title="Project" />
      <Section title="Experience" />
      <Section title="Education" />
      <Section title="Blog" />
      <Section title="Skill" />
    </div>
  );
}

export default App;
