import "./styles.css";

const movieList = [
  {
    id: 1,
    cover:
      "https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
    title: "Obi-wan",
    desc:
      "A weird religious cult with way too much laser power and collateral murderers.",
    rating: 1
  },
  {
    id: 2,
    cover:
      "https://m.media-amazon.com/images/M/MV5BYTY2ZjBiNDktOWVkOC00YjgxLTkwNmItYzlmZDM2NmFhMWM2XkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
    title: "Stranger Things",
    desc: "Some kids don't know any boundaries. Also: there's a jedi.",
    rating: 10
  }
];

export default function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <main className="main-app-area">
        <div className="top-bar">
          <Logo />
          <TopSearch />
        </div>
        <div className="movie-galleries">
          <MovieGallery movies={movieList} />
        </div>
        {/* <LoginSplash/> */}
      </main>
    </div>
  );
}

const LeftSidebar = () => {
  return (
    <div id="left-sidebar-wrapper">
      <a href="#">
        <img
          id="left-sidebar-image"
          style={{ borderRadius: "4rem" }}
          height="80px"
          alt="Profile avatar"
          src="https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png"
        />
      </a>
      <nav id="left-sidebar-nav">
        <a href="#">
          <p className="navLink">GALLERY</p>
        </a>
        <a href="#">
          <p className="navLink">MY RATINGS</p>
        </a>
        <a href="#">
          <p className="navLink">
            TOP COMMIES
            <br />
            BY GENRE
          </p>
        </a>
        <a href="#">
          <p className="navLink">ABOUT US</p>
        </a>
        <a href="#">
          <p className="navLink">LOGOUT</p>
        </a>
      </nav>
    </div>
  );
};

const Logo = () => {
  return <h2 className="logo">LEFTNIX</h2>;
};

const TopSearch = () => {
  return (
    <div id="top-search">
      <input id="top-search-input" type="text" />
      <img
        id="top-search-icon"
        alt="search icon"
        height="20px"
        src="https://www.clker.com/cliparts/8/n/U/M/V/E/search-icon-th.png"
        onClick={() => {
          console.log("clicked search!");
        }}
      />
    </div>
  );
};

const MovieGallery = ({ movies }) => {
  return (
    <div id="movie-gallery-wrapper">
      {movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        className="movie-item-cover"
        width="280px"
        alt="movie poster"
        src={movie.cover}
      />
      <h3 className="movie-item-title">{movie.title}</h3>
      <p className="movie-item-desc">{movie.desc}</p>
      <Slider movie={movie} />
    </div>
  );
};

MovieItem.defaultProps = {
  movie: {
    id: 0,
    cover: "#",
    title: "Title goes here",
    desc: "This is the one-liner description",
    rating: 5
  }
};

const Slider = ({ movie }) => {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min="1"
        max="10"
        value={movie.rating}
        className={`slider rating-${movie.rating}`}
        id={`slider-for-${movie.id}`}
        readOnly
      />
    </div>
  );
};
