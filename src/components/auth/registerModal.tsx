import { primary } from "@/themes/customs/palette";
import { Dialog } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

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
    <Dialog
      open={register}
      onClose={() => {
        router.push(pathname);
      }}
      PaperProps={{
        style:{
            backgroundColor: primary.background,
            color: primary.main,
        }
      }}
    >
        <div className="flex flex-col gap-5 p-10 bg-[var(--background)]">
            <div className="text-2xl font-medium ">
                Sign Up

            </div>

        </div>
        
    </Dialog>
  );
}
