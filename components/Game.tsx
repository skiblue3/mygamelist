import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface GameProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  textColor: string;
}

const GameSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  textColor,
}: GameProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-red-600 p-4">
            <Image src="/gamepad2.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className={`bold-18 text-${textColor}`}>{title}</h4>
            <p className={`regular-18 text-${textColor}`}>{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 bg-gray-90 p-1 rounded-3xl">
          <span className="flex -space-x-4 overflow-hidden  ">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-red-50">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-9 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <GameSite
          backgroundImage="bg-bg-img-2"
          title="Sekiro: Shadows Die Twice"
          subtitle="FromSoftware Inc."
          peopleJoined="70+ Playing"
          textColor="white"
        />

        <GameSite
          backgroundImage="bg-bg-img-1"
          title="The Witcher 3: Wild Hunt"
          subtitle="CD Projekt"
          peopleJoined="50+ Playing"
          textColor="black"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-red-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-black">
            Unearth hidden gems and explore new worlds as we handpick
            personalized game suggestions to match your unique gaming style. Our
            expertly crafted recommendations ensure every play session is an
            adventure you won't forget.
          </p>
          <Image
            src="/quote.svg"
            alt="game-2"
            width={186}
            height={129}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Game;
