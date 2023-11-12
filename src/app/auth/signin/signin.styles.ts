import { SxProps } from "@mui/joy/styles/types";

const signinStyles = {
    main:()=>{
        const styles : SxProps = {
            minHeight:"100vh",
            backgroundColor:"primary.400",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
        }
        return styles;
    },
    authContainer:()=>{
        const styles :SxProps = {
            padding:"2rem", 
            backgroundColor:"white",
            borderRadius:"1rem",
            minWidth:"30rem",
            minHeight:"20rem",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap:3
        }
        return styles;
    },
    signUpLink:()=>{
        const styles : SxProps = {
            color:"primary.500",
            textDecoration:"underline"
        }
        return styles;
    },
    googleSignIn:()=>{
        const styles : SxProps = {
            backgroundColor:"divider",
            color:"primary.900",
            transitionDuration:"0.15s",
        }
        return styles;
    },
    googleIcon:()=>({
        width:20,
        height:20
    }),
    forgotPassword :()=>{
        const styles : SxProps = {
            color:"primary.500",
            textDecoration:"underline"
        }
        return styles;
    }
}

export default signinStyles;