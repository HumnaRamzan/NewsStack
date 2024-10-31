import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LatestNews from "./components/LatestNews";
import { useState, useEffect } from "react";
import { showNews } from "./services/ApiServices";
import HeroComp from "./components/HeroComp";
import MostWatched from "./components/MostWatched";
import TopStory from "./components/TopStory";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [newsData, setNewsData] = useState([]);

  async function gettingPost() {
    try {
      let res = await showNews();
      setNewsData(res?.data?.articles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    gettingPost();
  }, []);
  return (
    <>
      {newsData.length > 0 ? (
        <>
          <Header />
          <HeroComp newsData={newsData} />
          <LatestNews newsData={newsData} />
          <MostWatched newsData={newsData} />
          <TopStory newsData={newsData} />
          <Footer />
        </>
      ) : (
        <div className="d-flex justify-content-center text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
