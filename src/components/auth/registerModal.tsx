import { Dialog } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Register({register}:{register:boolean}) {
    const router = useRouter();
    const pathname = usePathname();
    return(
        <Dialog open={register} onClose={()=>{router.push(pathname)}}>
        </Dialog>
    )
}