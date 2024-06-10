import Image from "next/image";
import Button from "@mui/material/Button";
import { primary, secondary } from "@/themes/customs/palette";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-col md:items-start md:justify-center items-center justify-start w-full md:mt-[60px] -mt-[24px]">
      <div className="flex h-[calc(100vh-60px)] items-center md:justify-start justify-center container ">
        <div className="flex flex-col md:items-start justify-center md:gap-y-2 gap-y-3 lg:px-32 md:px-20 px-5 -mt-5 items-center md:text-start text-center ">
          <div className="uppercase md:text-md text-sm text-[var(--darkBrown)] opacity-50">
            Digital subscription & loyalty
          </div>
          <div className="md:text-4xl text-3xl font-semibold text-[var(--darkBrown)] md:w-80 w-64 md:pb-0">
            Supporting your <span className="italic font-medium">local</span>{" "}
            coffee shop
          </div>
          <div className="md:text-base text-xs font-light xl:w-[496px] lg:w-96 md:w-80 w-72">
            Our mission is to help coffee shop owners bring in loyal customers
            and guarantee revenue.
          </div>
          <div className="md:text-base text-xs font-light xl:w-[496px] lg:w-96 md:w-80 w-72">
            Find a cup of coffee with a story and a saving with our subscription
            and stamp schemes.
          </div>
          <div className="flex gap-x-2 pt-2">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: "300",
                fontSize: "12px",
                paddingX: "24px",

                "&:hover": {
                  backgroundColor: "#AFAF81",
                },
              }}
              disableElevation
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                fontWeight: "300",
                fontSize: "12px",
                paddingX: "24px",
                color: secondary.contrastText,
                border: "solid 2px secondary.main",
                borderColor: secondary.main,
              }}
              disableElevation
            >
              Check out our guide!
            </Button>
          </div>
        </div>
        <img
          src="hero.png"
          alt=""
          className="md:absolute md:block hidden xl:h-screen lg:h-[80vh] h-[70vh] w-auto right-0 -z-10 lg:pr-20 pr-8"
        />
        <div className="md:hidden absolute -bottom-96 w-screen h-[90vh] -z-10 bg-top bg-no-repeat bg-contain bg-[url('https://raw.githubusercontent.com/Coffee-Culture-UK/coffee-culture-frontend/main/public/small-hero.png')]"></div>
      </div>
      <div className="h-screen w-full"></div>
    </main>
  );
}
