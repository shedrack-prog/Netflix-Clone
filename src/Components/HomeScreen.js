import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";
import requests from "../Request";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen__container">
      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentries" fetchUrl={requests.fetchDocumentriesMovies} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
};

export default HomeScreen;
