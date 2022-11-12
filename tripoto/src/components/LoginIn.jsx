import "./Login.css"
import { useRef } from "react"
import {Link,  useNavigate} from "react-router-dom"
import {  useToast } from "@chakra-ui/react"

const localEmail=localStorage.getItem("email")
const localPassword=localStorage.getItem("password")


export default function Login(){
  
    const email=useRef()
    const pass=useRef()
    const toast = useToast()

    const navigate=useNavigate();
const handleClick=(event)=>{
    event.preventDefault()
    console.log(email, pass)




if(localEmail===email.current.value && localPassword===pass.current.value){
    alert("Login Successfull")
    toast({
        title: 'Login Successfull.',
        description: "Welcome to Tripoto",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate("/")



   }else{
    alert("plz enter the correct credentials")
    toast({
        title: 'Login Failed.',
        description: "please fill in the correct credentials",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })

}





}



    return(
<>


<form className="form"> 
        <h2>Sign in</h2>
        <input id="email" type="email" name="email" placeholder="Email address"  ref={email}  /> <br/>
        <input id="pass" type="password" placeholder="Password"  ref={pass}  /> <br />

        <h4><input type="checkbox" class="check" /> Keep me signed in</h4>
        <p>
            Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>
       <p>
        By creating an account, I agree to the Tripoto <a href="T&C">Terms and Conditions</a>, <a href="https://www.tripoto.com/privacy-policy"> Privacy Statement</a> and <a href="https://www.tripoto.com/privacy-policy"> Tripoto Rewards Terms and Conditions.</a>
       </p> 
        <button value="Sign in" className="para"  onClick={handleClick}>Log In </button>
            <p>Don't have an account? 
                <Link to="/signup">Create one</Link></p>
                
            <p>or continue with</p>
        <div>
            <img src="https://a.travel-assets.com/egds/marks/apple.svg" alt="" />
            <img src="https://a.travel-assets.com/egds/marks/facebook.svg" alt="" />
        </div>
    </form>
</>
 )
}