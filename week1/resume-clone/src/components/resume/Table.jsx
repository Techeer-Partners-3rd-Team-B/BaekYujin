function Table() {
  return (
    <div className="">
      <table className="w-[780px] text-[11px] text-left">
        <tbody>
          <tr className="bg-white border-b border-gray-300">
            <td colSpan="2" className="py-1">
              <div className="flex">
                <p className="mb-2 mr-1 font-bold text-pink-200">
                  Remember Plus
                </p>
                <p>/ (2023.07 - 2023.08)</p>
              </div>
              명함을 등록하면 자동으로 관계도를 생성해 주는 서비스 <br />
              기존의 Remember 서비스에 관계를 정의할 수 있는 기능과 시각화를
              통해 한 눈에 관계를 볼 수 있는 기능을 추가함
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td colSpan="2" className="py-1">
              <ol className="pl-8">
                <li className="pl-4 mb-2">
                  Network 그래프로 관계를 한눈에 볼 수 있는 관계 시각화 페이지
                  구현
                  <br />
                  <ul className="ml-4">
                    <li className="pl-4 mt-1">
                      서비스의 핵심 페이지로, 복잡한 Network 그래프를 구현하기
                      위해 D3.js 라이브러리를 사용함
                      <ul className="ml-4">
                        <li className="pl-4 mt-1">
                          초기 화면에서는 그래프의 전체적인 형태가, 확대했을때는
                          관계명과 이름이 보이도록 하기 위해 D3.js의 zoom 이벤트
                          핸들러에 transform 속성을 사용해 확대, 축소가 가능한
                          컴포넌트를 만들고, 그 안에 그래프가 렌더링 되도록 함
                        </li>
                        <li className="pl-4 mt-1">
                          그래프가 복잡해지면 노드들이 겹치는 문제가 발생해
                          D3.js의 Many-body force의 strength 값을 음수로
                          적용하여 노드끼리 겹치지 않도록 구현함
                        </li>
                        <li className="pl-4 mt-1">
                          Network 그래프가 별자리처럼 보이도록 하기 위해 svg의
                          LinearGradient 요소와 defs 요소를 사용해 확대할수록
                          배경이 점점 어두워지도록 디자인함
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="pl-4 mb-2">
                  활동에 대한 통계를 확인하고, 정보를 수정할 수 있는 마이페이지
                  구현
                  <ul className="ml-4">
                    <li className="pl-4 mt-1">
                      다양한 차트가 필요한 대시보드는 Highcharts 라이브러리를
                      사용해서 구현함
                    </li>
                  </ul>
                </li>
                <li className="pl-4 mb-2">
                  MSW를 이용한 API Mocking
                  <ul className="ml-4">
                    <li className="pl-4 mt-1">
                      프론트엔드 개발 효율을 높이기 위해 퍼블리싱 완료 후, API
                      Mocking을 적용함
                    </li>
                  </ul>
                </li>
              </ol>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <th scope="row" className="py-1 font-medium">
              기술 스택
            </th>
            <td className="py-1">
              D3.js, Highcharts, Three.js, React.js, TypeScript, Tailwind CSS
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <th scope="row" className="py-1 font-medium">
              프로젝트 결과물
            </th>
            <td className="py-1 underline text-gray-500">
              <div className="flex mb-1">
                <p>Github : </p>
                <a href="https://github.com/SV-Summer-BootCamp-Team-F">
                  https://github.com/SV-Summer-BootCamp-Team-F
                </a>
              </div>
              <div className="flex">
                <p>Demo : </p>
                <a href="https://youtu.be/Orf4dlkqGfo">
                  https://youtu.be/Orf4dlkqGfo
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
