import KillerYellowRankImg from "../../img/killer-yellow-rank.webp";
import KillerPurpleRankImg from "../../img/killer-purple-rank.webp";
import KillerRedRankImg from "../../img/IconRank_killer_1.webp";
import PurpleCharImg from "../../img/TierCharBackground/purple-background.webp";
import PurpleFioletCharImg from "../../img/TierCharBackground/PurpleFioletTierChar.webp";
import YellowTierCharImg from "../../img/TierCharBackground/yellowTierBackground.webp";
import BrownTierCharImg from "../../img/TierCharBackground/yellowTierBackgroundChar.webp";
import React from "react";
import AllTiersWrapper from "../../components/AllTiersWrapper";

const Killers = ({ killers }) => {
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
    // {
    //   TierChar: "C",
    //   TierMainColor: "zinc-700",
    //   TierSecondaryColor: "zinc-400",
    //   TierSkullImg: KillerBrownRankImg,
    //   TierCharBackground: BrownTierCharImg,
    // },
  ];

  return <AllTiersWrapper Iterate={killers}></AllTiersWrapper>;
};

export async function getServerSideProps() {
  const killerResponse = await fetch(`http://${process.env.BACKEND_URL}/api/perks/killers`);

  const killers = await killerResponse.json();

  return { props: { killers } };
}

export default Killers;
