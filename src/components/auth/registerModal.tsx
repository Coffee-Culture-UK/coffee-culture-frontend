import { primary } from "@/themes/customs/palette";
import { Dialog, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { Suspense, useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import { Google } from "../navigation/icons";

enum UserType {
  SHOP = "shop",
  CUSTOMER = "customer",
}

export default function Register({ register }: { register: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState({
    userType: UserType.SHOP,
    email: "",
    firstName: "",
    password: "",
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dialog
        open={register}
        onClose={() => {
          router.push(pathname);
        }}
        PaperProps={{
          style: {
            backgroundColor: primary.background,
            color: primary.main,
            width: "360px",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="flex flex-col gap-5 p-10 bg-[var(--background)] items-center">
          <div className="text-2xl font-medium">sign up</div>

          <div className="flex gap-x-2 items-center justify-center">
            <StorefrontIcon
              className={`h-5 w-5 duration-300 ${
                user.userType == UserType.SHOP
                  ? " text-[var(--darkBrown)]"
                  : "text-[var(--darkBrown20)]"
              }`}
            />
            <div className="flex bg-[var(--darkBrown10)] rounded-full text-[var(--darkBrown)] text-xs relative">
              <div
                className={`absolute bg-[var(--green)] rounded-full px-3 py-1  text-[var(--green)] duration-300 z-0 ${
                  user.userType == UserType.SHOP
                    ? "transform translate-x-0"
                    : "transform translate-x-[67%]"
                }`}
              >
                {user.userType}
              </div>
              <div
                className="px-3 py-1 z-10 cursor-pointer"
                onClick={() => {
                  setUser({ ...user, userType: UserType.SHOP });
                }}
              >
                shop
              </div>
              <div
                className="px-3 py-1 z-10 cursor-pointer"
                onClick={() => {
                  setUser({ ...user, userType: UserType.CUSTOMER });
                }}
              >
                customer
              </div>
            </div>
            <PersonOutlineIcon
              className={`h-5 w-5 duration-300 ${
                user.userType == UserType.SHOP
                  ? " text-[var(--darkBrown20)]"
                  : "text-[var(--darkBrown)] "
              }`}
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              paddingX: "24px",
              height: "44px",
              backgroundColor: "#2f211a33",

              "&:hover": {
                backgroundColor: "#2f211a4d",
              },
            }}
            disableElevation
            // onClick={() => {
            //   router.push(
            //     pathname + "?" + createQueryString("register", "true")
            //   );
            // }}
            fullWidth
          >
            <Google className="h-4 w-4" />
            <span className="ml-2">Continue with Google</span>
          </Button>
          <div className="text-xs relative w-full flex items-center justify-center">
            <div className="absolute w-full bg-[var(--darkBrown20)] h-[1px] rounded-full top-[calc(50%-0.5px)] bottom-[calc(50%-0.5px)] -z-0"></div>
            <div className="bg-[var(--backgroundColour)] px-2 z-10 text-[var(--darkBrown50)]">
              or continue with email
            </div>
          </div>
          <TextField
            id="outlined-required"
            label="Email"
            variant="outlined"
            sx={{
              fontSize: "12px",
              fontFamily: "Inter",
              // "& .MuiInputBase-root": {
              //   height: "40px",
              //   display: "flex",
              //   alignItems: "center",
              // },
              // "& .MuiOutlinedInput-root": {
              //   height: "40px",
              //   alignItems: "center",
              // }
            }}
            fullWidth
            inputProps={{
              style: { fontSize: 12 },
            }}
            InputLabelProps={{
              style: { fontSize: 12, display: "flex", alignItems: "center" },
            }}
            color="primary"
          />
          <TextField
            id="outlined-required"
            label="First Name"
            variant="outlined"
            sx={{ fontSize: "12px", fontFamily: "Inter" }}
            fullWidth
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
          <TextField
            id="outlined-required"
            label="Password"
            variant="outlined"
            sx={{ fontSize: "12px", fontFamily: "Inter" }}
            fullWidth
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              paddingX: "24px",
              height: "44px",

              "&:hover": {
                backgroundColor: "#AFAF81",
              },
            }}
            disableElevation
            // onClick={() => {
            //   router.push(
            //     pathname + "?" + createQueryString("register", "true")
            //   );
            // }}
            fullWidth
          >
            Continue
          </Button>
          <div className="text-xs text-center text-[var(--darkBrown50)]">
            Already have an account?{" "}
            <span className="underline text-[var(--darkBrown)] duration-300 hover:text-[var(--mainBrown)] cursor-pointer">
              Log in
            </span>
          </div>
          <div className="text-xs text-center text-[var(--darkBrown50)]">
            By signing up you agree to our{" "}
            <span className="underline text-[var(--darkBrown)] duration-300 hover:text-[var(--mainBrown)] cursor-pointer">
              terms of service
            </span>{" "}
            and{" "}
            <span className="underline text-[var(--darkBrown)] duration-300 hover:text-[var(--mainBrown)] cursor-pointer">
              privacy policy
            </span>
          </div>
        </div>
      </Dialog>
    </Suspense>
  );
}
