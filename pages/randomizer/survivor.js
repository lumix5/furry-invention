import React from "react";
import RandomizerLayout from "../../components/RandomizerLayout";
import { BsArrowClockwise } from "react-icons/bs";
import PerkCard from "../../components/PerkCard";

import Card from "../../components/Card";
import axios from "axios";
import { useRouterRefresh } from "../../components/SmallRating";

function Survivor({ SurvivorPerks, Survivor }) {
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

            characterIcon={Survivor[0].imgs.portrait}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <PerkCard
            perkImage={SurvivorPerks[0][0].icon}
            perkName={SurvivorPerks[0][0].name}
            belongsToName={SurvivorPerks[0][0].SurvivorName}
            perkDescription={SurvivorPerks[0][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={SurvivorPerks[1][0].icon}
            perkName={SurvivorPerks[1][0].name}
            belongsToName={SurvivorPerks[1][0].SurvivorName}
            perkDescription={SurvivorPerks[1][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={SurvivorPerks[2][0].icon}
            perkName={SurvivorPerks[2][0].name}
            belongsToName={SurvivorPerks[2][0].SurvivorName}
            perkDescription={SurvivorPerks[2][0].description}
            withRating={false}
            withAnimation={false}
            withoutFullHeight={false}
          />
          <PerkCard
            perkImage={SurvivorPerks[3][0].icon}
            perkName={SurvivorPerks[3][0].name}
            belongsToName={SurvivorPerks[3][0].SurvivorName}
            perkDescription={SurvivorPerks[3][0].description}
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
  const SurvivorPerksResponse = await axios.get(
    `https://dead-by-api.herokuapp.com/api/survs/random`
  );

  let urls = [
    "https://dead-by-api.herokuapp.com/api/perks/surv/random",
    "https://dead-by-api.herokuapp.com/api/perks/surv/random",
    "https://dead-by-api.herokuapp.com/api/perks/surv/random",
    "https://dead-by-api.herokuapp.com/api/perks/surv/random",
  ];

  let requests = urls.map((url) => axios.get(url));

  let SurvivorPerks = [];

  await Promise.all(requests).then((responses) =>
    responses.forEach((response) => SurvivorPerks.push(response.data.data))
  );

  const Survivor = await SurvivorPerksResponse.data.data;

  return { props: { SurvivorPerks, Survivor } };
}

export default Survivor;
