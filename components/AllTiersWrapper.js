import TierWrapperHoc from "../components/TierWrapperHoc";

import KillerBrownRankImg from "../img/killer-yellow-rank.webp";
import KillerYellowRankImg from "../img/killer-yellow-rank.webp";
import KillerPurpleRankImg from "../img/killer-purple-rank.webp";
import KillerRedRankImg from "../img/IconRank_killer_1.webp";
import PurpleCharImg from "../img/TierCharBackground/purple-background.webp"
import PurpleFioletCharImg from "../img/TierCharBackground/PurpleFioletTierChar.webp"
import YellowTierCharImg from "../img/TierCharBackground/yellowTierBackground.webp"
import BrownTierCharImg from "../img/TierCharBackground/yellowTierBackgroundChar.webp"
import React from "react";

const AllTiersWrapper = ({Perks}) => {
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  let slicedPerks = sliceIntoChunks(Perks, 20)

  let sliceFromOne = slicedPerks[0].splice(5, 20)
  let sliceFromTwo = slicedPerks[1].splice(2, 20)
  let sliceFromThree = slicedPerks[2].splice(5, 20)




  const AllTiers = [
    {
      TierChar: "S",
      TierMainColor: "red-700",
      TierSecondaryColor: "red-400",
      TierSkullImg: KillerRedRankImg,
      TierCharBackground: PurpleFioletCharImg,
      PerksInTier: slicedPerks[0],
    },
    {
      TierChar: "A",
      TierMainColor: "purple-700",
      TierSecondaryColor: "purple-400",
      TierSkullImg: KillerPurpleRankImg,
      TierCharBackground: PurpleCharImg,
      PerksInTier: slicedPerks[1].concat(sliceFromOne)
    },
    {
      TierChar: "B",
      TierMainColor: "green-700",
      TierSecondaryColor: "green-400",
      TierSkullImg: KillerYellowRankImg,
      TierCharBackground: YellowTierCharImg,
      PerksInTier: slicedPerks[2].concat(sliceFromTwo)
    },
    {
      TierChar: "C",
      TierMainColor: "zinc-700",
      TierSecondaryColor: "zinc-400",
      TierSkullImg: KillerBrownRankImg,
      TierCharBackground: BrownTierCharImg,
      PerksInTier: slicedPerks[3].concat(sliceFromThree)
    },
  ];

  return (
    AllTiers.map(
      (
        {TierChar, TierMainColor, TierSecondaryColor, TierSkullImg, TierCharBackground, PerksInTier},
        index
      ) => {

        return (
          <TierWrapperHoc
            key={index}
            TierChar={TierChar}
            TierMainColor={TierMainColor}
            TierSecondaryColor={TierSecondaryColor}
            TierCharBackground={TierCharBackground}
            PerksInTier={PerksInTier}
          >

          </TierWrapperHoc>
        )
      }
    )
  );
};


export default AllTiersWrapper;
