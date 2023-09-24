import { Children } from "react";

function Section({ title, content, children }) {
  return (
    <div className="flex justify-center mt-2">
      <div className="flex-col items-center">
        <h2 className="text-[25px] font-semibold">{title}</h2>
        <hr className="bg-gray-700 h-0.5 w-[780px] mb-[6px]" />
        {children ? children : <p className="text-[11px]">{content}</p>}
      </div>
    </div>
  );
}

export default Section;
