import { primary } from "@/themes/customs/palette";
import { Dialog, TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Button from "@mui/material/Button";
import { Google } from "../navigation/icons";
import Link from "next/link";
import Endpoints from "@/api/endpoints";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import LoadingTopbar from "../progressBar/loadingTopBar";
import axios from "axios";
import DeleteQuery from "@/middleware/deleteQuery";

enum UserType {
  SHOP = "shop",
  CUSTOMER = "customer",
}

export default function Register({ register }: { register: boolean }) {
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname();
  const [user, setUser] = useState({
    userType: UserType.SHOP,
    email: "",
    firstName: "",
    password: "",
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const removeQueryParam = (key : string) => {
    
    params.delete(key);
    
    const newQueryString = params.toString();
    
    const newUrl = newQueryString ? `?${newQueryString}` : '';
    if (newUrl) {
      router.replace(newUrl);
    } else {
      router.push(pathname);
    }
    
  };

  const addQueryParam = (key: string, value: string)=>{
    params.append(key, value)
    const newQueryString = params.toString();
    router.replace(newQueryString);
  }

  const handleSubmit = async () => {
    // e.preventDefault();
    if (user.userType == UserType.SHOP) {
      registerShopMutation.mutate({email: user.email, password: user.password, firstName: user.firstName})
    }
  }

  const registerShopMutation = useMutation({
    mutationFn: async (values: {
        email: string;
        password: string;
        firstName: string;
    }) => {
        return Endpoints.registerShopUser(values);
        
    },
    onSuccess: () => {
        // // router.push( pathname + "?" + createQueryString("step", "2"))
        // addQueryParam('step', '2');
        // removeQueryParam('register');
        router.push('/register/step-2')
    },
    onError: (error: any) => {
        toast.error("Failed to register user");
        console.log("going");
        console.log(error);
    },
});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {registerShopMutation.isLoading && <LoadingTopbar />}
      <Dialog
        open={register}
        onClose={() => {
          removeQueryParam('register')
          // router.push(pathname);
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
          <div className="text-2xl font-medium">Sign Up</div>

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
            //     
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
            value={user.email}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) => {
              setUser({ ...user, email: e.target.value });
            }}
            
            sx={{
              fontSize: "12px",
              fontFamily: "Inter",
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
            value={user.firstName}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
          <TextField
            id="outlined-required"
            label="Password"
            variant="outlined"
            sx={{ fontSize: "12px", fontFamily: "Inter" }}
            fullWidth
            inputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            value={user.password}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <Button
          type="submit"
          onClick={handleSubmit}
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
            <Link
              href="/terms-of-service"
              className="underline text-[var(--darkBrown)] duration-300 hover:text-[var(--mainBrown)] cursor-pointer"
            >
              terms of service
            </Link>{" "}
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
