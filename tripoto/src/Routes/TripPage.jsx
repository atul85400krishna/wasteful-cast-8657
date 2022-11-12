import { useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import {BsWhatsapp} from "react-icons/bs";
import {FaCampground} from "react-icons/fa";
import {BsBinoculars} from "react-icons/bs";
import {FaHamburger} from "react-icons/fa";
import {GiCampfire} from "react-icons/gi";
import {GiMeditation} from "react-icons/gi";
import {GiCircleForest} from "react-icons/gi";
import {MdOutlineCall } from "react-icons/md";
import {MdOutlineFreeBreakfast } from "react-icons/md";
import styles from "./TripPage.module.css"
import SimpleImageSlider  from "react-simple-image-slider";
import {Link,NavLink} from "react-router-dom"
// import {AppContext} from "../Context/AppContext";
import {
    FormControl,
    FormLabel,Button,FormHelperText,Input,Spacer,Select,Stack,Checkbox} from '@chakra-ui/react'
import FaqSection from "./FaqSection";
import Middle6Part from "../components/Middle6Part";
import {useNavigate} from "react-router-dom";
import {Navbar} from "../components/Navbar"
import { ShowContext } from "../Context/ShowContext";

export default function TripPage(){
  
  const {formValue1,fillForm1,formValue2,fillForm2} =useContext(ShowContext);

  const [data, setData] = useState({});
    const params = useParams();
    const { id } = params;
 

  const naviagte= useNavigate();

  const [aa,setaa]=useState("")
  const [formState,setFormState] =useState( {email:"",city:"",fullname:"",contact:"",option1:"",option2:"",date:""});
  const handleChange=(e)=> {
    const { name:key,value} =e.target;
    setFormState({ ...formState,[key]:value})
    // console.log(formState.option2)
  }
  

  const handleSubmit=(e)=>{
   fillForm1(formState)
    e.preventDefault();
    
   naviagte(`/payment`);
  }
    useEffect(()=>{
        getData();
    },[id])

function getData(){ axios.get(`https://avdhoot-fake-api.herokuapp.com/bookhotels/${id}`).then((res)=>{setData(res.data);fillForm2(res.data)})
                
}
// console.log(formValue1)
// console.log(formValue2)
  
   const images=[
  
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780150_934661ca_9b84_4cbe_8b92_ac823d9727b2.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660748077_img_9097_1.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660748843_img_9258.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780229_67f9a8bb_72de_473a_8973_0ef5962097ab.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780241_6pic.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660810642_img_9031_1.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660810249_fd32ed2a_7337_477a_8dca_48f85f21d69c_1.jpeg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660810263_e7275ad4_fc44_4254_9b16_e7b8645d5969_1.jpeg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780897_75233756_490199334915288_1564536941028835328_o_1.jpeg",

    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1654609877_id_0178_2.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1653931532_id_0167_1.jpg",
    "https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1645773192_img_9805.jpg"
]
  

    return(
      <div>
       
        <Navbar/> 
    
        <div style={{marginTop:"150px",display:"flex",width:"80%",margin:"auto",justifyContent:"space-between"}}>
         <div style={{width:"60%"}}>
             <SimpleImageSlider showBullets={true}
            showNavs={true} images={images} height="500px" width="750px" />
           <p className={styles.head}>Embrace Minimalistic Community Life & Learn A Traditional Martial Art | Beyond Community, Auroville</p>
         <div className={styles.belowHead}>
            <div>
                <img src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg" alt="" />
                <p>Tripoto Mindful Retreats</p>
            </div>
            <p ><MdOutlineCall style={{fontSize:"25px",color:"green",marginRight:"5px",display:"inline"}} />08046162990</p>
         </div>
         <hr />
         <div className={styles.daysPrice}>
            <div>{data.days}</div>
            <p>₹ {data.cost} <p style={{display:"inline",color:"black",fontSize:"15px"}}> /person</p></p>
         </div>
         <div className={styles.belowPrice}>
         <p>Location</p>
         <p>{data.place}</p>
         </div>
         <p style={{color:"teal"}} className={styles.belowPrice}>Highlights</p>
         <div className={styles.highLightBox}>
           <div>
             <div><FaHamburger/></div>
             <div>Meals</div>
           </div>
           <div>
             <div><MdOutlineFreeBreakfast/></div>
             <div>Breakfast</div>
           </div>
           <div>
             <div><BsBinoculars/></div>
             <div>Sightseeing</div>
           </div>
           <div>
             <div><FaCampground/></div>
             <div>Camp</div>
           </div>
           <div>
             <div><GiCampfire/></div>
             <div>Adventure</div>
           </div>
           <div>
             <div><GiCircleForest/></div>
             <div>Nature</div>
           </div>

           <div>
             <div><GiMeditation/></div>
             <div>Wellness</div>
           </div>
         </div>

         <p className={styles.overview}>Overview</p>
         <p className={styles.overviewFirst}>Feel like stepping away from the urban cacophony, to unwind amidst nature? Embrace the gorgeous blue skies and the soothing green fields at Tripoto’s Mindful Retreat in Auroville, where you can live peacefully and vibe with nature at its best. Set in the outskirts of Pondicherry, explore this experimental township like never before, as you glamp amidst greenery, go cycling around town to explore spots like the Spirulina farm, Svaram sound garden, Cheese Factory, and the popular Matrimandir. Spend your mornings working at the organic farm, cuddle with farm animals (3 dogs and 18 cats to be precise!), and learn Kalaripayattu, a century-old martial art form. Join us for Tripoto's first Mindful Retreat in South India, and get a chance to uncover a minimalistic and spiritual way of life.</p>
         <p className={styles.overviewSecond}>The retreat comes with a free one-time rescheduling option. Let us know 72 hours ahead of the stay and pick another date as per your convenience within the next three months.</p>
          <p className={styles.overviewSecond}>What you will love:</p>
        <div className={styles.lists}>
             <ul>
               <li>Living in cozy tents with modern amenities amidst an organic farm.</li>
               <li>Exploring the town on a bicycle tour and visiting gems like Spirulina farm, Svaram Sound Garden, Cheese Factory, and Matrimandir. </li>
               <li>Volunteering at the lush green farmlands and going back to our agrarian roots.</li>
               <li>Learning Kalaripayattu, a popular Indian martial arts form that dates back to centuries.</li>
               <li>Discovering India’s unique experimental township– Auroville that aims to create a “universal town where men and women of all countries are able to live in peace and progressive harmony above all creeds, all politics and all nationalities.”</li>
               </ul>
        </div>

        <p className={styles.overviewSecond}>Where you'll stay:</p>
  
        <div className={styles.lists}>
             <ul>
               <li>Settle yourself in a glamping tent (double sharing) or take a spot in the dorm (one bed) to connect with fellow travellers.</li>
               <li>Live amidst nature with 3 dogs and 18 cats on the property.</li>
               <li>Get a chance to volunteer at the organic farm and embrace the bliss of minimalistic living.</li>
             
               </ul>
        </div>
       
        <p className={styles.overviewSecond}>At the retreat you will experience: </p>
       
        <div className={styles.lists}>
        <dl>
            <dt>* Exploring a new way of life </dt>
            <dd>– Enjoy cycling around nature’s trails covering the town’s highlights</dd>
            <dd>– Learn the art of Kalaripayattu, that’s considered among the oldest and most scientific martial arts in the world.</dd>
            <dd>– Volunteer at the organic farms and experience communal living.</dd>
        </dl>

        <dl>
            <dt>* An opportunity to live a rustic life amidst nature </dt>
            <dd>– Wake up to the freshness of nature that’ll soothe your soul, away from the hustle and bustle of the city life.</dd>
            <dd>– Stargaze from your tent and forget the worldly woes.</dd>
            <dd>– Spend your days feeling the love of pets around you</dd>
            <dd>– Connect with like-minded people and exchange stories over fresh food.</dd>
        </dl>
        </div>
       
        <p className={styles.overviewSecond}>Why should you book? </p>
       
        <div className={styles.lists}>
             <ul>
               <li>Flexible booking</li>
               <li>The retreat comes with a free one-time rescheduling option. Let us know 72 hours ahead of the stay and pick another date as per your convenience within the next three months</li>
               <li>Lowest price</li>
               <li>A unique experience to explore by cycling and learning Kalaripayattu amidst nature.</li>
               </ul>
        </div>
        <FaqSection />

        <p style={{fontSize:"20px"}} className={styles.overviewSecond}>Inclusions </p>

        <div className={styles.lists} >
             <ul>
               <li>Two breakfasts at the retreat.</li>
               <li>Two lunches at the retreat.</li>
               <li>Two dinners at the retreat.</li>
               <li>Kalaripayattu lesson and cycling.</li>
               </ul>
        </div>

        <p style={{fontSize:"20px"}} className={styles.overviewSecond}>Exclusions </p>

      <div className={styles.lists}>
         <ul>
           <li>Travel expenses to the location.</li>
           <li>Any other expenses besides those mentioned in the inclusions.</li>
        </ul>
     </div>
      <p style={{fontSize:"28px",marginTop:"20px"}}>Cancellation Policy</p>
      <p>All bookings for Tripoto Mindful Retreats are non-refundable.</p>
        <hr />
        <hr />
        <hr />


        </div>
        



        <div className={styles.forms} style={{}}>
        <FormControl>
            <FormLabel >Enter Your Details and Proceed To Book</FormLabel>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <Input onChange={handleChange} name="email"  type='email' placeholder="Enter Email"/>
            <Spacer />
            <Input onChange={handleChange} name="fullname"  style={{marginTop:"20px"}} type='text' placeholder="Full Name"/>
            <Input onChange={handleChange} name="contact"  style={{marginTop:"20px"}} type='number' placeholder="Contact Number"/>
            <Input onChange={handleChange} name="city" style={{marginTop:"20px"}} type='text' placeholder="Departure City"/>
            <Input onChange={handleChange} name="date" style={{marginBottom:"20px",border:"1px solid lightgray",padding:"3px 90px",borderRadius:'4px',marginTop:"20px",color:'gray'}} type="date" placeholder="Enter Date"/>
            <Stack spacing={3}>
                <Select  onChange={handleChange} name="option1"  variant='filled' placeholder='Type of Room'>
                   <option value='Private Rooms on Double Occupancy'>Private Rooms on Double Occupancy</option>
                   <option value="Dorms">Dorms</option>
                </Select>
                <Select  onChange={handleChange} name="option2" variant='filled' placeholder='Number of People'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
               </Select>
           </Stack>
           
           <Checkbox style={{marginTop:"20px"}} colorScheme='green' defaultChecked>
                 <p> Send me updates on <BsWhatsapp style={{fontSize:"20px",color:"green",marginLeft:"5px",display:"inline"}}/></p>
            </Checkbox>
        </FormControl>
         <div style={{display:"flex",justifyContent:'space-between',marginTop:"20px"}}>
            <p style={{fontSize:"20px",fontWeight:"600"}}>Amount</p>
            <p style={{fontSize:"20px",fontWeight:"600"}}> <p style={{fontSize:"13px",display:"inline"}}> Starting from</p> ₹ {Number(data.cost)*Number(formState.option2)}</p>
         </div>
         <p  style={{marginTop:"20px"}}>Taxes and discounts are calculated next.</p>
         <Checkbox required style={{marginTop:"20px"}} colorScheme='green' >
         I accept the Terms of Use and Policy.
            </Checkbox>
          <NavLink to="/payment">  <Button target="blank"onClick={handleSubmit} borderColor='green.500' colorScheme='blue' style={{width:"90%",marginTop:"30px"}}>Next</Button></NavLink>
        </div>
        
        </div>
        <p className={styles.experience}>More to Experience</p>
       <Middle6Part />
        </div>
        
    )
}