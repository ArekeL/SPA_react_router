const Article = ({ title, autor, text }) => {
	const styles = {
		margin: 30,
		textAlign: "left",
	};

	return (
		<article style={styles}>
			<h3
				style={{
					marginBottom: 3,
				}}>
				{title}
			</h3>
			<span
				style={{
					display: "block",
					marginBottom: 10,
					fontSize: 18,
				}}>
				{autor}
			</span>
			<p>{text}</p>
		</article>
	);
};

export default Article;
