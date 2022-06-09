import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SmallRating from "./SmallRating";
import PlagueImg from "../img/K04_charSelect_portrait.webp";
import CardRating from "./CardRating";
import { useLocalStorage } from "@mantine/hooks";

export default function Card({
  characterIcon,
  character,
  isWithRating = true,
}) {
  console.log(characterIcon)
  return (
    <div
      href="#"
      className="w-[160px] m-3 p-3 bg-center bg-cover bg-no-repeat bg-primary bg-black drop-shadow-xl from-gray-900 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="relative flex flex-col">
        {isWithRating && (
          <CardRating
            allRatings={character.votes.length}
            rating={character.avgRating}
          />
        )}
        <div className="flex justify-center w-full h-48">
          {characterIcon && (
            <Image src={characterIcon} height={189} width={150} />
          )}
        </div>
        {isWithRating && <SmallRating character={character} />}
      </div>
    </div>
  );
}
