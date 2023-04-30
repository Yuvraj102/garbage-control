import React, { useEffect, useState } from "react";
import PostComponent from "../Post/PostComponent";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { getPosts } from "../DataStore/dataStore";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
function Home({ postsData, setPostsData }) {
  useEffect(() => {
    (async () => {
      setPostsData(await getPosts());
    })();
    //
  }, []);
  return (
    <>
      {/* {new Array(2).fill("a").map(() => {
        return <PostComponent />;
      })} */}
      <CarouselComponent />
      {postsData.map((post) => {
        return <PostComponent key={post?.id} post={post} />;
      })}
    </>
  );
}

export default Home;
