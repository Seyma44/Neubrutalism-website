import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-5 flex-wrap bg-[#b366f6] border-8 border-b border-black border-solid">
      <p className="text-base font-bold text-white">@2024|Music 90s</p>
      <Image
        src="/logo.png"
        alt="logo"
        width={107}
        height={104}
        className="object-contain border-4 mt-3 mb-3 border-black transform rotate-45 bg-[#ffff02] hover:-rotate-45"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="social"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="social"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="social"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
