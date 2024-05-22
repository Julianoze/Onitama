import MOVEMENTS from "@/data/Movements";
import getDescription from "@/handler/Description";
import WayOfWindCard from "./components/card/WayOfWindCard";
import CommonCard from "./components/card/CommonCard";

export default function Home() {

  return (
    <div className="flex flex-col w-full ">
      <div className="bg-black"></div>
      <div className="bg-green"></div>
      <div className="bg-cyan-700"></div>
      {MOVEMENTS
        .map((x, i) => {
        const description = getDescription(x.name);

        return (
          <div className="w-full justify-center" key={i}>
            {
              x.from !== "way-of-wind" ?
              <CommonCard
                movement={x}
                description={description}
              /> :
              <WayOfWindCard
                movement={x}
                description={description}
              />
            }
          </div>
        )
      })}
    </div>
  );
}
