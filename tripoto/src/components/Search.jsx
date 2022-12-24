import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {Input} from "@chakra-ui/react"

const Inputt = ({}) => {
  const navigate = useNavigate();
  const [val, setVal] = useState("");

  const handleTrack = () => {
    if (val.length !== 0) {
      
      navigate("/mumbai")
      console.log("got this:", val);
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      navigate("/mumbai")
      handleTrack();
    }
  };

  return (
    <div>
      < Input
       width={"80%"}
     
       backgroundColor={"white"}
       placeholder="Search for itineraries, destinations, hotels or activities"
        value={val}
        onChange={e => {
          setVal(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
     <Link to="/">
       <button
        onClick={() => {
          handleTrack();
        }}
      >
        Click
      </button>
      </Link>
    </div>
  );
};

export default function Seacrh () {
  return (
    <div>
      <Inputt />
    </div>
  );
}