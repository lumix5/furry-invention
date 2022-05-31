import TierWrapperHoc from "../components/TierWrapperHoc";
import Card from "../components/Card";

import {AnimatePresence} from "framer-motion";
import KillerBrownRankImg from "../img/killer-yellow-rank.webp";
import KillerYellowRankImg from "../img/killer-yellow-rank.webp";
import KillerPurpleRankImg from "../img/killer-purple-rank.webp";
import KillerRedRankImg from "../img/IconRank_killer_1.webp";
import PurpleCharImg from "../img/TierCharBackground/purple-background.webp"
import PurpleFioletCharImg from "../img/TierCharBackground/PurpleFioletTierChar.webp"
import YellowTierCharImg from "../img/TierCharBackground/yellowTierBackground.webp"
import BrownTierCharImg from "../img/TierCharBackground/yellowTierBackgroundChar.webp"
import React from "react";

const Killers = ({killer}) => {
  let killerIcon = JSON.parse(killer[0].icon)

    const mockarray = [
        {
            TierChar: "S",
            TierMainColor: "red-700",
            TierSecondaryColor: "red-400",
            TierSkullImg: KillerRedRankImg,
            TierCharBackground: PurpleFioletCharImg
        },
        {
            TierChar: "A",
            TierMainColor: "purple-700",
            TierSecondaryColor: "purple-400",
            TierSkullImg: KillerPurpleRankImg,
            TierCharBackground: PurpleCharImg
        },
        {
            TierChar: "B",
            TierMainColor: "green-700",
            TierSecondaryColor: "green-400",
            TierSkullImg: KillerYellowRankImg,
            TierCharBackground: YellowTierCharImg
        },
        {
            TierChar: "C",
            TierMainColor: "zinc-700",
            TierSecondaryColor: "zinc-400",
            TierSkullImg: KillerBrownRankImg,
            TierCharBackground: BrownTierCharImg
        },
    ];


    return (
        mockarray.map(
            (
                {TierChar, TierMainColor, TierSecondaryColor, TierSkullImg, TierCharBackground},
                index
            ) => {
                return (
                    <TierWrapperHoc
                        key={index}
                        TierChar={TierChar}
                        TierMainColor={TierMainColor}
                        TierSecondaryColor={TierSecondaryColor}
                        TierCharBackground={TierCharBackground}
                    >
                        <AnimatePresence>
                            <div className="flex">
                                <Card
                                    TierMainColor={TierMainColor}
                                    TierSkullImg={TierSkullImg}
                                    KillerImage={killerIcon}
                                />
                                <Card
                                    TierMainColor={TierMainColor}
                                    TierSkullImg={TierSkullImg}
                                    KillerImage={killerIcon}
                                />
                            </div>
                        </AnimatePresence>
                    </TierWrapperHoc>
                )
            }
        )
    );
};

export async function getServerSideProps() {


  const killerResponse = await fetch(`http:localhost/random/killer`);
  const killer = await killerResponse.json();


  return {props: { killer}};
}


export default Killers;
