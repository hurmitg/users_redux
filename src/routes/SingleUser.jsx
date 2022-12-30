import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleUser } from "../reducers/users.reducer";
import LoadingComponent from "../components/LoadingComponent";
import UserInfoBox from "../components/SingleUserPage/UserInfoBox";

const SingleUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, []);
  return (
    <div>{loading ? <LoadingComponent /> : <UserInfoBox user={user} />}</div>
  );
};
export default SingleUser;
