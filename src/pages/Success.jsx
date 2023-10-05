import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

export default function Success() {
  const [loading, setLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1">
      {loading ? (
        <PropagateLoader color="rgba(251,146,60,0.3)" />
      ) : (
        <>
          <h2 className="font-bold text-3xl text-black">
            Ordered Successfully!
          </h2>
          <p className="text-xl">
            You will receive within {formatTime(timeRemaining)}
          </p>
          <button
            className="flex items-center justify-between gap-1 text-xl mt-4 text-orange-400"
            onClick={() => navigation("/")}
          >
            <IoArrowBackCircle className="text-2xl"/>
            Return to home
          </button>
        </>
      )}
    </div>
  );
}
