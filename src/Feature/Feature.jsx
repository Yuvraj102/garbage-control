import React, { useEffect, useState } from "react";
import "./Feature.css";
import PostComponent from "../Post/PostComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import {
  createReply,
  getPosts,
  getReplies,
  getSinglePost,
} from "../DataStore/dataStore";
import { useStateValue } from "../Context/StateProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Feature({ setPostsData }) {
  /*
    1 post 
    2 text and body field for authority 
    3. authority reply 
    */
  const { id } = useParams();
  const [post, setPostData] = useState(null);
  const [state, _] = useStateValue();
  const history = useHistory();
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    (async function () {
      setPostData(await getSinglePost(id));
      setReplies(await getReplies(id));
    })();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    if (state?.user?.role !== "authority") {
      alert("Only authority can reply");
      return;
    }
    formDataObj.user = state.user?.email;
    formDataObj.name = state.user?.displayName;
    formDataObj.location = post?.location;
    await createReply(formDataObj, true, post);
    setPostsData(await getPosts());
    setReplies(await getReplies(id));
    history.push("/home");
  };
  return (
    <div>
      <PostComponent key={post?.id} post={post} />
      <hr className="feature_rule" />
      {state.user?.role == "authority" && (
        <div className="feature_authority">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" role="form">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                name="title"
              />
              <Form.Text className="text-muted">
                Enter Title for the post
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              role="form"
            >
              <Form.Label>Enter body in short for your complaint</Form.Label>
              <Form.Control type="text" placeholder="Enter Body" name="body" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              role="form"
            >
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
      )}
      <div className="feature_reply">
        {replies.map((reply) => (
          <PostComponent key={reply?.id} post={reply} />
        ))}
      </div>
    </div>
  );
}

export default Feature;
