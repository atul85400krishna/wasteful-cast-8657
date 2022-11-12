import { useContext } from "react";
import styles from "./Booking.module.css";
import {BsCheckLg} from "react-icons/bs";
// import FaQ from "./FaQ"
import { ShowContext } from "../Context/ShowContext";
import { Navbar } from "./Navbar";

export default function Booking(){
    const {formValue1,formValue2} =useContext(ShowContext);
    // console.log(formValue1)
    return(
        <div>
           <Navbar/>
            <div className={styles.main}>
                <div>
                    <p className={styles.yourBook}>Your Booking</p>
                    <hr />
                    <img className={styles.destinationImage} src={formValue2.image} alt="" />
                    <hr />
                    <p style={{color:"gray"}} className={styles.yourBook}>Details Provided</p>
                    <div className={styles.insideDivBook}>
                        <div>
                            <p>Full Name</p>
                            <p>{formValue1.fullname}</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>{formValue1.email}</p>
                        </div>
                    </div>
                    {/* Contact and Destination */}
                    <div className={styles.insideDivBook}>
                        <div>
                            <p>Contact</p>
                            <p>{formValue1.contact}</p>
                        </div>
                        <div>
                            <p>Destination</p>
                            <p>{formValue2.place}</p>
                        </div>
                    </div>
                   {/* Depature and Date */}
                    <div className={styles.insideDivBook}>
                        <div>
                            <p>Depature</p>
                            <p>{formValue1.city}</p>
                        </div>
                        <div>
                            <p>Date</p>
                            <p>{formValue1.date}</p>
                        </div>
                    </div>

                    {/* Budget and Duration */}
                    <div className={styles.insideDivBook}>
                        <div>
                            <p>Room Type</p>
                            <p>{formValue1.option1}</p>
                        </div>
                        <div>
                            <p>Duration</p>
                            <p>{formValue2.days}</p>
                        </div>
                    </div>
                    {/* number of people */}
                    <div className={styles.insideDivBook}>
                        <div>
                            <p>Number of People</p>
                            <p>{formValue1.option2}</p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <hr />
                    <img className={styles.threeLogos} src="https://cdn1.tripoto.com/assets/2.9/img/newBannerPaymentLinkPage.png" alt="" />
                    <hr />
                </div>


                 {/* Second Right Box */}
                <div>
                    <img src="https://cdn1.tripoto.com/assets/2.9/img/tour-packages/lead_mweb_banner.png" alt="" />
                  <div className={styles.boxDownImage}>
                     <p className={styles.thankYouText}>Thank You</p>
                     <p className={styles.thankYouTextDetails}>While we look for your perfect trip download our app for some extra credits! Here’s how.</p>
                     </div>
                   <div className={styles.chcekBoxPart}>
                       <BsCheckLg className={styles.logoOfCheckBox} />
                       <div>
                           <p>First Booking?</p>
                           <p>Wohoo! 25 credits added.</p>
                       </div>
                   </div>

                   {/* second chech box part */}
                   <div className={styles.chcekBoxPart}>
                       <BsCheckLg style={{fontSize:"45px"}} className={styles.logoOfCheckBox} />
                       <div>
                           <p>My Bookings</p>
                           <p>Track your status real time and earn credits by giving feedback.</p>
                       </div>
                   </div>
                    {/* third chech box part */}
                    <div className={styles.chcekBoxPart}>
                       <BsCheckLg  style={{fontSize:"45px"}} className={styles.logoOfCheckBox} />
                       <div>
                           <p>Redeem Credits</p>
                           <p>Get upto ₹ 8000 off by paying through Tripoto's secure payment link.</p>
                       </div>
                   </div>

                 </div>
                
            </div>

            {/* lower box starts */}
            <div className={styles.lowerBox}>
            <hr />
            <p className={styles.topHeadStart}>Use your Tripoto credits to avail up to ₹8000 off</p>
            <p>Steps To Redeem Credits</p>
            <p>After you submit your travel query with us</p>
            <div className={styles.fourPoints}>
            <ol>
                <li>Tripoto will match you with trusted travel partners as per your filled-in/ query form requirements.</li>
                <li>You could get in touch with the partner directly with the call button above, or wait for them to get in touch with you.</li>
                <li>Your details will be shared with up to 3 travel partners including the agent/agents that you have called, so we can offer you the best quotation for your dream holiday.</li>
                 <li>On your call with the agent, discuss and fix on a quotation and remind the travel partner to share Tripoto's Payment link with you.</li>
                 <li>You can avail a total of 2.5% discount on the package of your choice, half of which will be a flat discount of 1.25% and the other half will be redeemable via your Tripoto credits. Maximum discount that can be availed is INR 8000. Both will be auto applied on the payment link you receive from the travel agent. Details of credits applied will also be sent to you.</li>
           </ol>
           </div>
           <hr />
           <img className={styles.thingsToKnow} src="https://cdn1.tripoto.com/media/filter/nxxl/img/747545/Image/1625128961_729x153_01_1.jpg" alt="" />
            <img  className={styles.thingsToKnow} src="https://cdn1.tripoto.com/media/filter/nxxl/img/416938/TripDocument/1625572957_frame_0_delay_0_01s_1.jpg" alt="" />
           {/* <FaQ /> */}
            </div>
            
           
        </div>
    )
}