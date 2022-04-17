import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile: NextPage<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Danilo Henrique</Text>
          <Text color="gray.300" fontSize="small">
            danilohssantana@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Fernandes"
        src="https://www.github.com/danhenriquex.png"
      />
    </Flex>
  );
};

export default Profile;
