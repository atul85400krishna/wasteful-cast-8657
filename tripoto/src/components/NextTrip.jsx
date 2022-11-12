import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../components/item2";
import CaraouselThree from "./CarouselThree";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 1},
];

const NextTrip = () => {

  const n_trip = [
    "https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216649_andaman.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732339_1_10.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732387_3_7.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732417_2_10.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732456_dubai.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg"
  ];

  return (
    <div className="App">
      <div className="carousel-wrapper-country">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {n_trip.map((item) => (
            <Item key={item}>
              <CaraouselThree
                image={item}
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NextTrip;
