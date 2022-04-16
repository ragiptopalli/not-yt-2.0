import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";
import Header from "./components/header/Header";
import Subscriptions from "./screens/subscriptions/Subscriptions";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";
import LikedVideosScreen from "./screens/likedVideos/LikedVideos";

import "./app.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="app__container">
        <Sidebar />
        <hr />
        <Container fluid>{children}</Container>
      </div>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    }
  }, [accessToken, navigate]);

  return (
    <Routes>
      <Route path="/auth" element={<LoginScreen />}></Route>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      ></Route>
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      ></Route>
      <Route
        path="/search/:search_query"
        element={
          <Layout>
            <SearchResultsScreen />
          </Layout>
        }
      ></Route>
      <Route
        path="/feed/subscriptions"
        element={
          <Layout>
            <Subscriptions />
          </Layout>
        }
      ></Route>
      <Route
        path="/feed/likedVideos"
        element={
          <Layout>
            <LikedVideosScreen />
          </Layout>
        }
      ></Route>
      <Route
        path="/channel/:channelId"
        element={
          <Layout>
            <ChannelScreen />
          </Layout>
        }
      ></Route>
    </Routes>
  );
};

export default App;
