import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../../reducers/users.reducer";
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      borderRadius={5}
      flexDir="column"
      justifyContent="center"
      h="90%"
      m="30px 0"
      textAlign="left"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      p="20px"
      onClick={() => {
        dispatch(fetchSingleUser(user.id));
      }}
    >
      <Text
        fontSize="2xl"
        fontWeight="700"
        textTransform="uppercase"
        textDecor="underline"
        letterSpacing={2}
      >
        {user.name}
      </Text>
      <Text fontWeight="600" mt={2}>
        {user.company.name}
      </Text>
      <Text mt={2} fontSize="sm" fontWeight="300" textTransform="lowercase">
        {user.email}
      </Text>
      <Link key={user.id} to={`/user/${user.id}`}>
        <Button mt={2} w="40%" ml="60%" variant="ghost" colorScheme="blue">
          Show Details
        </Button>
      </Link>
    </Flex>
  );
};
export default UserCard;
