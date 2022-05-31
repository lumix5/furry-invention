import AllTiersWrapper from "../../components/AllTiersWrapper.js";
import {AnimatePresence} from "framer-motion";
import PerkCard from "../../components/PerkCard";
import React from "react";

const KillersPerks = ({killerPerks}) => {
    killerPerks = Object.values(killerPerks)

    console.log(killerPerks)
    return (
        <AllTiersWrapper Perks={killerPerks}>
                {/*<AnimatePresence>*/}
                {/*    <div className="flex">*/}
                {/*      {killerPerks.map((perk) => {*/}
                {/*        console.log(perk);*/}
                {/*        return <PerkCard perkImage={perk.icon} perkName={perk.perk_name} belongsToName={perk.name} perkDescription={perk.description} isAllFlagPerksFlag={true} key={perk._id}/>;*/}
                {/*      })}*/}
                {/*    </div>*/}
                {/*</AnimatePresence>*/}
        </AllTiersWrapper>
    )
}

export async function getServerSideProps() {

  const killerPerksResponse = await fetch(`http:localhost/perks/killer`);
  const killerPerks = await killerPerksResponse.json();

  console.log(killerPerks)

  return {props: {killerPerks}};
}


export default KillersPerks;
