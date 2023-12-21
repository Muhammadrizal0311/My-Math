function Section({
  id,
  colorTittle,
  tittle,
  subTittle,
  child,
  colorBackground,
}) {
  return (
    <section
      id={id}
      className={`w-full flex justify-center items-center ${colorBackground}`}
    >
      <div className="container px-3 py-20 flex flex-col gap-10 justify-center items-center">
        <div className="w-full flex flex-col gap-2">
          <h1 className={`text-center text-2xl font-bold ${colorTittle}`}>
            {tittle}
          </h1>
          <h1 className="text-center text-sm text-slate-600">{subTittle}</h1>
        </div>
        {child}
      </div>
    </section>
  );
}

export default Section;
