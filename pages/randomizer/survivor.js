import React from 'react'
import RandomizerLayout from "../../components/RandomizerLayout";
import {BsArrowClockwise} from "react-icons/bs";
import PerkCard from "../../components/PerkCard";
import KillerRedRankImg from '../../img/IconRank_killer_1.webp'
import Card from "../../components/Card";
import {useRouter} from "next/router";

function Survivor({ SurvivorPerks, Survivor }) {
  const router = useRouter()
  let survivorIcon = JSON.parse(Survivor[0].icon)
  console.log(survivorIcon.portrait)
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
          <Card TierMainColor={"red"} TierSkullImg={KillerRedRankImg} KillerImage={survivorIcon.portrait}/>
          <div className="text-white text-lg">{Survivor.name}</div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {SurvivorPerks.map((perk) => {
            console.log(perk);
            return <PerkCard perkImage={perk.icon} perkName={perk.perk_name} belongsToName={perk.name} perkDescription={perk.description}/>;
          })}
        </div>
      </div>
    </RandomizerLayout>
  )
}

export async function getServerSideProps() {
  //TODO PROMISE ALL
  // Fetch data from external API


  const SurvivorResponse = await fetch(`http:localhost/random/survivor`);
  const Survivor = await SurvivorResponse.json();


  const SurvivorPerksResponse = await fetch(`http:localhost/random/survivor/perks`);
  const SurvivorPerks = await SurvivorPerksResponse.json();

  // Pass data to the page via props
  return { props: { SurvivorPerks, Survivor } };
}

export default Survivor;
