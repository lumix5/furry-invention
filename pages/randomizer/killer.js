import React from "react";
import RandomizerLayout from "../../components/RandomizerLayout";
import { BsArrowClockwise } from "react-icons/bs";
import PerkCard from "../../components/PerkCard";
import { useRouter } from "next/router";
import KillerRedRankImg from "../../img/IconRank_killer_1.webp";
import Card from "../../components/Card";
import axios from "axios";
import {useRouterRefresh} from "../../components/SmallRating";

function killer({ killerPerks, killer }) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refresh = useRouterRefresh();

  return (
    <RandomizerLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex items-center">
          <BsArrowClockwise
            color={"white"}
            size={35}
            className="absolute cursor-pointer -left-8"
            onClick={() => refresh()}
          />
          <Card
            TierMainColor={"red"}
            isWithRating={false}
            TierSkullImg={KillerRedRankImg}
            characterIcon={killer[0].imgs.portrait}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <PerkCard
            perkImage={killerPerks[0][0].icon}
            perkName={killerPerks[0][0].name}
            belongsToName={killerPerks[0][0].killerName}
            perkDescription={killerPerks[0][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={killerPerks[1][0].icon}
            perkName={killerPerks[1][0].name}
            belongsToName={killerPerks[1][0].killerName}
            perkDescription={killerPerks[1][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={killerPerks[2][0].icon}
            perkName={killerPerks[2][0].name}
            belongsToName={killerPerks[2][0].killerName}
            perkDescription={killerPerks[2][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={killerPerks[3][0].icon}
            perkName={killerPerks[3][0].name}
            belongsToName={killerPerks[3][0].killerName}
            perkDescription={killerPerks[3][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
        </div>
      </div>
    </RandomizerLayout>
  );
}

export async function getServerSideProps() {
  const killerPerksResponse = await axios.get(
    `https://dead-by-api.herokuapp.com/api/killers/random`
  );

  let urls = [
    "https://dead-by-api.herokuapp.com/api/perks/killer/random",
    "https://dead-by-api.herokuapp.com/api/perks/killer/random",
    "https://dead-by-api.herokuapp.com/api/perks/killer/random",
    "https://dead-by-api.herokuapp.com/api/perks/killer/random",
  ];

  let requests = urls.map((url) => axios.get(url));

  let killerPerks = [];

  await Promise.all(requests).then((responses) =>
    responses.forEach((response) => killerPerks.push(response.data.data))
  );

  const killer = await killerPerksResponse.data.data;

  return { props: { killerPerks, killer } };
}

export default killer;
