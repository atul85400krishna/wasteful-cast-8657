import React from 'react'
import {Input,Image} from "@chakra-ui/react"
import "./Payment.css"

const Payment = () => {
    const don=()=>{
        alert('Payment Sucessfull')
    }
  return (
        <div className='don'>
    <div className="container" >

    <form action="" >

        <div className="row">

            {/* <div className="col">

                <h3 className="title">billing address</h3>

                <div className="InputBox">
                    <span>full name :</span>
                    <Input type="text" placeholder="john deo"/>
                </div>
                <div className="InputBox">
                    <span>email :</span>
                    <Input type="email" placeholder="example@example.com"/>
                </div>
                <div className="InputBox">
                    <span>address :</span>
                    <Input type="text" placeholder="room - street - locality"/>
                </div>
                <div className="InputBox">
                    <span>city :</span>
                    <Input type="text" placeholder="mumbai"/>
                </div>

                <div className="flex">
                    <div className="InputBox">
                        <span>state :</span>
                        <Input type="text" placeholder="india"/>
                    </div>
                    <div className="InputBox">
                        <span>zip code :</span>
                        <Input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div> */}

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="InputBox">
                    <span>cards accepted :</span>
                    <Image src="card_img.png" alt=""/>
                </div>
                <div className="InputBox">
                    <span>name on card :</span>
                    <Input type="text" placeholder="mr. john deo"/>
                </div>
                <div className="InputBox">
                    <span>credit card number :</span>
                    <Input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="InputBox">
                    <span>exp month :</span>
                    <Input type="text" placeholder="january"/>
                </div>

                <div className="flex">
                    <div className="InputBox">
                        <span>exp year :</span>
                        <Input type="number" placeholder="2022"/>
                    </div>
                    <div className="InputBox">
                        <span>CVV :</span>
                        <Input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <Input type="submit" onClick={don} value="proceed to checkout" className="submit-btn"/>

    </form>

</div>   
</div> 
  )
}

export default Payment
