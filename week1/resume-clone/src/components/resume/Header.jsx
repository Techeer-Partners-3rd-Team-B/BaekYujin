function Header() {
  return (
    <div className="flex flex-col mb-2">
      <div className="w-screen h-[12px] bg-pink-100 mb-[20px]"></div>
      <div className="flex justify-center">
        <img
          className="w-24 h-[120px]"
          src="https://github.com/Yujin-Baek/highcharts/assets/87238236/99fa56e7-45dc-432e-8784-ff804d6bccf3"
          alt="avatar"
        />
        <div className="flex-col ml-[24px]">
          <h1 className="text-[35px] font-medium">백유진</h1>
          <h2 className="text-[23px] text-pink-200 font-medium">
            Frontend Engineer
          </h2>
        </div>
        <table className="text-[11px] text-left ml-44">
          <tbody>
            <tr className="bg-white border-b border-gray-300">
              <th scope="row" className="py-1 font-medium">
                Phone
              </th>
              <td className="pl-8 py-1">010-1234-2222</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <th scope="row" className="py-1 font-medium">
                Email
              </th>
              <td className="pl-8 py-1 underline text-gray-500">
                yujin.px@gmail.com
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <th scope="row" className="py-1 font-medium">
                GitHub
              </th>
              <td className="pl-8 py-1 underline text-gray-500">
                <a href="https://github.com/Yujin-Baek">
                  https://github.com/Yujin-Baek
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <th scope="row" className="py-1 font-medium">
                Medium
              </th>
              <td className="pl-8 py-1 underline text-gray-500">
                <a href="https://medium.com/@yujin.px">
                  https://medium.com/@yujin.px
                </a>
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="py-1 font-medium">
                Tistory
              </th>
              <td className="pl-8 py-1 underline text-gray-500">
                <a href="https://sweetraincodingnote.tistory.com/">
                  https://sweetraincodingnote.tistory.com/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Header;
