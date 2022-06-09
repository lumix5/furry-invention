import TierWrapperHoc from "../components/TierWrapperHoc";

import KillerBrownRankImg from "../img/killer-yellow-rank.webp";
import KillerYellowRankImg from "../img/killer-yellow-rank.webp";
import KillerPurpleRankImg from "../img/killer-purple-rank.webp";
import KillerRedRankImg from "../img/IconRank_killer_1.webp";
import PurpleCharImg from "../img/TierCharBackground/purple-background.webp";
import PurpleFioletCharImg from "../img/TierCharBackground/PurpleFioletTierChar.webp";
import YellowTierCharImg from "../img/TierCharBackground/yellowTierBackground.webp";
import BrownTierCharImg from "../img/TierCharBackground/yellowTierBackgroundChar.webp";
import React from "react";
import {Skeleton} from '@mantine/core';
import {Decimal} from 'decimal.js';
import {v4 as uuidv4} from 'uuid';

const AllTiersWrapper = ({Iterate}) => {

  function groupByPercentage(users, percentages) {
    // Get percentage for 1 user:
    let unit = 100 / users.length;
    // Sort percentages by decreasing remainder (modulo unit)
    //   and get number of units covered by each percentage
    let sorted = percentages.map((p, i) => [i, Math.floor(p / unit), p % unit])
      .sort((a, b) => b[2] - a[2]);
    // Get how many units are not yet distributed:
    let remain = users.length - sorted.reduce((sum, a) => sum += a[1], 0);
    // Distribute those, giving priority to groups where the remainders are greatest
    for (let i = 0; i < remain; i++) sorted[i][1]++;
    // Build and return the chunks by filling the groups in their
    //    original order
    let i = 0;
    return sorted.sort((a, b) => new Decimal(a[0]) - new Decimal(b[0])).map(a => users.slice(i, i+=a[1]));
  }


  let percentages = [15, 25, 30, 50 , 50];
  let splittedArray = groupByPercentage(Iterate, percentages)

  const AllTiers = [
    {
      TierChar: "S",
      TierMainColor: "red-700",
      TierSecondaryColor: "red-400",
      TierSkullImg: KillerRedRankImg,
      TierCharBackground: PurpleFioletCharImg,
      IterateInTier: splittedArray[0],
    },
    {
      TierChar: "A",
      TierMainColor: "purple-700",
      TierSecondaryColor: "purple-400",
      TierSkullImg: KillerPurpleRankImg,
      TierCharBackground: PurpleCharImg,
      IterateInTier: splittedArray[1],
    },
    {
      TierChar: "B",
      TierMainColor: "green-700",
      TierSecondaryColor: "green-400",
      TierSkullImg: KillerYellowRankImg,
      TierCharBackground: YellowTierCharImg,
      IterateInTier: splittedArray[2],
    },
    {
      TierChar: "C",
      TierMainColor: "zinc-700",
      TierSecondaryColor: "zinc-400",
      TierSkullImg: KillerBrownRankImg,
      TierCharBackground: BrownTierCharImg,
      IterateInTier: splittedArray[3],
    },
  ];

  return AllTiers.map(
    (
      {
        TierChar,
        TierMainColor,
        TierSecondaryColor,
        TierSkullImg,
        TierCharBackground,
        IterateInTier,
      },
      index
    ) => {
      return (
        <TierWrapperHoc
          key={uuidv4()}
          TierChar={TierChar}
          TierMainColor={TierMainColor}
          TierSecondaryColor={TierSecondaryColor}
          TierCharBackground={TierCharBackground}
          IterateOnTier={IterateInTier}
        ></TierWrapperHoc>
      );
    }
  );
};

export default AllTiersWrapper;
