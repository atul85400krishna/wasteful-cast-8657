import { Box } from "@chakra-ui/react";
import React from "react";
import BgImage from "../components/BgImage";
import CustomPackage from "../components/CustomPackage";
import PackageFirstSection from "../components/PackageFirstSection";
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
