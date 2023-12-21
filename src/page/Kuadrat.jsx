import { Link } from "react-router-dom";
import React, { useState } from "react";

const Kuadrat = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [solusi, setSolusi] = useState([]);

  const hitungPersamaanKuadrat = (a, b, c) => {
    const diskriminan = Math.pow(b, 2) - 4 * a * c;
    const solusi1 = (-b + Math.floor(diskriminan)) / (2 * a);
    const solusi2 = (-b - Math.floor(diskriminan)) / (2 * a);
    return [solusi1, solusi2];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasil = hitungPersamaanKuadrat(a, b, c);
    setSolusi(hasil);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="container px-3 py-10 flex flex-col gap-10 justify-center items-start">
        <div>
          <Link to={"/#operator"} className="text-secondary">
            &laquo; Kembali
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <h1 className="text-center text-2xl font-bold text-primary pb-5">
            Masukkan Angka
          </h1>
          <div className="flex flex-col gap-8">
            <div className="w-full p-3 flex justify-center">
              <input
                className="border-solid border-slate-600 border focus:border-secondary rounded-sm placeholder:p-1 w-14"
                type="number"
                name=""
                id="a"
                placeholder="a"
                value={a}
                onChange={(e) => setA(e.target.value)}
              />
              <label className="pr-2" htmlFor="a">
                X<sup>2</sup> +
              </label>
              <input
                className="border-solid border-slate-600 border focus:border-secondary rounded-sm placeholder:p-1 w-14"
                type="number"
                name=""
                id="b"
                placeholder="b"
                value={b}
                onChange={(e) => setB(e.target.value)}
              />
              <label className="pr-2" htmlFor="b">
                X +
              </label>
              <input
                className="border-solid border-slate-600 border focus:border-secondary rounded-sm placeholder:p-1 w-14"
                type="number"
                name=""
                id="c"
                placeholder="c"
                value={c}
                onChange={(e) => setC(e.target.value)}
              />
              <label className="px-2" htmlFor="c">
                = y
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
            <h1>Nilai X = {Array.isArray(solusi) ? solusi.join(", ") : "0"}</h1>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kuadrat;
