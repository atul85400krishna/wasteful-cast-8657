import React, { useEffect, useState } from "react";
import {
  SGShopCard,
  SGShopCardIndividual,
  SGShopWrapper,
} from "../../styles/sgshop.styled";
import axios from "axios";

const SGShop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://tripoto-api-demo.herokuapp.com/sgshop").then((res) => {
      setData(res.data.SGShop);
    });
  }, []);

  return (
    <SGShopWrapper>
      <div>
        <h1>Shop, Book and Bring Home A Part of Singapore</h1>
        <text>
          Everything that comes with the Singapore tag is made with passion. New
          collaborations with Airbnb and Krisshop in India are testament to
          that. Bring the luxurious Singapore shopping experience at home by
          browsing through clothing, food and home decor products. Click on what
          you like and start shopping!
        </text>
      </div>

      <SGShopCard>
        {data &&
          data.map((ele) => (
            <SGShopCardIndividual key={ele._id}>
              <img src={ele.image}></img>
              <h3>{ele.title}</h3>
            </SGShopCardIndividual>
          ))}
      </SGShopCard>
    </SGShopWrapper>
  );
};

export default SGShop;
