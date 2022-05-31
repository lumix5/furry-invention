import React from 'react'
import RandomizerLayout from "../../components/RandomizerLayout";
import {BsArrowClockwise} from "react-icons/bs";
import PerkCard from "../../components/PerkCard";
import { useRouter } from 'next/router'
import KillerRedRankImg from '../../img/IconRank_killer_1.webp'
import Card from "../../components/Card";

function killer({killerPerks, killer}) {
  const router = useRouter()
  let killerIcon = JSON.parse(killer[0].icon)
  return (

    <RandomizerLayout>
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center relative" >
          <BsArrowClockwise
            color={"white"}
            size={35}
            className="cursor-pointer absolute -left-8"
            onClick={() => router.reload(window.location.pathname)}
          />
          <Card TierMainColor={"red"} TierSkullImg={KillerRedRankImg} KillerImage={killerIcon.portrait}/>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {killerPerks.map((perk) => {
            console.log(perk);
            return <PerkCard perkImage={perk.icon} perkName={perk.perk_name} belongsToName={perk.name} perkDescription={perk.description}/>;
          })}
        </div>
      </div>
    </RandomizerLayout>
  )
}

export async function getServerSideProps() {

  const killerPerksResponse = await fetch(`http:localhost/random/killer/perks`);
  const killerPerks = await killerPerksResponse.json();

  const killerResponse = await fetch(`http:localhost/random/killer`);
  const killer = await killerResponse.json();


  return {props: {killerPerks, killer}};
}

export default killer;
