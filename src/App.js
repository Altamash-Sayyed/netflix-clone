import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
       <NavBar />
      <Banner />

     <Row title="netflix orirginal"   fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending now" fetchUrl={requests.fetchTrending} 
     isLargeRow 
     />

<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
