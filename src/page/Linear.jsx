import { Link } from "react-router-dom";
import React, { useState } from "react";

const Linear = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const hitungPersamaanLinear = ( a, b) => {
      return (-b / a);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasil = hitungPersamaanLinear(a, b);
    setResult(hasil);
  };

  return (
    <section className="w-full h-[100vh] flex justify-center">
      <div className="container px-3 py-10 flex flex-col gap-10 justify-center w-full">
        <div>
          <Link to={"/#operator"} className="text-secondary">
            &laquo; Kembali
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <h1 className="text-center text-2xl font-bold text-primary pb-5">
            Masukkan Angka
          </h1>
          <div className="flex flex-col gap-8">
            <div className="h-full w-full p-3 flex justify-center">
              <input
                className="border-solid border-slate-600 border focus:border-secondary rounded-sm placeholder:p-1 w-14"
                type="number"
                name=""
                id="a"
                placeholder="a"
                value={a} onChange={(e) => setA(e.target.value)}
              />
              <label className="pr-2" htmlFor="a">
                X +
              </label>
              <input
                className="border-solid border-slate-600 border focus:border-secondary rounded-sm placeholder:p-1 w-14"
                type="number"
                name=""
                id="b"
                placeholder="b"
                value={b} onChange={(e) => setB(e.target.value)} 
              />
              <label className="px-2" htmlFor="b">
                = 0
              </label>
            </div>
            <button
              className="text-white bg-secondary w-40 p-1 rounded-md self-center"
              type="submit"
            >
              Hitung Angka
            </button>
          </div>
          <h1 className="text-center text-2xl font-bold text-primary pt-10">
            Hasil Perhitungan
          </h1>
          <div className="h-full w-full p-3 flex justify-center pb-5">
            <h1>Nilai x = {result}</h1>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Linear;
