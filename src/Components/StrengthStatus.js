import { useEffect } from "react";

export default function StrengthStatus(props){


   // poor,Weak password,strong password,very Strong password
   //checkBoxData
useEffect(()=>{StrengthStatusfn()},[props.length])
const StrengthStatusfn=()=>{


    const countfalse = props
    if(props.length===4){
props.setStrengthValue("Poor Password")
        return props.strengthValue;
    }else if(props.length >4 && props.length <=6){
        props.setStrengthValue("Weak Password")
        return props.strengthValue;
    }else if(props.length>=8 && props.length<=12){
        props.setStrengthValue("Strong Password")
        return props.strengthValue;
    }else if(props.length>12){
        props.setStrengthValue("Very Strong Password")
        return props.strengthValue;
    }
   
}


}