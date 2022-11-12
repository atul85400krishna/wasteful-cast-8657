import { Box } from "@chakra-ui/react";
import React from "react";
import BgImage from "../Components/BgImage";
import CustomPackage from "../Components/CustomPackage";
import PackageFirstSection from "../Components/PackageFirstSection";
import Styles from "./Packages.module.css";

function Packages() {
  return (
    <Box textAlign="left" style={Styles}>
      <BgImage />
      <PackageFirstSection />
      <CustomPackage />
      <br />
      <br />
      <br />
    </Box>
  );
}

export default Packages;
