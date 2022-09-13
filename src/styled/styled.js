import { styled } from "@mui/system";
import {
  Instagram,
  GitHub,
  LinkedIn,
  Facebook,
  WhatsApp
} from "@mui/icons-material";

 export const Wp=styled(WhatsApp)(({theme})=>({
    [theme.breakpoints.down('md')]: {
      fontSize:"40px",
      color: "green"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"80px",
      color: "green"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"100px",
      color: "green"
    },
  }));

  export const Fb=styled(Facebook)(({theme})=>({
    [theme.breakpoints.down('md')]: {
      fontSize:"40px",
      color: "blue"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"80px",
      color: "blue"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"100px",
      color: "blue"
    },
  }));

  export const Ld=styled(LinkedIn)(({theme})=>({
    [theme.breakpoints.down('md')]: {
      fontSize:"40px",
      color: "rgb(17, 0, 124)"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"80px",
      color: "rgb(17, 0, 124)"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"100px",
      color: "rgb(17, 0, 124)"
    },
  }));

  export const In=styled(Instagram)(({theme})=>({
    [theme.breakpoints.down('md')]: {
      fontSize:"40px",
      color: "rgb(255, 0, 149)"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"80px",
      color: "rgb(255, 0, 149)"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"100px",
      color: "rgb(255, 0, 149)"
    },
  }));

  export const Gh=styled(GitHub)(({theme})=>({
    [theme.breakpoints.down('md')]: {
      fontSize:"40px",
      color: "black"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"80px",
      color: "black"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"100px",
      color: "black"
    },
  }));

 export default styled({Gh,In,Fb,Wp,Ld});