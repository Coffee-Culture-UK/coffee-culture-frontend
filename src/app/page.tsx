import Image from "next/image";
import Button from "@mui/material/Button";
import { primary, secondary } from "@/themes/customs/palette";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-col items-start md:justify-center justify-start w-full md:mt-[60px] -mt-[24px]">
      <div className="flex h-[calc(100vh-60px)] items-center justify-start container ">
        <div className="flex flex-col md:items-start justify-center md:gap-y-2 gap-y-3 md:px-32 px-5 -mt-5 items-center md:text-start text-center ">
          <div className="uppercase md:text-md text-sm text-[var(--darkBrown)] opacity-50">
            Digital subscription & loyalty
          </div>
          <div className="md:text-4xl text-3xl font-semibold text-[var(--darkBrown)] md:w-80 w-64 md:pb-0">
            Supporting your <span className="italic font-medium">local</span>{" "}
            coffee shop
          </div>
          <div className="md:text-base text-xs font-light md:w-[496px]">
            Our mission is to help coffee shop owners bring in loyal customers and guarantee revenue.
          </div>
          <div className="md:text-base text-xs font-light md:w-[496px]">
            Find a cup of coffee with a story and a saving with our subscription and stamp schemes.
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
                border: 'solid 2px secondary.main',
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
          className="md:absolute md:block hidden h-screen w-auto right-0 -z-10 pr-20"
        />
        <div className="md:hidden -bottom-20 w-screen">

        </div>
      </div>
      <div className="h-screen w-full">

      </div>

    </main>
  );
}
