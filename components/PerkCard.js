import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SmallRating from "./SmallRating";
import { Tooltip, Center, Text } from "@mantine/core";
import CardRating from "./CardRating";

function PerkCard({
  withRating = true,
  withAnimation = true,
  perkImage,
  perkName,
  belongsToName,
  perkDescription,
  isAllFlagPerksFlag,
  perkRating,
  perk,
  withoutFullHeight = true,
}) {
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  return (
    <motion.div
      initial={false}
      whileHover={{
        transition: { duration: 1 },
      }}
      onHoverStart={(e) => {
        if (withAnimation) {
          setIsShownHoverContent(true);
        }
      }}
      onHoverEnd={(e) => {
        if (withAnimation) {
          setIsShownHoverContent(false);
        }
      }}
      className={`relative max-w-[150px] flex flex-col p-4 items-center justify-center bg-primary p-1 m-1 h-26  bg-center bg-cover bg-no-repeat bg-primary bg-black drop-shadow-xl from-gray-900 items-center bg-white rounded-lg border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${withoutFullHeight ? '' : 'h-full'}`}
    >
      <div className="flex">
        <Tooltip
          label={
            <Text className="items-center justify-center max-w-lg p-3 text-center break-normal whitespace-normal bg-neutral-900">
              {perkDescription}
            </Text>
          }
          withArrow
        >
          <Image
            src={perkImage}
            height={isAllFlagPerksFlag ? 70 : 100}
            width={isAllFlagPerksFlag ? 70 : 100}
            onClick={() => {
              setIsShownHoverContent(!isShownHoverContent);
            }}
            className=""
          />
        </Tooltip>
        <AnimatePresence>
          {isShownHoverContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-center text-gray-900 dark:text-white">
                <span className="text-yellow-300">
                  {withRating && Number(perk.avgRating).toFixed(2)}
                </span>
                <span> out of 5</span>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
                  {withRating && perk.votes.length + " ratings"}
                </p>
                {withRating && (
                  <SmallRating ultraSmallRatingFlag={true} character={perk} />
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isAllFlagPerksFlag ? (
        ""
      ) : (
        <div className="m-3">
          <div className="text-lg text-center text-white">{perkName}</div>
          <div className="text-sm text-center text-white opacity-60">{belongsToName}</div>
        </div>
      )}

      {withRating ? SmallRating : ""}
    </motion.div>
  );
}

export default PerkCard;
