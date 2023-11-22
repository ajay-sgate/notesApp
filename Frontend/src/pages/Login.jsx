import React, { useState } from "react";
import { Box, Button, Center, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SigninFail, SigninFun, SigninSuc } from "../redux/authReducer/action";

const MotionBox = motion(Box);

const Login = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        "email": "",
        "password": ""
    })

    const handleChange = (e) => {

        setFormData(() => {
            return { ...formData, [e.target.name]: e.target.value }
        })


    }

    const handleSubmit = () => {

        // console.log(formData)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.email && emailRegex.test(formData.email)) {
            dispatch(SigninFun(formData)).then((res) => {
                if (res.data.token) {
                    dispatch(SigninSuc)
                    toast({
                        title: res.data.msg,
                        status: "success",
                        position: "top-center",
                        isClosable: true,
                    })

                    navigate("/dash")
                    localStorage.setItem("token", res.data.token)
                }
            }).catch((err) => {
                dispatch(SigninFail)
                toast({
                    title: err.response.data.msg,
                    status: "error",
                    position: "top-center",
                    isClosable: true,
                })
            })
        } else {
            toast({
                title: "Please Enter Correct Email Address",
                status: "warning",
                position: "top-center",
                isClosable: true,
            })

        }



    }
    return (
        <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            maxW="400px"
            w="100%"
            mx="auto"
            pt="150px"
            h="90vh"
        >
            <Heading m="6" textAlign="center">Login Form</Heading>
            <Stack spacing={6}>
                <Input placeholder="Enter your Email" name="email" type="email" value={formData.email} onChange={(e) => handleChange(e)} isRequired />
                <Input type="password" placeholder="Enter your Password" name="password" value={formData.password} onChange={(e) => handleChange(e)} isRequired />
                <Button isDisabled={!formData.email || !formData.password}  colorScheme="teal" onClick={handleSubmit}>Login</Button>
            <Center mt={4}>
                <Link to="/register">
                    <Button>Join Us</Button>
                </Link>
            </Center>
            </Stack>

        </MotionBox>
    );
};

export default Login;