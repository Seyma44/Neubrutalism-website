import Image from "next/image";

export interface MusicProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  hits: number;
  score: string;
}

interface Prop {
  music: MusicProp;
  index: number;
}

function MusicCard({ music }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full card-border bg-[#f6a5ff]">
      <div className="relative w-full h-[37vh]">
        <Image
          src={music.image.original}
          alt={music.name}
          fill
          className="border-8 border-b border-black border-solid"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-black text-xl line-clamp-1 w-full p-3">
            {music.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {music.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center px-3">
            <Image
              src="./hits.svg"
              alt="hits"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-[#ffff02] font-bold">
              {music.hits}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#32c0c3]">{music.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
