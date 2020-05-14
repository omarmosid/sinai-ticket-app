import React, { useEffect, useState } from "react";
import Layout from "../../../components/reusable/layout/layout";
import { Segment, Image, Grid, Button } from "semantic-ui-react";
import CustomLoader from "../../../components/reusable/custom-loader/custom-loader";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";

const ProfilePage = () => {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   let loggedInUser = JSON.parse(localStorage.getItem("user"));
  //   setUser(loggedInUser);
  // }, []);

  const { state } = useContext(GlobalContext);
  const { user } = state;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }

  if (user === null) {
    return <CustomLoader />;
  }

  return (
    <Layout>
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            <Image size="massive" src={user.avatar} />
            <h1>{user.name}</h1>
            <h4>{user.role}</h4>
          </Segment>
          <Button onClick={handleLogout}>Logout</Button>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

export default ProfilePage;
