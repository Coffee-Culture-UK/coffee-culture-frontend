"use client";

import axios from "axios";
import toast from "react-hot-toast";
import React, { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { Box, Button, TextField } from "@mui/material";

enum UserType {
    SHOP = 'shop',
    CUSTOMER = 'customer'
}

export default function Register() {
    const [user, setUser]= useState({
        userType: UserType.SHOP,
        email: '',
        firstName: '',
        password: ''
    })
    

    return(
        <>
            
        
        </>
    )
}