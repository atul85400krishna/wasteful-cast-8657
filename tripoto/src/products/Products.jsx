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
import Place from "./place/Place";
import Trip from "./trip/Trip";
import Overview from "./overview/Overview";

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
        </Box>
        <div paddingBottom={20}>
          <Button size="lg" colorScheme="green" maxWidth="92%" textAlign="left" >
           Get Customized Packages
          </Button>

        </div>
        <div>
          <Tabs maxW="92%" textAlign="center" margin="auto">
            <TabList>
              <Tab fontSize={22} fontWeight="bold">Overview</Tab>
              <Tab fontSize={22} fontWeight="bold">Trip</Tab>
              <Tab fontSize={22} fontWeight="bold">Places</Tab>
              <Tab fontSize={22} fontWeight="bold">Hotels</Tab>
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
