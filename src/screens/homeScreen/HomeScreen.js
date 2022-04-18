import React, { useEffect } from "react";

import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Video from "../../components/video/Video";

import {
  fetchCategoriesVideos,
  fetchHomeVideos,
} from "../../redux/actions/videos.action";
import "./homeScreen.scss";

import SkeletonVideo from "../../components/skeleton/SkeletonVideo";
import Chips from "../../components/chipFilter/Chips";
import { SET_ACTIVE_CATEGORY } from "../../redux/types";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const navigate = useNavigate();

  const nextPage = () => {
    console.log("next page");
    if (activeCategory === "All") {
      dispatch(fetchHomeVideos());
    } else {
      dispatch({
        type: SET_ACTIVE_CATEGORY,
        payload: activeCategory,
      });
      dispatch(fetchCategoriesVideos(activeCategory));
    }
  };
  useEffect(() => {
    document.title = "Youtube using Youtube";
  }, []);

  useEffect(() => {
    if (!accessToken) navigate("/auth");
    else dispatch(fetchHomeVideos());
  }, [navigate, dispatch, accessToken]);

  return (
    <Container>
      <Chips />
      <InfiniteScroll
        dataLength={videos.length}
        next={() => nextPage()}
        hasMore={true}
        className="row"
        loader={<div className="spinner-border text-danger d-block mx-auto" />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End of Videos...</b>
          </p>
        }
      >
        {videos.length > 0
          ? videos.map((video) => (
              <Col md={3} lg={4} key={video.id?.videoId || video.id}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(16)].map((_, id) => (
              <Col md={4} lg={3} key={id}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
