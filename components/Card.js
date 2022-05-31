import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from 'next/image'
import SmallRating from "./SmallRating";
import PlagueImg from "../img/K04_charSelect_portrait.webp";
import CardRating from "./CardRating";

export default function Card({TierMainColor, TierSkullImg, WithRating, KillerImage}) {
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  console.log(KillerImage.portrait)
  return (
    <motion.div

      onMouseEnter={() => setIsShownHoverContent(true)}
      onMouseLeave={() => setIsShownHoverContent(false)}
      href="#"
      className={`-5 m-3 p-3 bg-center bg-cover bg-no-repeat bg-primary max-w-xs bg-black drop-shadow-xl from-gray-900  to-${TierMainColor} flex flex-col items-center bg-white rounded-lg border md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          `}
    >
      <div className="flex flex-col relative">
        <CardRating/>
        {/*<motion.div*/}
        {/*  animate={{scale: [1, 1.3, 1.5, 1.3, 1]}}*/}
        {/*  transition={{repeat: Infinity, duration: 5}}*/}
        {/*  className={`absolute top-0 z-0 self-center h-12 w-12 bg-${TierMainColor} bg-rounded rounded-full blur `}*/}
        {/*>*/}
        {/*</motion.div>*/}
        {/*<div className="self-center absolute z-40 mb-12 justify-center flex w-full">*/}
        {/*  <Image src={TierSkullImg} height={68} width={57}/>*/}
        {/*</div>*/}
        <div className="h-48 w-full flex justify-center">
          <Image src={KillerImage.portrait} height={189} width={150}/>
        </div>
        <SmallRating/>
      </div>

    </motion.div>
  );
}
