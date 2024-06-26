"use client";
import { useNavContext } from "@/contexts/nav";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import RegisterNav from "../nav/nav";
import { divide } from "lodash";

export default function Step2() {
  const { setCanSee } = useNavContext();
  const path = usePathname();
  const step = path.charAt(path.length - 1);
  const [packageName, setPackageName] = useState("");
  const [billingFreq, setBillingFreq] = useState("monthly");

  useEffect(() => {
    setCanSee(false);
  }, []);

  return (
    <div className="w-screen h-screen flex text-[var(--darkBrown)]">
      <div className="w-1/2 flex flex-col items-center p-10">
        <RegisterNav step={step} />
        <div className="text-3xl font-medium pt-10 pb-8">Choose your plan</div>
        <div className="flex bg-[var(--darkBrown10)] rounded-full text-[var(--darkBrown)] text-xs relative">
          <div
            className={`absolute bg-[var(--mainBrown)] rounded-full px-3 py-1  text-[var(--mainBrown)] duration-300 z-0 ${
              billingFreq == "monthly"
                ? "transform translate-x-0"
                : "transform translate-x-[49.5%]"
            }`}
          >
            {billingFreq == "monthly" && billingFreq}
            {billingFreq == "annually" && (
              <div className="flex">
                <div className="">annually</div>
                <div className=" bg-[var(--mainBrown)] bg-opacity-45 text-[var(--mainBrown)] rounded-full text-center px-2 text-[8px]">
                  2 months free
                </div>
              </div>
            )}
          </div>
          <div
            className={`px-3 py-1 z-10 cursor-pointer duration-300 ${
              billingFreq == "monthly" ? "text-[var(--backgroundColour)]" : ""
            }`}
            onClick={() => {
              setBillingFreq("monthly");
            }}
          >
            monthly
          </div>
          <div
            className={`pl-3 pr-1 z-10 cursor-pointer duration-300 flex ${
              billingFreq == "annually" ? "text-[var(--backgroundColour)]" : ""
            }`}
            onClick={() => {
              setBillingFreq("annually");
            }}
          >
            <div className="mb-1 mt-1">annually</div>
            <div
              className={`ml-2 bg-[#E5E7C4]   rounded-full text-center px-2 text-[8px] mt-[4px] mb-[4px] ${
                billingFreq == "annually"
                  ? "bg-opacity-15 text-[var(--green)]"
                  : "bg-opacity-45 text-[#7D9F1E]"
              }`}
            >
              2 months free
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
