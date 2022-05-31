import Image from "next/image"
import PerkCard from "./PerkCard";
import React from 'react';
import {motion} from "framer-motion";

function TierWrapperHoc({TierChar, TierMainColor, TierSecondaryColor, TierCharBackground, PerksInTier , children, }) {

  return (
    <div

      className="m-5 p-5 bg-[#0b0b0b] border shadow-inner w-full flex flex-col md:flex-row items-center relative bg-cover bg-no-repeat bg-black bg-red-200 tier-row"
    >
      <div className="w-32 relative h-32 flex justify-center items-center h-full">

        <Image
          src={TierCharBackground}
          layout={"fill"}
          className={`absolute  bg-center bg-cover bg-no-repeat  w-58 flex items-center justify-center h-full z-0`}
        />
        <div className="text-8xl z-10 pb-3">{TierChar}</div>
      </div>
      <div  className="grid grid-cols-10">
      {PerksInTier && PerksInTier.map((perk) => {
        console.log(perk)
          return <PerkCard perkImage={perk.icon} perkName={perk.perk_name} belongsToName={perk.name} perkDescription={perk.description} isAllFlagPerksFlag={true} key={perk.perk_id}/>
        })}
      </div>
    </div>
  );
}

export default React.memo(TierWrapperHoc);
