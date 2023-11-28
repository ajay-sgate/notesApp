import React, { useState } from "react";
import { Box, Button, Center, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupFun, SignupSuc, SignupFail } from "../redux/authReducer/action";

const MotionBox = motion(Box);


const Register = () => {
    const toast = useToast()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "name":"",
        "email": "",
        "password": ""
    })

    const handleChange = (e) => {

        setFormData(() => {
            return { ...formData, [e.target.name]: e.target.value }
        })


    }

    const handleSubmit = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.email && emailRegex.test(formData.email)) {
            dispatch(SignupFun(formData)).then((res) => {
                dispatch(SignupSuc)
                toast({
                    title: res.data.msg,
                    status: "success",
                    position: "top-center",
                    isClosable: true,
                })
                navigate("/login")
            }).catch((err) => {
                dispatch(SignupFail)
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
            pt="100px"
            h="90vh"
        >
            <Heading m="6" textAlign="center">Registration Form</Heading>
            <Stack spacing={6}>
                <Input placeholder="Enter your Name" name="name" type="text" value={formData.name} onChange={(e) => handleChange(e)} isRequired />
                <Input placeholder="Enter your Email" name="email" type="email" value={formData.email} onChange={(e) => handleChange(e)} isRequired />
                <Input type="password" placeholder="Enter your Password" name="password" value={formData.password} onChange={(e) => handleChange(e)} isRequired />
                <Button isDisabled={!formData.name || !formData.email || !formData.password} colorScheme="blue" onClick={handleSubmit}>Register</Button>
                <Center mt={4}>
                    <Link to="/login">
                        <Button colorScheme="teal">Already Registered</Button>
                    </Link>
                </Center>
            </Stack>

        </MotionBox>
    );
};

export default Register;