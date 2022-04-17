import { Text } from "@chakra-ui/react";
import { NextPage } from "next";

export const Logo: NextPage = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};

export default Logo;
