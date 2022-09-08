export const LeftSidebar = (props) => {
	return (
		<div id="left-sidebar-wrapper">
			<a href="#">
				<img
					id="left-sidebar-image"
					style={{ borderRadius: '4rem' }}
					height="80px"
					alt="Profile avatar"
					src="https://avatarairlines.com/wp-content/uploads/2020/05/Female-Placeholder.png"
				/>
			</a>
			<nav id="left-sidebar-nav">
				<a
					href="#"
					onClick={() => {
						props.setPage('Gallery');
					}}
				>
					<p className="navLink">GALLERY</p>
				</a>
				<a
					href="#"
					onClick={() => {
						props.setPage('MyRatings');
					}}
				>
					<p className="navLink">MY RATINGS</p>
				</a>
				<a
					href="#"
					onClick={() => {
						props.setPage('TopMovies');
					}}
				>
					<p className="navLink">
						TOP COMMIES
						<br />
						BY GENRE
					</p>
				</a>
				<a
					href="#"
					onClick={() => {
						props.setPage('About');
					}}
				>
					<p className="navLink">ABOUT US</p>
				</a>
				<a href="#">
					<p className="navLink">LOGOUT</p>
				</a>
				<a
					href="#"
					onClick={() => {
						props.setPage('Test');
					}}
				>
					<p className="navLink">Test Page</p>
				</a>
			</nav>
		</div>
	);
};
