"use client";
import { useNavContext } from "@/contexts/nav";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import RegisterNav from "../nav/nav";
import { divide } from "lodash";
import { Button } from "@mui/material";
import { secondary } from "@/themes/customs/palette";

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
      <div className="w-1/2 flex flex-col items-center p-10 min-w-[500px]">
        <RegisterNav step={step} />
        <div className="text-3xl font-medium pt-8 pb-7">Choose your plan</div>
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
        <div className="pt-8 flex items-start justify-center gap-x-7 ">
          {Object.entries(packageDetails).map(([key, packageDetail]) => {
            return (
              <div
                key={packageDetail.packageId}
                className={`p-4 pt-6 border-2 border-solid rounded-lg flex flex-col gap-y-4 min-w-44 max-w-52 duration-300 h-full ${
                  packageDetail.subscription == true &&
                  packageDetail.stampCard == true
                    ? "border-[var(--green)] bg-[var(--green20)]"
                    : "border-[var(--darkBrown30)]"
                }`}
              >
                <div className="flex flex-col items-start justify-start duration-300">
                  <div>
                    {billingFreq == "monthly" && (
                      <>
                        <span className="text-base opacity-50 line-through font-medium">
                          {"£" + packageDetail.monthly.price + " "}
                        </span>
                        <br />
                        <span className="text-3xl font-medium">
                          {"£" + packageDetail.monthly.discountPrice}
                        </span>
                        <span className="text-xs">
                          {" "}
                          /
                          {packageDetail.monthly.discountTime == 1
                            ? `first ${packageDetail.monthly.discountTimeUnit}`
                            : `first ${
                                packageDetail.monthly.discountTime +
                                " " +
                                packageDetail.monthly.discountTimeUnit +
                                "s"
                              }`}
                        </span>
                      </>
                    )}
                    {billingFreq == "annually" && (
                      <>
                        <span className="text-base opacity-50 line-through font-medium">
                          {"£" + packageDetail.annually.price + " "}
                        </span>
                        <br />
                        <span className="text-2xl font-medium">
                          {"£" + packageDetail.annually.discountPrice}
                        </span>
                        <span className="text-xs"> /year</span>
                      </>
                    )}
                  </div>
                  <div className="text-[10.5px]">
                    <span>
                      {billingFreq == "monthly" &&
                        `then £${packageDetail.monthly.price} /month`}
                    </span>
                    {/* {packageDetail.subscription == true &&
                      billingFreq == "monthly" &&
                      ` +${packageDetail.monthly.transactionFee}% transaction fee per customer`}
                    {packageDetail.subscription == true &&
                      billingFreq == "annually" &&
                      ` +${packageDetail.annually.transactionFee}% transaction fee per customer`} */}
                  </div>
                </div>
                <div
                  className={`text-base font-semibold text-[var(--darkBrown)] leading-5`}
                >
                  {packageDetail.packageName}
                </div>
                <ul className="text-xs mb-2">
                  {packageDetail.about.map((point) => {
                    return <li key={point}>{point}</li>;
                  })}
                </ul>

                <Button
                  className="mt-auto"
                  variant={`${
                    packageDetail.stampCard == true &&
                    packageDetail.subscription == true
                      ? "contained"
                      : "outlined"
                  }`}
                  color="secondary"
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    paddingX: "24px",
                    color: secondary.contrastText,
                    ...(!(
                      packageDetail.stampCard == true &&
                      packageDetail.subscription == true
                    ) && { border: "solid 2px secondary.main" }),
                    ...(!(
                      packageDetail.stampCard == true &&
                      packageDetail.subscription == true
                    ) && { borderColor: secondary.main }),

                    "&:hover": {
                      ...(packageDetail.stampCard == true &&
                        packageDetail.subscription == true && {
                          backgroundColor: "#AFAF81",
                        }),
                    },
                  }}
                  disableElevation
                >
                  Select Plan
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

const packageDetails = {
  STAMP_CARD_PACKAGE: {
    packageId: "1",
    packageName: "Stamp Card Package",
    stampCard: true,
    subscription: false,
    monthly: {
      price: 19,
      discountPrice: 0,
      discountTime: 1,
      discountTimeUnit: "month",
      transactionFee: null,
    },
    annually: {
      price: 228,
      discountPrice: 205,
      discountTime: "forever",
      transactionFee: 3,
    },
    about: [
      "Provide and customise your digital loyalty card",
      "Analytics dashboard",
    ],
  },
  STAMP_CARD_AND_SUBSCRIPTION: {
    packageId: "2",
    packageName: "Stamp Card + Subscription",
    stampCard: true,
    subscription: true,
    monthly: {
      price: 80,
      discountPrice: 0,
      discountTime: 2,
      discountTimeUnit: "month",
      transactionFee: 3,
    },
    annually: {
      price: 960,
      discountPrice: 864,
      discountTime: "forever",
      transactionFee: 3,
    },
    about: [
      "Provide and customise your digital loyalty card ",
      "Provide paid subscriptions for customers guaranteeing revenue",
      "Analytics dashboard",
    ],
  },
  SUBSCRIPTION_PACKAGE: {
    packageId: "3",
    packageName: "Subscription Package",
    stampCard: false,
    subscription: true,
    monthly: {
      price: 69,
      discountPrice: 0,
      discountTime: 1,
      discountTimeUnit: "month",
      transactionFee: 3,
    },
    annually: {
      price: 828,
      discountPrice: 745,
      discountTime: "forever",
      transactionFee: 3,
    },
    about: [
      "Provide paid subscriptions for customers guaranteeing revenue",
      "Analytics dashboard",
    ],
  },
};
