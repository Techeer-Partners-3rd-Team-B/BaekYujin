function Section({ title, content }) {
  return (
    <div className="flex justify-center">
      <div className="flex-col items-center">
        <h2 className="text-[25px] font-semibold">{title}</h2>
        <hr className="bg-gray-700 h-0.5 w-[920px] mb-[12px]" />
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Section;
