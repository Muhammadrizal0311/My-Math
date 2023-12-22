import { Link } from "react-router-dom";
import { logoIcon } from "../data";

function Footer() {
  return (
    <>
      <section className="w-full flex justify-center items-center bg-primary">
        <div className="container px-3 py-7 flex flex-col gap-14 md:gap-10 text-white md:flex-row">
          <div className="w-full flex flex-col gap-2 max-w-xs">
            <div className="nav-tittle flex items-center gap-2">
              <img className="max-w-[40px] " src="/img/logo-White.png" alt="" />
              <h1 className="headerTittle">MyMath</h1>
            </div>
            <h1 className="text-sm font-extralight">
              Jl. Sadar 1 Rt. 002 Rw. 014 No. 45, Kel. Cipinang Muara, Kec.
              Jatinegara, Jakarta Timur, DKI Jakarta
            </h1>
            <div className="flex gap-3 pt-4">
              {logoIcon.map((icon, index) => {
                return (
                  <Link key={index} className="flex w-[30px]">
                    <img className="w-full" src={icon.path} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-2xl font-bold colorTittle border-b-2 pb-4">
              Credit By
            </h1>
            <h1 className="text-sm font-extralight pt-4">Muhammad Rizal</h1>
            <h1 className="text-sm font-extralight">411231097</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
