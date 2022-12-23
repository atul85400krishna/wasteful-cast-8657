import React from 'react'
import RecommendCrousel from './RecommendCrousel'
import MumbaiCrousel from './MumbaiCrousel'
import Edit from "./simple/Edit"
import BestBudegt from "./simple/BestBudget"
import Litnex from "./simple/Litnex"
import Luxry from "./simple/Luxry"
import MidRange from "./simple/MidRange"
import Mumbai from "./simple/Mumbai"
import PlaceCrousel from './PlaceCrousel'
import { Heading } from '@chakra-ui/react'

import Travel from './Travel'
const Overview = () => {
  return (
    <>
    <div padding-bottom="10px"><RecommendCrousel/></div>
    <div padding-bottom="10px"><Edit/></div>
    <div padding-bottom="10px"><PlaceCrousel/></div>
    <div padding-bottom="10px"><Litnex/></div>
    <div padding-bottom="10px"><Mumbai/></div>
    <div padding-bottom="10px"><Travel/></div>
    <div padding-bottom="10px"><BestBudegt/></div>
    <div padding-bottom="10px"><Luxry/></div>
    <div padding-bottom="10px"><MidRange/></div>
    <div><MumbaiCrousel/></div>
    <div>
    <Heading size="lg">Budget For Mumbai</Heading>
    </div>
    </>
  )
}

export default Overview
