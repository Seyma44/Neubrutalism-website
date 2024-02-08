import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-[#b366f6] bg-cover bg-no-repeat border-8 border-t border-black border-solid sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10 mt-10">
        <h1 className="sm:text-7xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Special <span className="yellow-text">90&apos;s</span> Party
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/hero-image-2.png" alt="hero" fill className="object-contain" />
        <Image
          src="/hero-image-1.png"
          alt="tape"
          width={131}
          height={76}
          className="absolute mt-40 right-10 transform rotate-90 hover:skew-y-12 hover:scale-125"
        />
        <Image
          src="/hero-image-1.png"
          alt="tape"
          width={101}
          height={56}
          className="absolute mt-3 hover:skew-y-12 hover:scale-125"
        />
      </div>
    </header>
  );
}

export default Hero;
