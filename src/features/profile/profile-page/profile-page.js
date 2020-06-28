import React, { useEffect, useState } from "react";
import Layout from "../../../components/reusable/layout/layout";
import { Segment, Image, Grid, Button, Input, Divider } from "semantic-ui-react";
import CustomLoader from "../../../components/reusable/custom-loader/custom-loader";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   let loggedInUser = JSON.parse(localStorage.getItem("user"));
  //   setUser(loggedInUser);
  // }, []);

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`/api/auth`, {
        headers: {
          "x-auth-token": JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (user === null) {
    return <CustomLoader />;
  }

  return (
    <Layout>
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            <Image size="massive" src={user.avatar} />
            <h2>{user.username}</h2>
            <h4>{user.role}</h4>
          </Segment>
          <Button as={Link} to="/profile/edit" primary>Edit Profile</Button>
          <Divider />
          <Button onClick={handleLogout}>Logout</Button>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

export default ProfilePage;
