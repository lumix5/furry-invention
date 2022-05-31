import React from 'react'

import {Tabs, Center, Button} from "@mantine/core";
import PerkCard from "../components/PerkCard";
import Card from "../components/Card";
import KillerRedRankImg from "../img/IconRank_killer_1.webp";
import { BsArrowClockwise } from "react-icons/bs";
import {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import Link from "next/link";


function RandomizerLayout({ children }) {
  const router = useRouter()


  return (

    <Center>
      <div grow position="center" className="flex items-center" style={{height: '80vh'}}>
        <div className="" >
          <div className="w-full justify-center flex">
            <Link href="/randomizer/killer"><Button className="m-2">Killer</Button></Link>
            <Link href="/randomizer/survivor"><Button className="m-2">Survivor</Button></Link>
          </div>
          {children}
          <div className="flex justify-center flex-col items-center">
            <div className="flex items-center">

              {/*<Card TierMainColor={"red"} TierSkullImg={KillerRedRankImg} />*/}
            </div>
          </div>
        </div>

      </div>
    </Center>
  );
}

export async function getServerSideProps() {
  //TODO PROMISE ALL
  // Fetch data from external API
  const killerPerksRepsonse = await fetch(`http:localhost/random/killer/perks`);
  const killerPerks = await killerPerksRepsonse.json();

  const killerResponse = await fetch(`http:localhost/random/killer`);
  const killer = await killerResponse.json();

  // const SurvivorResponse = await fetch(`http:localhost/random/survivor`);
  // const Survivor = await SurvivorResponse.json();

  // const SurvivorPerksResponse = await fetch(`http:localhost/random/survivor/perks`);
  // const SurvivorPerks = await SurvivorPerksResponse.json();

  // Pass data to the page via props
  return { props: { killerPerks, killer } };
}



export default RandomizerLayout

