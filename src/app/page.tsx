"use client";
import Image from "next/image";
import up from "./up.png";
import down from "./down.png";
import play from "./play.png";
import stop from "./stop.png";
import restart from "./restart.png";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [cShow, setShow] = useState(false);

  //BREAK LENGTH
  const [bLength, setBL] = useState(5);
  function iBreak() {
    !cShow ? setBL(bLength + 1) : "";
  }
  function rBreak() {
    !cShow ? setBL(bLength - 1) : "";
  }
  //SESSION LENGTH
  const [sLength, setSL] = useState(25);
  function iSession() {
    !cShow ? setSL(sLength + 1) : "";

    // setMin(cMin + 1);
  }
  function rSession() {
    !cShow ? setSL(sLength - 1) : "";

    // setMin(cMin - 1);
  }
  //SESSION
  const [cSec, setSc] = useState(60);
  function settime() {
    setShow(true);
  }
  const [cMin, setMin] = useState(sLength);

  setTimeout(() => {
    cShow && cSec > 0 ? setSc(cSec - 1) : setSc(60);
  }, 1000);
  setTimeout(() => {
    cShow && cSec > 0 ? setMin(cMin - 1) : setMin(sLength);
  }, 60000);
  function stoptime() {
    setShow(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#457b9d] font-serif">
      <div className="  flex flex-wrap w-[35vw] h-fit">
        <h1 className="  text-white font-bold text-[4vw] w-[100%] text-center">
          25 + 5 Clock
        </h1>
        <div className=" w-[50%]">
          <p className="  text-white font-bold text-[2vw] w-[100%] text-center">
            Break Length
          </p>
          <div className=" w-[100%] justify-center flex">
            <Image
              src={up}
              alt="up arrow"
              className=" w-[2vw] h-[2vw]"
              onClick={iBreak}
            ></Image>
            <p className="  text-white font-bold text-[2vw] pl-[1vw] pr-[1vw] text-center">
              {bLength}
            </p>
            <Image
              src={down}
              alt=" down arrow"
              className=" w-[2.5vw] h-[2.5vw]"
              onClick={rBreak}
            ></Image>
          </div>
        </div>
        <div className=" w-[50%]">
          <p className="  text-white font-bold text-[2vw] w-[100%] text-center">
            Session Length
          </p>
          <div className=" w-[100%] justify-center flex">
            <Image
              src={up}
              alt="up arrow"
              className=" w-[2vw] h-[2vw]"
              onClick={iSession}
            ></Image>
            <p className="  text-white font-bold text-[2vw] pl-[1vw] pr-[1vw] text-center">
              {sLength}
            </p>
            <Image
              src={down}
              alt=" down arrow"
              className=" w-[2.5vw] h-[2.5vw]"
              onClick={rSession}
            ></Image>
          </div>
        </div>
        <div className=" rounded-[4vw] border-[0.5vw] border-gray-700 h-[13vw] w-[50%] m-auto mt-[2vw] p-[1vw]">
          <p className="  text-white font-bold text-[2vw] w-[100%] text-center">
            Session
          </p>
          <p className="  text-white font-bold text-[3vw] pl-[1vw] pr-[1vw] text-center">
            {cShow && (
              <>
                {cMin}:{cSec}
              </>
            )}
            {!cShow && <>{sLength}:00</>}
          </p>
        </div>
        <div className=" w-[100%] flex justify-center p-[1vw]">
          <Image
            className=" h-[2vw] w-[2vw]"
            alt="icon"
            src={play}
            onClick={settime}
          ></Image>
          <Image
            className=" h-[2vw] w-[2vw]"
            alt="icon"
            src={stop}
            onClick={stoptime}
          ></Image>
          <Image className=" h-[2vw] w-[2vw]" alt="icon" src={restart}></Image>
        </div>
      </div>
    </main>
  );
}
