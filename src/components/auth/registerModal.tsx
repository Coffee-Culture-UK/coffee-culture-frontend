import { Dialog } from "@mui/material";
import React from "react";

export default function Register({register}:{register:boolean}) {
    return(
        <Dialog open={register}>
        </Dialog>
    )
}