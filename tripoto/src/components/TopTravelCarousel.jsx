import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../components/item";
import CaraouselTwo from "./CarouselTwo";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 450, itemsToShow: 2, itemsToScroll: 1 },
  { width: 600, itemsToShow: 3, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
];

const TopTravelCarousel = () => {

  const v_data = [
    {
      id:1,  
      image:"https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0",
        title:"Best Weekend Getaways From Mumbai Under 250Kms",
        by:"Namita Mittal"
      },
      {
        id:2,
        image:"https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg",
        title:"Narendra Bhawan: Palace Hotel In Bikaner",
        by:"Namita Mittal"
      },
      {
        id:3,
        image:"https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg",
        title:"5-Day Jaipur Itinerary To See The City of Maharajas",
        by:"Namita Mittal"
      },
      {
        id:4,
        image:"https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0",
        title:"5 beautiful Places In Delhi That are Seriously Underated",
        by:"Namita Mittal"
      },
      {
        id:5,
        image:"https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027829_thumbnail.jpg",
        title:"10 Best Budget Hotels in India",
        by:"Namita Mittal"
      },
  ]

  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {v_data.map((item) => (
            <Item key={item.id}>
              <CaraouselTwo
                id={item.id}
                image={item.image}
                by={item.by}
                para={item.title}
              />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export  {TopTravelCarousel};
