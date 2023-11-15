'use client'
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, Input, Snackbar, SnackbarOrigin, Stack, Typography } from '@mui/joy'
import React ,{useState} from 'react'
import signinStyles from './signin.styles'
import Link from 'next/link'
import {FcGoogle} from 'react-icons/fc';
import { signIn } from 'next-auth/react'
interface State extends SnackbarOrigin {
  open: boolean;
}
const SignIn = () => {
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const { vertical, horizontal, open } = state;
  const handleSnackbarOpen = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };
  const handleSnackbarClose = () => {
    setState({ ...state, open: false });
  };
  const handleSignIn = async ()=>{
    if(!email || !password){
      return handleSnackbarOpen({vertical:"top",horizontal:"center"})()
    }
    setLoading(true)
    await signIn("credentials",{
      email:email,
      password:password,
      callbackUrl:"/"
    })
    setLoading(false)
  }
  return (
    <Box sx={signinStyles.main}>
      <Box sx={signinStyles.authContainer}>
        <Stack direction={"column"} gap={2}>
          <Typography 
            level='h3' 
            color='primary' 
            fontWeight={"bold"}
          >
            Sign In
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Typography level='body-sm' fontWeight={"bold"}>
              New to the Supporty?
            </Typography>
            <Typography 
              level='body-sm' 
              sx={signinStyles.signUpLink} 
              fontWeight={"bold"}
            >
              <Link href={"/auth/signup"}>
                Sign up
              </Link>
            </Typography>
          </Stack>
          <Button
            sx={signinStyles.googleSignIn} 
            startDecorator ={<FcGoogle style = {signinStyles.googleIcon}/>}
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
          <Typography level='body-md' sx={signinStyles.forgotPassword}>Forgot Password ?</Typography>
        </Stack>
        <Button onClick={handleSignIn} loading = {loading}>Sign in</Button>
        <Snackbar
          variant='solid'
          color='danger'
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleSnackbarClose}
          key={vertical + horizontal}
        >
          Invalid Credentials!
        </Snackbar>
      </Box>
    </Box>
  )
}

export default SignIn