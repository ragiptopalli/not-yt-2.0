import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchVideos } from "../../redux/actions/videos.action";
import Card from "../../components/card/Card";
import SkeletonCard from "../../components/skeleton/SkeletonCard";

const SearchResultsScreen = () => {
  const { search_query } = useParams();

  const dispatch = useDispatch();

  const videos = useSelector((state) => state.searchedVideos.videos);
  const loading = useSelector((state) => state.searchedVideos.loading);

  useEffect(() => {
    dispatch(searchVideos(search_query));
  }, [search_query, dispatch]);

  return (
    <Container className="watchScreen">
      {!loading ? (
        videos.map((video) => <Card key={video.etag} video={video} />)
      ) : (
        <SkeletonCard width="100%" height="200px" count="15" />
      )}
    </Container>
  );
};

export default SearchResultsScreen;
