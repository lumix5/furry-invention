import {motion} from "framer-motion";
import {useEffect, useState} from "react";

function CardRating({allRatings, rating}) {
  const [numberOfRatings, setNumberOfRatings] = useState();
  const [ratingArray, setRatingArray] = useState([0, 0, 0, 0, 0]);

  function initRating() {
    let ratingArray = [];

    if (rating === null) {
      rating = 0;
    }

    for (let i = 0; i < 5; i++) {
      if (Number(rating).toFixed(0) > i) {
        ratingArray.push(1);
      } else {
        ratingArray.push(0);
      }
    }
    setRatingArray(ratingArray);
  }

  useEffect(() => {
    setNumberOfRatings(allRatings)
    initRating()
  }, []);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.2,
      }}
      className="flex flex-col justify-between leading-normal h-auto"
    >
      <div className="flex items-center mb-1">
        {ratingArray.map((rating, index) => {
          return (
            <>
              {rating === 1 ? <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg> : <svg
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>}
            </>
          );
        })}


        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white text-center">
          {Number(rating).toFixed(2)} out of 5
        </p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
        {allRatings} global ratings
      </p>
    </motion.div>
  );
}

export default CardRating
