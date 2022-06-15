import Image from "next/image";
import PerkCard from "./PerkCard";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {v4 as uuidv4} from "uuid";

const Card = dynamic(() => import("./Card"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center h-64 p-3 m-3 bg-black bg-white bg-gray-800 bg-center bg-no-repeat bg-cover border rounded-lg w-44 -5 bg-primary from-gray-900 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"></div>
  ),
});

function TierWrapperHoc({
  TierChar,
  TierCharBackground,
  IterateOnTier,
}) {

  const router = useRouter();

  let routerPath = router.pathname;

  return (
    <div className="m-5 p-5 bg-[#0b0b0b] border shadow-inner w-full flex flex-col md:flex-row items-center relative bg-cover bg-no-repeat bg-black bg-red-200 tier-row">
      <div
        className="relative flex items-center justify-center"
        style={{ minWidth: "6.2rem" }}
      >
        <Image
          src={TierCharBackground}
          layout={"fill"}
          className={`absolute  bg-center bg-cover bg-no-repeat  w-58 flex items-center justify-center h-full z-0`}
        />
        <div className="z-10 pb-3 text-8xl">{TierChar}</div>
      </div>
      <div className="flex flex-wrap mobile-only:justify-center">
        {routerPath === "/killers" || routerPath === "/survivors"
          ? IterateOnTier.map((character) => {
              return (
                <Card characterIcon={character["imgs/portrait"]} character={character} key={character._id}/>
              );
            })
          : IterateOnTier.map((perk) => {
              return (
                <PerkCard
                  perkImage={perk.icon}
                  perkName={perk.perk_name}
                  belongsToName={perk.name}
                  perkDescription={perk.description}
                  isAllFlagPerksFlag={true}
                  isAllPerksPage={true}
                  perk={perk}
                  key={uuidv4()}
                />
              );
            })}
      </div>
    </div>
  );
}

export default TierWrapperHoc;
