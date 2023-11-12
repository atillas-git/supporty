'use client'
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, Input, Stack, Typography } from '@mui/joy'
import React ,{useState} from 'react'
import signupStyles from './signup.styles'
import Link from 'next/link'
import {FcGoogle} from 'react-icons/fc';
const SignUp = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    
    const handleSignIn = ()=>{
        if(!email || !password){
        }
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },5000)
    }

    return (
    <Box sx={signupStyles.main}>
      <Box sx={signupStyles.authContainer}>
        <Stack direction={"column"} gap={2}>
          <Typography 
            level='h3' 
            color='primary' 
            fontWeight={"bold"}
          >
            Sign Up
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography level='body-sm' fontWeight={"bold"}>
              New to the Supporty?
            </Typography>
            <Typography 
              level='body-sm' 
              sx={signupStyles.signUpLink} 
              fontWeight={"bold"}
            >
              <Link href={"/auth/signup"}>
                Sign up
              </Link>
            </Typography>
          </Stack>
          <Button
            sx={signupStyles.googleSignIn} 
            startDecorator ={<FcGoogle style = {signupStyles.googleIcon}/>}
          >
              Sign in with Google
          </Button>
        </Stack>
        <Divider/>
        <Stack width={"100%"} direction={"column"} gap={1}>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type='email' onChange={(e)=>setEmail(e.target.value)}/>
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
        </Stack>
        <Stack direction={"row"} alignSelf={"center"} justifyContent={"space-between"} width={"100%"}>
          <Checkbox label = "Remember Me" />
          <Typography level='body-md' sx={signupStyles.forgotPassword}>Forgot Password ?</Typography>
        </Stack>
        <Button onClick={handleSignIn} loading = {loading}>Sign in</Button>
      </Box>
    </Box>
  )
}

export default SignUp