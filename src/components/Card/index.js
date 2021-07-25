import React, { useState, useEffect } from 'react';
// import "../../App.css"
// axios
import axios from 'axios';

const Card = () => {

  const [display, setDisplay] = useState("none");
  const [moviesData, setMoviesData] = useState([]);
  const [pageStatus,setPageStatus] = useState(0)
  //const movies = [];
  let cardEle;

  const appStyles = {
    display: `${display}`,
  };

  useEffect(async () =>
    await axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=war`)
      .then(res => {
        const movies = res.data.Search;
        setMoviesData(res.data.Search)
        //console.log(movies)
        setPageStatus(1)
      }), []);



  return (
    <main className="main-container" >
      <>
      {pageStatus==0 ? <div><h1>Loading...</h1></div>:
      <>
      <h1 className="center-align-head"> Movies </h1>
      <div className="container-div">
      {moviesData.map((item, index) => (
       <div className="card-div" title="movie-poster" key={index} 
      //  onMouseEnter={() => setDisplay("flex")}
      //  onMouseLeave={() => setDisplay("none")}
       >
          <img className="card-img" src={item.Poster}
            alt={item.Title} />
          <div className="overlay-div" key={index} onMouseOver={handleMouseOver}
          style={appStyles}>
            <h3 className="heading-cards">
              Movie Name : {item.Title}
            </h3>
          </div>

        </div>
      ))
      }
      </div>
      </>
    }
      </>
    </main>
  );
}
export default Card;