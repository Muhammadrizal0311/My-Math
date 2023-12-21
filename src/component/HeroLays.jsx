function Hero() {
  return (
    <>
      <section id='home' className="w-full flex items-center justify-center">
        <div className="container px-3 py-20 flex flex-col md:flex-row-reverse md:items-center md:px-14 gap-10 md:gap-0">
          <div className="w-full px-7 md:px-0 flex justify-center items-center">
            <img className="w-full" src='/HeroImage.png' alt="" />
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
