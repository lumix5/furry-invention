import {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import SmallRating from "./SmallRating";
import {Tooltip, Center, Text} from "@mantine/core";
import CardRating from "./CardRating";


function PerkCard({withRating, perkImage, perkName, belongsToName, perkDescription, isAllFlagPerksFlag}) {
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsShownHoverContent(true)}
      onMouseLeave={() => setIsShownHoverContent(false)}
      className="max-w-[150px] flex flex-col p-4 items-center justify-center bg-primary p-1 m-1 h-26  bg-center bg-cover bg-no-repeat bg-primary bg-black drop-shadow-xl from-gray-900 items-center bg-white rounded-lg border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/*<Tooltip label={<CardRating />} withArrow>*/}
      <Tooltip label={<Text
        className="bg-neutral-900 break-normal whitespace-normal max-w-lg p-3 justify-center items-center text-center">{perkDescription}</Text>}
               withArrow>
        <Center>
          {perkImage ? <Image
            src={perkImage}
            height={isAllFlagPerksFlag ? 70 : 100}
            width={isAllFlagPerksFlag ? 70 : 100}
            className=""
          /> : ''}</Center>
        {isAllFlagPerksFlag ? '' :
          <div className="m-3">
            <div className="text-white text-center text-lg">{perkName}</div>
            {/*<SmallRating/>*/}
            <div className="text-white text-center text-sm">{belongsToName}</div>
          </div>
        }

      </Tooltip>
      {withRating ? SmallRating : ""}
    </motion.div>
  );
}

export default PerkCard;
