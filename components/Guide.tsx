import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/gamepad.svg" alt="gamepad" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-red-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Navigate Your Perfect Play
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with MyGameList, you'll never feel lost in the gaming world
            again. Enjoy our offline game library feature, ensuring
            entertainment even when offline. Invite friends and family to dive
            into thrilling adventures, conquer valleys, and scale gaming peaks
            together
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/gta5-bg.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={60}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full gap-1">
                <p className="regular-16 text-gray-20">Game Played</p>
                <p className="bold-16 text-red-50">16hr 20mins</p>
              </div>
              <p className="bold-20 mt-2"> GTA V</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Current Mission</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Deathwish
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
