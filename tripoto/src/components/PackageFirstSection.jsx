import { Avatar, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Styles from "./PackageFirstSection.module.css";
import axios from "axios";

function PackageFirstSection() {
  const [data, setData] = useState([]);
  const getData = () => {
    return axios
      .get("https://avdhoot-fake-api.herokuapp.com/bookhotels")
      .then((res) => {
        setData(res.data
          );
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box className={Styles.IstSection}>
      <Heading size="lg" textAlign="left">
        Tripoto's Mindful Retreats
      </Heading>
      <Box textAlign="left">
        {data.map((elem) => (
          <Box key={elem.id}>
            <Box >
              <Image src={elem.img} />
            </Box>
            <Text
              mt={-1}
              mb="-1"
              fontSize="13px"
              color="teal"
              fontWeight="bold"
            >
              PACKAGE
            </Text>
            <Box className={Styles.title}>{elem.title}</Box>
            <Box className={Styles.Placebox}>
              <Box display="flex" alignItems="center" gap="8px" fontWeight={"bold"} >
                <Image src="data:image/svg+xml,%3csvg width='11px' height='15px' viewBox='0 0 11 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cg transform='translate(-36.000000%2c -35.000000)' fill='%23359391'%3e %3cpath d='M46.1538462%2c43.5714286 L41.5%2c50 L36.8461538%2c43.5714286 L36.8670256%2c43.5714286 C36.3173077%2c42.7142857 36%2c41.6851429 36%2c40.5714286 C36%2c37.4854286 38.4535641%2c35 41.5%2c35 C44.5464359%2c35 47%2c37.4854286 47%2c40.5714286 C47%2c41.6851429 46.6826923%2c42.7142857 46.1329744%2c43.5714286 L46.1538462%2c43.5714286 Z M41.4294872%2c39 C40.6150641%2c39 39.9487179%2c39.675 39.9487179%2c40.5 C39.9487179%2c41.325 40.6150641%2c42 41.4294872%2c42 C42.2439103%2c42 42.9102564%2c41.325 42.9102564%2c40.5 C42.9102564%2c39.675 42.2439103%2c39 41.4294872%2c39 L41.4294872%2c39 Z' id='Location-white'%3e%3c/path%3e %3c/g%3e %3c/svg%3e" />
                <Box fontSize="13px" color={"teal"}>{elem.place}</Box>
              </Box>
              <Box>{elem.days}</Box>
            </Box>
            <Box className={Styles.Placebox}>
              <Box>{elem.cost} / person</Box>
              <Button className={Styles.BooknowButt} size="sm">
                Book Now
              </Button>
            </Box>
            <hr />
            <Box display="flex" alignItems="center" gap="8px">
              <Avatar
                src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
                size="sm"
              />
              <Box fontSize="13px">Tripoto's Mindful Retreats</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PackageFirstSection;
