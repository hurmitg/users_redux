import React from "react";
import { useEffect } from "react";
import { fetchAllUsers } from "../reducers/users.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import LoadingComponent from "../components/LoadingComponent";
import UserCard from "../components/AlluserPage/UserCard";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <SimpleGrid p="20px" columns={[1, 2, 3]} spacing={5}>
            {data.map((user) => {
              return <UserCard user={user} />;
            })}
          </SimpleGrid>
        </>
      )}
    </div>
  );
};
export default AllUsers;
