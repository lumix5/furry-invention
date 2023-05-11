import KillerYellowRankImg from "../img/killer-yellow-rank.webp";
import KillerPurpleRankImg from "../img/killer-purple-rank.webp";
import KillerRedRankImg from "../img/IconRank_killer_1.webp";
import PurpleCharImg from "../img/TierCharBackground/purple-background.webp";
import PurpleFioletCharImg from "../img/TierCharBackground/PurpleFioletTierChar.webp";
import YellowTierCharImg from "../img/TierCharBackground/yellowTierBackground.webp";
import BrownTierCharImg from "../img/TierCharBackground/yellowTierBackgroundChar.webp";
import React from "react";

import AllTiersWrapper from "../components/AllTiersWrapper";


const survivors = ({survivors}) => {
  const mockarray = [
    {
      TierChar: "S",
      TierMainColor: "red-700",
      TierSecondaryColor: "red-400",
      TierSkullImg: KillerRedRankImg,
      TierCharBackground: PurpleFioletCharImg,
    },
    {
      TierChar: "A",
      TierMainColor: "purple-700",
      TierSecondaryColor: "purple-400",
      TierSkullImg: KillerPurpleRankImg,
      TierCharBackground: PurpleCharImg,
    },
    {
      TierChar: "B",
      TierMainColor: "green-700",
      TierSecondaryColor: "green-400",
      TierSkullImg: KillerYellowRankImg,
      TierCharBackground: YellowTierCharImg,
    },
  ];

  return (
    <AllTiersWrapper
      Iterate={survivors}
    >
    </AllTiersWrapper>
  );
};

export async function getServerSideProps() {
  const survivorsResponse = await fetch(`http://${process.env.BACKEND_URL}/api/survivors`);

  const survivors = await survivorsResponse.json();

  return {props: {survivors}};
}

export default survivors;
