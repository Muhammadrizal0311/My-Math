import { Link, useParams } from "react-router-dom";
import { moduleCard } from "../data";

const Module = () => {
  const params = useParams();

  const moduleId = params.id;
  const module = moduleCard.find((module) => module.id == moduleId);

  function modulesCard() {
    const questions = module.questions;

    return (
      <>
        {questions.map((q, index) => {
          return (
            <div className="flex gap-2 items-start px-3" key={index}>
              <div className="">
                <h1 className="bg-secondary px-3 py-1 rounded-full text-white">
                  {index + 1}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-secondary">{q.question}</h1>
                <img className="self-center w-full max-w-sm p-7" src={q.image} alt="" />
                <h1 className="text-sm md:text-base text-slate-600">{q.answer}</h1>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="container px-3 py-12 flex flex-col gap-10 justify-center items-center">
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-center text-2xl font-bold text-primary">
            Apasih Persamaan {module.tittle.slice(6)} ?
          </h1>
          <img
            className="rounded-md px-6 w-full max-w-4xl self-center"
            src={module.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl font-semibold text-secondary">
            Penjelasan Dari Persamaan {module.tittle.slice(6)}
          </h1>
          <p className="text-sm text-slate-600">{module.paragraps}</p>
        </div>
        <div className="w-full flex flex-col gap-6 pb-2">
          <h1 className="text-xl font-semibold text-secondary">
            Contoh Soal Persamaan {module.tittle.slice(6)}
          </h1>
          <div className="flex flex-col px-5 gap-10 w-full justify-center">{modulesCard()}</div>
        </div>
        <Link to={"/#module"} className="self-start text-secondary text-lg font-semibold">
          &laquo; Kembali
        </Link>
      </div>
    </section>
  );
};

export default Module;
