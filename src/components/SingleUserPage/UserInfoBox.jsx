import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

const UserInfoBox = ({ user }) => {
  return (
    <Flex
      borderRadius={5}
      flexDir="column"
      justifyContent="center"
      h="90%"
      w={["90%", "80%", "70%"]}
      m="50px auto"
      p="20px 40px"
      fontSize="xl"
      textAlign="left"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Text
        fontSize="3xl"
        fontWeight="700"
        textAlign="center"
        textTransform="uppercase"
        textDecor="underline"
        letterSpacing={2}
      >
        {user.name}
      </Text>
      <Text mb={3} textAlign="center">
        <Link>{user.website}</Link>
      </Text>
      <hr />
      <Text mt={5}>
        <b>Username : </b>
        {user.username}
      </Text>
      <Text>
        <b>Email : </b>
        {user.email}
      </Text>
      <Text>
        <b>Phone Number : </b>
        {user.phone}
      </Text>
      <Text>
        <b>Address : </b>
        {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
      </Text>
      <Text>
        <b>Employee of : </b>
        {`${user.company.name} (${user.company.catchPhrase})`}
      </Text>
    </Flex>
  );
};
export default UserInfoBox;
