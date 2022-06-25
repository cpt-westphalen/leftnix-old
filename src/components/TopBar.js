export const TopBar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <TopSearch />
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
        }} />
    </div>
  );
};
