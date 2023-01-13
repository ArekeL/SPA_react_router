import Article from "../components/Article";

const articles = [
	{
		id: 1,
		title: "How can I do it",
		autor: "Jon Morisone",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, esse voluptatum nisi accusamus perferendis voluptas alias repudiandae? Voluptatem, sapiente repellat cumque ducimus nam, nisi nulla sunt labore aperiam dolor in.",
	},
	{
		id: 2,
		title: "Statistics and probability",
		autor: "Sara Nilson",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, esse voluptatum nisi accusamus perferendis voluptas alias repudiandae? Voluptatem, sapiente repellat cumque ducimus nam, nisi nulla sunt labore aperiam dolor in.",
	},
	{
		id: 3,
		title: "How your title impacts the success of your article",
		autor: "Tim Burtonel",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, esse voluptatum nisi accusamus perferendis voluptas alias repudiandae? Voluptatem, sapiente repellat cumque ducimus nam, nisi nulla sunt labore aperiam dolor in.",
	},
	{
		id: 4,
		title: "What is Motivation?",
		autor: "Mike Weve",
		text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, esse voluptatum nisi accusamus perferendis voluptas alias repudiandae? Voluptatem, sapiente repellat cumque ducimus nam, nisi nulla sunt labore aperiam dolor in.",
	},
];

const ArticlePage = () => {
	const artList = articles.map((article) => (
		<Article key={article.id} {...article} />
	));
	return <div className='home'>{artList}</div>;
};

export default ArticlePage;
