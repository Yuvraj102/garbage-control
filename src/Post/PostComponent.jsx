import React from "react";
import Card from "react-bootstrap/Card";
import StatusComponent from "../Status/StatusComponent";
import dummyImg from "../images/dummyImg.jpg";
import "./PostComponent.css";
import MapIcon from "@mui/icons-material/Map";
import { useHistory } from "react-router-dom";

function PostComponent({ post }) {
  let history = useHistory();

  return (
    <Card
      style={{ padding: "10px", margin: "20px" }}
      onClick={() => {
        history.push(`/post/${post?.id}`);
      }}
      className={"border_shadow"}
    >
      <Card.Header>{post?.name}</Card.Header>
      <Card.Body>
        <Card.Img
          variant="bottom"
          src={post?.url}
          style={{
            objectFit: "contain",

            // width: "50vw",
            // height: "30vh",
          }}
          className="card_img"
        />

        <blockquote className="blockquote mb-0">
          <p>{post?.title}</p>
          <footer className="blockquote mb-0">{post?.body}</footer>
        </blockquote>
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <p style={{ paddingBottom: "0" }}>{post?.date}</p>
        <p
          style={{
            display: "flex",
            paddingBottom: "0",
            alignItems: "baseline",
          }}
        >
          <p>status : {post?.status ? "done" : "incomplete"} </p>{" "}
          <StatusComponent col={post?.status ? "green" : "orange"} />
        </p>
        <a href={post?.location} target="_blank">
          <MapIcon fontSize="large" />
        </a>
      </Card.Footer>
    </Card>
  );
}

export default PostComponent;
