import { Button } from "@chakra-ui/react";
import { NextPage } from "next";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

const PaginationItem: NextPage<PaginationItemProps> = ({
  isCurrent = false,
  number,
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bgColor="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
