"use client";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import signupStyles from "./signup.styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password || !username || !name) {
    }
    setLoading(true);
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      }),
    });
    if (res.ok) {
      router.push("/auth/signin");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <Box sx={signupStyles.main}>
      <Box sx={signupStyles.authContainer}>
        <Stack direction={"column"} gap={2}>
          <Typography level="h3" color="primary" fontWeight={"bold"}>
            Sign Up
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography level="body-sm" fontWeight={"bold"}>
              Already have an account?
            </Typography>
            <Typography
              level="body-sm"
              sx={signupStyles.signUpLink}
              fontWeight={"bold"}
            >
              <Link href={"/auth/signin"}>Sign in</Link>
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack width={"100%"} direction={"column"} gap={1}>
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl required>
            <FormLabel>Username</FormLabel>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Divider />
        <Button onClick={handleSignUp} loading={loading}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
