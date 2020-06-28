import React, { useState, useEffect } from "react";
import { Grid, Form, Input, Button, Image } from "semantic-ui-react";
import CustomLoader from "../../../components/reusable/custom-loader/custom-loader";
import Layout from "../../../components/reusable/layout/layout";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const ProfileEdit = () => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => URL.revokeObjectURL(file);
  }, []);

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("profileUpload", file);
    axios
      .post(`/api/users/upload`, data)
      .then((res) => {
        console.log(res.data);
        axios
          .put(`/api/users/${user._id}`, { avatar: res.data.src })
          .then((res) => {
            console.log(res.data);
            history.push(`/profile`);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  if (user === null) {
    return <CustomLoader />;
  }

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <h1>Edit your Profile</h1>
            <Form onSubmit={handleSubmit} loading={false}>
              <Form.Field>
                <label>Username</label>
                <input readOnly value={user.username} />
              </Form.Field>
              <Form.Field>
                <label>Profile pic</label>
                {file !== null && (
                  <Image src={URL.createObjectURL(file)} size="medium" />
                )}
                <input
                  type="file"
                  name="profileUpload"
                  onChange={handleFileUpload}
                />
              </Form.Field>
              <Button primary>Submit</Button>
              <Button as={Link} to="/profile">
                Back to home
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1>Sidebar</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default ProfileEdit;
