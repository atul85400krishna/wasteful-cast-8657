import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import Hotels from "./hotels/Hotels";
import Hotel from "./hotels/Hotel";
import Place from "./place/Place";
import Trip from "./trip/Trip";
import Overview from "./overview/Overview";
import {Link} from "react-router-dom"

const Products = () => {
  return (
    <>
      <div >
        <Box maxW="56rem" paddingBottom={20} maxWidth="92%" textAlign="center" margin="auto">
          <Heading mb={4}>Mumbai Tourism and Travel Guide</Heading>
          <Text fontSize="lg">
            India’s second largest city, Mumbai, previously known as Bombay, is
            home to a few hundred captivating contrasts and creeds. Mumbai is
            bursting with frenetic bazaars, shaded avenues thronged by commuters
            and roads brimming with traffic. The dynamic Maharashtrian
            metropolis is also a powerhouse of India’s business and trade
            sectors. But regardless,Bombay’s ethos lies in its biggest railway
            station - Chhatrapati Shivaji Terminus, in people-watching and
            eating
          </Text>
        <div paddingBottom={20} textAlign="center" margin="auto">
          <Button size="lg" colorScheme="green" maxWidth="25%" textAlign="center" margin="auto"  >
           Get Customized Packages
          </Button>

        </div>
        </Box>
        <div>
          <Tabs maxW="92%" textAlign="center" margin="auto">
            <TabList>
           <Link to="/">
              <Tab fontSize={22} fontWeight="bold">Overview</Tab>

           </Link>
           <Link to="/mumbai/trip">
              <Tab fontSize={22} fontWeight="bold">Trip</Tab>

           </Link>
           <Link to="/mumbai/place">
              <Tab fontSize={22} fontWeight="bold">Places</Tab>

           </Link>
           <Link to="/mumbai/hotel">
              <Tab fontSize={22} fontWeight="bold">Hotels</Tab>

           </Link>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Overview />
              </TabPanel>

              <TabPanel>
                <Trip />
              </TabPanel>
              <TabPanel>
                <Place />
              </TabPanel>
              <TabPanel>
                <Hotels />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Products;
