import { Link } from "react-router-dom";
import Header from "../component/Header";
import Hero from "../component/HeroLays";
import Section from "../component/Section";
import { benefitsCard, moduleCard, operatorCard } from "../data";
import Footer from "../component/Footer";

function Home() {
  function benefitsSection() {
    return (
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
        {benefitsCard.map((benefit, index) => {
          return (
            <div key={index} className="py-4 flex flex-col gap-2 max-w-[300px]">
              <img
                src={benefit.image}
                alt=""
                className="w-full max-w-[100px] self-center pb-2"
              />
              <h1 className="text-lg font-semibold text-primary">
                {benefit.tittle}
              </h1>
              <h1 className="text-sm text-slate-600">{benefit.text}</h1>
            </div>
          );
        })}
      </div>
    );
  }

  function aboutSection() {
    return (
      <div className="container px-3 flex flex-col md:flex-row-reverse items-center gap-10 md:px-14">
        <div className="w-full max-w-[400px] px-11 md:px-0 flex justify-center items-center ">
          <img
            className="w-full rounded-md overflow-hidden"
            src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=826&t=st=1703213089~exp=1703213689~hmac=299ffe6495f4575b89225559776815acfabb2c4f5c77a6ef62b2311c9d981c6f"
            alt=""
          />
        </div>
        <div className="w-full">
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            tellus at lorem venenatis semper ut vel turpis. Proin sodales, nulla
            at maximus eleifend, magna sem facilisis tellus, sit amet
            ullamcorper lectus tellus id nulla. Suspendisse vitae ipsum et mi
            porttitor mollis at eget ligula. Vestibulum vitae ligula lorem. Sed
            aliquam feugiat felis id condimentum. Suspendisse sagittis viverra
            orci, ut rhoncus velit tempus quis. Quisque vestibulum sapien ut
            nisl sollicitudin, eget finibus est ultricies. Donec mollis porta
            cursus. Nullam condimentum dui id venenatis tempor. In mollis semper
            nisi quis condimentum.
          </p>
        </div>
      </div>
    );
  }

  function moduleSection() {
    return (
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-10 2xl:gap-14">
        {moduleCard.map((module, index) => {
          return (
            <div
              className="w-full flex flex-col gap-4 max-w-[300px] py-5"
              key={index}
            >
              <div className="w-full rounded-lg overflow-hidden">
                <img className="w-full" src={module.image} alt="" />
              </div>
              <div className="w-full flex flex-col gap-10">
                <div className="w-full flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-primary">
                    {module.tittle}
                  </h1>
                  <h1 className="text-sm text-slate-600">{module.subTittle}</h1>
                </div>
                <div className="flex w-full justify-end">
                  <Link
                    className="text-secondary font-semibold"
                    to={"module/" + module.id}
                  >
                    Kunjungi Module &raquo;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function operatorSection() {
    return (
      <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-10 2xl:gap-20">
        {operatorCard.map((operator, index) => {
          return (
            <div
              key={index}
              className="w-full flex gap-3 max-w-sm p-3 bg-white rounded-xl border-solid border-2 border-slate-300 shadow-lg"
            >
              <div className="">
                <h1 className="bg-secondary px-3 py-1 rounded-full text-white">
                  {index + 1}
                </h1>
              </div>
              <div className=" flex flex-col gap-8 md:gap-5 w-full">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-primary">
                    {operator.tittle}
                  </h1>
                  <p className="text-sm text-slate-600">{operator.subTittle}</p>
                </div>
                <div className="w-full flex justify-end">
                  <Link
                    to={"operator/" + operator.path}
                    className="text-secondary font-semibold"
                  >
                    Mulai Operator &raquo;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function supportSection() {
    return (
      <div className="container px-3 flex flex-col md:flex-row items-center gap-10 md:px-14">
        <div className="w-full max-w-[300px] px-8 md:px-0 flex justify-center items-center">
          <img
            className="w-full"
            src="https://th.bing.com/th?id=OIP.CrB1kThGT6DVtwc3vSQIogAAAA&w=214&h=224&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col gap-8">
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            tellus at lorem venenatis semper ut vel turpis. Proin sodales, nulla
            at maximus eleifend, magna sem facilisis tellus, sit amet
            ullamcorper lectus tellus id nulla. Suspendisse vitae ipsum et mi
            porttitor mollis at eget ligula. Vestibulum vitae ligula lorem. Sed
            aliquam feugiat felis id condimentum. Suspendisse sagittis viverra
            orci, ut rhoncus velit tempus quis. Quisque vestibulum sapien ut
            nisl sollicitudin, eget finibus est ultricies. Donec mollis porta
            cursus. Nullam condimentum dui id venenatis tempor. In mollis semper
            nisi quis condimentum.
          </p>
          <div className="w-full flex justify-end">
            <Link
              to="https://www.undira.ac.id"
              className="text-secondary font-semibold"
            >
              Kunjungi Halaman &raquo;
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Section
        id={"benefits"}
        colorTittle={"text-primary"}
        tittle={"Apa Saja Manfaat Yang Didapatkan ?"}
        subTittle={
          "Website ini akan menjelaskan dan mempelajari kalkulus ditingkat Universitas"
        }
        child={benefitsSection()}
      />
      <Section
        id={"about"}
        colorTittle={"text-secondary"}
        colorBackground={"bg-secondary2"}
        tittle={"Mengapa Kami Membuat Website Ini ?"}
        child={aboutSection()}
      />
      <Section
        id={"module"}
        colorTittle={"text-primary"}
        tittle={"Apa Yang Kita Pelajari ?"}
        subTittle={
          "Website ini akan menjelaskan dan mempelajari kalkulus ditingkat Universitas"
        }
        child={moduleSection()}
      />
      <Section
        id={"operator"}
        colorTittle={"text-secondary"}
        colorBackground={"bg-secondary2"}
        tittle={"Fitur Operasimatika ?"}
        subTittle={
          "Didalam website ini saya juga membuat fitur kalkulator yang akan membantu teman teman semua untuk menghitung hasil."
        }
        child={operatorSection()}
      />
      <Section
        id={"support"}
        colorTittle={"text-primary"}
        tittle={"Terima Kasih"}
        child={supportSection()}
      />
      <Footer />
    </>
  );
}

export default Home;
