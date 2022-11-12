import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./CustomPackage.module.css";

function CustomPackage() {
  return (
    <Box className={styles.CustomPackage}>
      <Heading size="lg">Customizable Tour Packages</Heading>
      <Text fontSize="13px">
        Need help in getting a perfect travel experience according to your need?
        Tripoto has curated several travel packages covering some of the most
        popular holiday destinations for you!
      </Text>
      <br />
      <Box className={styles.customImage}>
0        <Box>
          <Image src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg" />
        </Box>
        <Box>
          <Image src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg" />
        </Box>
        <Box>
          <Image src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg" />
        </Box>
      </Box>
      <br />
      <br />
      <Heading size="lg">Domestic Getaways</Heading>
      <Text fontSize="13px">
        There's a striking difference between travelling on your own terms and
        being bound by an itinerary designed by somebody else. That's why,
        Tripoto allows you to customise your packages to the best possible
        extent. Choose from Tripoto's select range of sanitised properties
        available at unbelievable prices for a safe & memorable getaway!
      </Text>
      <br />
      <Heading size="lg">Pick from hundreds of holiday packages</Heading>
      <Text fontSize="13px">
        There is something for everyone who visits on Tripoto platform. Whether
        you wish to get a taste of India's rich heritage in Rajasthan, or pay a
        visit to the Himalayas to heal your senses; it's all included. Also, on
        offer are international holiday packages, specially curated for Indian
        travellers. Witness the breathtaking beaches of Thailand or stroll
        through the bustling cities in Australia. Newlyweds can chose from some
        of the most sought after honeymoon destinations like Maldives or
        Iceland, or go off the beaten path in destinations like China or Egypt.
        If you are looking for a quick break, plan a weekend getaway to some of
        the top hideouts near your city. Business travellers and group tours are
        in the mix as well - popular packages include trips to places like Dubai
        and Malaysia. If you are seeking some serious adventure, select from
        trekking packages through some of the most scenic mountainous ranges in
        the world and capture moments for a lifetime. Skydiving, scuba diving,
        adventure biking, and much more on Tripoto - it's a one of the most
        dynamic selection of trips and activities for Indian travellers.
      </Text>
      <br />
      <Heading size="lg">Why book holidays with Tripoto?</Heading>
      <Text fontSize="13px">
        Tripoto's travel partners provide some of the best India tour packages
        and International tour packages. We are passionate about travel and
        strive to offer experiences that matter. Get in touch with our team with
        any query about holiday packages in India.
      </Text>
      <br />
      <Heading size="lg">How to book holidays with Tripoto?</Heading>
      <Text fontSize="13px">
        Booking holidays on Tripoto is as easy as it gets. Pick from hundreds of
        packages. We will then connect you with your choices of travel providers
        via email and/or phone. Tripoto partners with leading travel companies
        in India, like MakeMyTrip, Thomas Cook, SOTC, Yatra, to name a few, to
        help you plan the perfect vacation. Here is the step-by-step guide to
        booking domestic or international packages on Tripoto. Step 1: Click on
        the 'Book Holidays' button on the top right corner of any page on
        Tripoto. Step 2: You will be taken to a page with different categories
        of packages. Step 3: Click on any package to submit your requirements.
        We will attend to your query and put you in touch with a representative
        from our travel partners within 48 hours.
      </Text>
    </Box>
  );
}

export default CustomPackage;
