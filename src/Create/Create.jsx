import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Create.css";
import { useStateValue } from "../Context/StateProvider";
import { createPost, getPosts } from "../DataStore/dataStore";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Create({ setPostsData }) {
  const [state, _] = useStateValue();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    formDataObj.user = state.user?.email;
    formDataObj.name = state.user?.displayName;
    await createPost(formDataObj, false);
    setPostsData(await getPosts());
    history.push("/home");
  };
  return (
    <div className="create">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" role="form">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" name="title" />
          <Form.Text className="text-muted">Enter Title for the post</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" role="form">
          <Form.Label>Enter body in short for your complaint</Form.Label>
          <Form.Control type="text" placeholder="Enter Body" name="body" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" role="form">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location (Gmaps) url"
            name="location"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" role="form">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select photo"
            name="file"
            accept="image/*"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
