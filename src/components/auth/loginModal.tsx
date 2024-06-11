import { Dialog } from "@mui/material";
import React from "react";

export default function Login({login}:{login:boolean}) {
    return(
        <Dialog open={login}>

        </Dialog>
    )
}