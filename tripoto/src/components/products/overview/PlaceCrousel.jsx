import React from "react";
import Carousel from "react-multi-carousel";
import { Box, HStack, Image } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Badge,
  Stack,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
const PlaceCrousel = () => {
  let reco = [
    {
      title: "Forigner Explores Mumbai ",
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1526457016_sea.jpg",

      section: "Recommends",
      Tag: "VIDEO GUIDE",
    },
    {
      title: "Why It's Hard To Live Anywhere ",
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1526457165_marine.jpeg",

      section: "Recommends",
      Tag: "READ",
    },
    {
      title: "Dehene Village -A Hidden Monsoon",
      image:
        "https://static2.tripoto.com/media/filter/tst/img/1/SpotDocument/84349882.jpg",

      section: "Recommends",
      Tag: "READ",
    },
    {
      title: "Best Hotels In Mumbai",
      image:
        "https://static2.tripoto.com/media/filter/tst/img/249369/SpotDocument/1472834065_1472834065_img_2234.jpg",

      section: "Recommends",
      Tag: "STAY",
    },
    {
      title: "Best Hotels In Mumbai",
      image:
        "https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1526457313_dharavi.jpg",

      section: "Recommends",
      Tag: "Explore",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    
    <Heading size="lg" paddingLeft={0}>All You Can Eat In Mumbai</Heading>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {reco.map((e) => {
          return (
            <div>
              <Card maxW="xlg">
                <CardBody>
                  <Image
                    src={e.image}
                    boxSize='310px'
                    width="100%"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Text>{e.Tag}</Text>
                    <Heading size="md">{e.title}</Heading>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};

export default PlaceCrousel;