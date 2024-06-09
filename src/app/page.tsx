import Image from "next/image";
import Button from "@mui/material/Button";
import { primary, secondary } from "@/themes/customs/palette";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center w-full mt-[60px]">
      <div className="flex h-[calc(100vh-60px)] items-center justify-start container ">
        <div className="flex flex-col items-start justify-center gap-y-2 px-32 -mt-5">
          <div className="uppercase text-md text-[var(--darkBrown)] opacity-50">
            Digital subscription & loyalty
          </div>
          <div className="text-4xl font-semibold text-[var(--darkBrown)] w-80">
            Supporting your <span className="italic font-medium">local</span>{" "}
            coffee shop
          </div>
          <div className="text-base font-light">
            Our mission is to help coffee shop owners bring in loyal customers{" "}
            <br />
            and guarantee revenue.
          </div>
          <div className="text-base font-light">
            Find a cup of coffee with a story and a saving with our <br />
            subscription and stamp schemes.
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
          className="absolute h-screen w-auto right-0 -z-10 pr-20"
        />
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
