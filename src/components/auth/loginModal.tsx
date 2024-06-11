import { Dialog } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Login({login}:{login:boolean}) {
    const router = useRouter();
    const pathname = usePathname();
    
    return(
        <Dialog open={login} onClose={()=>{router.push(pathname)}}>

        </Dialog>
    )
}