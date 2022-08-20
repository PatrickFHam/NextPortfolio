import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./animations/RainbowHighlight";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1>
              Developer.
            </h1>
          </RainbowHighlight>
       </ RoughNotationGroup>
   )
};