function Hero() {
  return (
    <>
      <section id='home' className="w-full flex items-center justify-center">
        <div className="container px-3 py-20 flex flex-col md:flex-row-reverse md:items-center md:px-14 gap-10 md:gap-0">
          <div className="w-full px-7 md:px-0 flex justify-center items-center">
            <img className="w-full" src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-secondary lg:text-2xl">Hallo Selamat Datang</h1>
            <h1 className="text-2xl font-bold text-primary lg:text-3xl">Website Belajar MyMath</h1>
            <h1 className="text-sm text-slate-600 lg:text-base">Tempat belajar asik dan menyenangkan, serta modul yang didapatkan berdasarkan ilmu perguruan tinggi.</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
