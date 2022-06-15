import { React, useEffect, } from "react";
import { Rating } from "@mui/material";
import axios from "axios";
import { useLocalStorage, } from "@mantine/hooks";
import { useRouter } from "next/router";
import { AiTwotoneStar } from 'react-icons/ai';
import { useCallback } from 'react'

export function useRouterRefresh() {
  const router = useRouter();
  const { asPath, replace } = router

  return useCallback(() => replace(asPath, undefined, { scroll: false }), [asPath])
}

function SmallRating({ character, perkId, ultraSmallRatingFlag, setState, state }) {

  const [value, setRating] = useLocalStorage({
    key: character._id,
    defaultValue: 0,
  });


  let refresh = useRouterRefresh()
  let router = useRouter()

async function sendRating(rating) {
    let userid = localStorage.getItem("clientId");
    let characterid = character._id;

    if (router.pathname === "/killers" || router.pathname === "/survivors") {
      await axios.post(
        `https://${process.env.BACKEND_URL}/api/${
          router.pathname === "/killers" ? "killers" : "survivors"
        }/vote?${router.pathname === "/killers" ? "killerId" : "survivorId"}=${
          character._id
        }&rating=${rating}&userId=${userid}`
      );
    } else {
      await axios.post(
        `https://${process.env.BACKEND_URL}/api/${
          router.pathname === "/perks/killers"
            ? "perks/killers"
            : "perks/survivors"
        }/vote?perkId=${character._id}&rating=${rating}&userId=${userid}`
      );
    }
  }

  return (
    <div className="flex items-center self-center mt-2">
      <Rating
        size={ultraSmallRatingFlag ? "small" : ""}
        name="simple-controlled"
        emptyIcon={<AiTwotoneStar style={{ color: "black", }} fontSize="inherit" />}
        value={value}
        precision={0.5}
        onChange={async (e, newValue) => {
          setRating(newValue === null ? value : newValue);
          await sendRating(newValue === null ? value : newValue);
          refresh()
        }}
      />
    </div>
  );
}

export default SmallRating;
