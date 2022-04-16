import React, { useEffect } from "react";
// import './homeScreen.scss'

import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLikedVideos } from "../../redux/actions/videos.action";
import Video from "../../components/video/Video";
import SkeletonCard from "../../components/skeleton/SkeletonCard";

const LikedVideosScreen = () => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { videos, loading } = useSelector((state) => state.likedVideos);

  const navigate = useNavigate();

  useEffect(() => {
    // handle private route
    if (!accessToken) {
      navigate("/auth");
    } else {
      dispatch(getLikedVideos());
    }
  }, [navigate, dispatch, accessToken]);

  return (
    <Container>
      <Row className="mt-4">
        {!loading
          ? videos?.map((video) => (
              <Col md={4} lg={3}>
                <Video key={video.id} video={video} />
              </Col>
            ))
          : [...Array(16)].map((_, id) => (
              <Col md={4} lg={3} key={id}>
                <SkeletonCard width="100%" height="230px" />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default LikedVideosScreen;
