
import "./signup.css"
import { useRef , useState, useEffect} from "react"
import Login from "./LoginIn"
import {Link, useNavigate} from "react-router-dom"
import {useToast } from '@chakra-ui/react'



export  default  function SignUP(){
const email=useRef()
const name=useRef()
const lastName=useRef()
const pass=useRef()
const [showLogin,setShowLogin]=useState(false)
const [show,setShow]=useState(false)
 const localSignUp=localStorage.getItem("signUp")
 const localEmail=localStorage.getItem("email")
 const localLastName=localStorage.getItem("lastName")
 const localPassword=localStorage.getItem("password")
 const localName=localStorage.getItem("name")
 const toast = useToast()

const navigate=useNavigate()

// useEffect(()=>{
//     if(localSignUp){
//         setShowLogin(true)//true
//     }
//     if(localEmail){
//         setShow(true)//true
//     }
//    })

const handleClick=(event)=>{
event.preventDefault()
 console.log(name.current.value,email.current.value, lastName.current.value, pass.current.value)
  if(name.current.value && email.current.value && lastName.current.value && pass.current.value){
    localStorage.setItem("name",name.current.value)
    localStorage.setItem("email",email.current.value)
    localStorage.setItem("lastName",lastName.current.value)
    localStorage.setItem("password",pass.current.value)
    localStorage.setItem("signUp",email.current.value)
    alert("Account created successfully!!");
  
    navigate("/login")
    window.location.reload()
    toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
       window.location.reload()
     
   
   



  }if(name.current.value==="" && email.current.value ==="" && lastName.current.value==="" && 
  pass.current.value===""){
alert("plz fill in to continue")
toast({
    title: 'SignUp Failed.',
    description: "please fill in all the details to SignUp.",
    status: 'warning',
    duration: 9000,
    isClosable: true,
  })




  }
}

const handleSignIn=()=>{
    if(email.current.value==localEmail && pass.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
return (
<div>
<div className="One">
<form className="form">
        <h2>Create an account</h2>
        <input id="email" type="email" name="email" placeholder="Email address" ref={email}     /> <br />
         <input id="name" type="text" name="name" placeholder="First name" ref={name}    /><br/>
         <input id="LastName" type="Lasttext" name="LastName" placeholder="Last name" ref={lastName}   /><br />
        <input id="pass" type="password" placeholder="Password"  ref={pass}   /> <br/>
        
        <h4><input type="checkbox" class="check" /> Keep me signed in</h4>
        <p>
            Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>
       <p>
        By creating an account, I agree to the Tripoto
         <a href="https://www.tripoto.com/privacy-policy">  Terms and Conditions</a>, 
         <a href="https://www.tripoto.com/privacy-policy"> Privacy Statement</a> 
         & <a href="https://www.tripoto.com/privacy-policy"> Tripoto Rewards Terms and Conditions.</a>
       </p> 
        <button  className="button" onClick={handleClick} >Continue</button>
            <p>Already have an account?
                <Link to="/login" >Log In</Link></p>
        </form>
    </div>
</div>

    
)
}


